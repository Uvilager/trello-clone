import Column from './Column.js';

export default class Kanban {
    constructor(root) {
        this.root = root;

        Kanban.columns().forEach((column) => {
            const columnView = new Column(column.id, column.title);

            this.root.appendChild(columnView.elements.root);
        });
    }

    static columns() {
        return [
            {
                id: 1,
                title: 'Backlog',
            },
            {
                id: 2,
                title: 'In Progress',
            },
            {
                id: 3,
                title: 'Complete',
            },
            {
                id: 4,
                title: 'On Hold',
            },
        ];
    }
}
