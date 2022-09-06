type Todo = {
	title: string;
	completed?: boolean;
};

export async function get() {
	const todos: Todo[] = [
		{ title: "todo 1", completed: false },
		{ title: "todo 2", completed: true },
		{ title: "todo 3" },
		{ title: "todo 4", completed: false },
		{ title: "todo 5", completed: false },
		{ title: "todo 6", completed: false },
	];

	return {
		json: { todos },
	};
}
