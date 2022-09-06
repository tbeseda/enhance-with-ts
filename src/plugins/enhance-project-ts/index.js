const fs = require("node:fs");
const { build: esbuild } = require("esbuild");
const glob = require("tiny-glob");

const DIR = "enhance";
const logPrefix = "  Enhance-TS:";

async function compileProject() {
	let appFiles = await glob(`./${DIR}/**/*.*`);
	const nodeFiles = appFiles.filter(
		(path) => path.endsWith(".ts") && !path.startsWith(`${DIR}/components/`),
	);
	const browserFiles = appFiles.filter(
		(path) => path.endsWith(".ts") && path.startsWith(`${DIR}/components/`),
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
		`${logPrefix} ${staticFiles.length} files hydrated to main Enhance /app`,
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
