const fs = require("node:fs");
const { build: esbuild } = require("esbuild");

const DIR = "enhance";
const logPrefix = "  Enhance-TS:";

function walk(directory) {
	return fs.readdirSync(directory, { withFileTypes: true }).flatMap((item) => {
		const path = `${directory}/${item.name}`;

		if (item.isDirectory()) {
			return walk(path);
		}

		return path;
	});
}

async function compileProject() {
	const appFiles = walk(DIR);
	const tsFiles = appFiles.filter((path) => path.endsWith(".ts"));
	const nodeFiles = tsFiles.filter(
		(path) => !path.startsWith(`${DIR}/components/`),
	);
	const browserFiles = tsFiles.filter(
		(path) => path.startsWith(`${DIR}/components/`),
	);
	const staticFiles = appFiles.filter(
		(path) => !(path.endsWith(".ts") || path.endsWith("tsconfig.json")),
	);

	await esbuild({
		entryPoints: nodeFiles,
		target: "node16",
		outdir: "./app/",
		outExtension: { ".js": ".mjs" },
	});

	console.log(
		`${logPrefix} ${nodeFiles.length} files built for SSR custom elements`,
	);

	await esbuild({
		entryPoints: browserFiles,
		target: "es2020",
		outdir: "./public/components/",
		outExtension: { ".js": ".mjs" },
	});

	console.log(
		`${logPrefix} ${browserFiles.length} files built for browser web components`,
	);

	for (const path of staticFiles) {
		fs.copyFileSync(path, path.replace(DIR, "app"));
	}

	console.log(
		`${logPrefix} ${staticFiles.length} files copied to main Enhance /app`,
	);
}

module.exports = {
	deploy: {
		start: compileProject,
	},

	sandbox: {
		start: compileProject,

		async watcher({ filename }) {
			if (filename.endsWith(".ts")) {
				await compileProject();
			}
		},
	},
};
