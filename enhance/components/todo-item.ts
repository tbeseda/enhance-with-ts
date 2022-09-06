class TodoItem extends HTMLElement {
	public label: string;
	public completed: boolean;
	checkbox: HTMLInputElement | null;

	constructor() {
		super();

		this.label = this.getAttribute("label") || "";
		this.completed = typeof this.getAttribute("completed") === "string";
		this.checkbox = this.querySelector("input");
	}

	public static get observedAttributes(): string[] {
		return ["language"];
	}

	public attributeChangedCallback(
		name: string,
		_old: string,
		newVal: string,
	): void {
		if (name === "label") {
			this.label = newVal;
		}
	}

	async connectedCallback() {
		console.log(`Rendered: "${this.label}"`);
	}
}

customElements.define("todo-item", TodoItem);
