export default function TodoStats({ html, state }) {
	const {
		store: { todos = [] },
	} = state;

	return html`
		todos: ${todos.length}
	`;
}
