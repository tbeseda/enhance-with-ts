/** @type {import('../types').EnhanceApiFunction} */
export async function get(request) {
	console.log(`Handling ${request.path}...`);

	const todos = [
		{ title: "todo 1", completed: false },
		{ title: "todo 2", completed: true },
		{ title: "todo 3" },
	];

	const response = {
		json: { todos },
	};

	return response;
}
