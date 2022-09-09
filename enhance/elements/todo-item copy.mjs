/** @type {import('../types').EnhanceElementFunction} */
export default function TodoItem({ html, state: { attrs } }) {
	const todoId = attrs["todo-id"];
	const completed = typeof attrs.completed === "string";

	return html`
		<div class="flex gap-2 mb-1">
			<form method="POST" action="/todos">
				<input type="hidden" name="todoId" value="${todoId}">
				<input type="checkbox" name="completed" ${completed ? "checked" : ""} />
			</form>
			<slot></slot>
		</div>

		<script src="/_static/components/todo-item.mjs"></script>
	`;
}
