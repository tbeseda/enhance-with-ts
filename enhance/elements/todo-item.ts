import type {
	EnhanceElementArgs,
	EnhanceElementFunction,
	EnhanceElementResult,
} from "../types";

const TodoItem: EnhanceElementFunction = function ({
	html,
	state: { attrs },
}: EnhanceElementArgs): EnhanceElementResult {
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
};

export default TodoItem;
