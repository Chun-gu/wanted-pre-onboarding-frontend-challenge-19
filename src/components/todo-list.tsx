import type { Todo } from "@/pages/todo.page";

import { TodoListItem } from "./todo-list-item";

type TodoListProps = { todos: Todo[]; onClick: (id: string) => void };

export function TodoList({ todos, onClick }: TodoListProps) {
	return (
		<ul>
			{todos.map((todo) => (
				<TodoListItem key={todo.id} todo={todo} onClick={onClick} />
			))}
		</ul>
	);
}
