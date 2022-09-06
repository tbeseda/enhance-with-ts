export default function TodoLayout({ html }) {
	return html`
    <style>
      :host {
        max-width: 480px;
        margin: 0 auto;
        display: grid;
        grid-template-rows: 3rem 4fr 1fr 2rem;
        grid-template-areas:
          'header'
          'list'
          'stats'
          'footer';
        gap: 1rem;
      }
      todo-header {
        grid-area: header;
      }
      todo-list {
        grid-area: list;
      }
      todo-stats {
        grid-area: stats;
      }
      todo-footer {
        grid-area: footer;
      }
    </style>

    <todo-header class="flex items-center justify-center"></todo-header>
    <todo-list></todo-list>
    <todo-stats class="flex items-center justify-center"></todo-stats>
    <todo-footer class="text-center text-1"></todo-footer>
  `;
}
