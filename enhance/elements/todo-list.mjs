export default function TodoList({ html, state: { store } }) {
	const { todos = [] } = store;

	return html`${
		todos.map(
			(todo, index) =>
				/*html*/ `
					<todo-item
						todo-id=${index}
						label="${todo.title}"
						${todo.completed ? "completed" : ""}
					>
						${todo.title}
					</todo-item>
				`,
		).join("")
	}`;
}
