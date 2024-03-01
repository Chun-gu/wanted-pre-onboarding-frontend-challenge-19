import { useAppSelector } from "@/store";

import { TodoListItem } from "./todo-list-item";

export function TodoList() {
	const todos = useAppSelector(({ todos }) => todos.todos);

	return (
		<ul>
			{todos.map((todo) => (
				<TodoListItem key={todo.id} todo={todo} />
			))}
		</ul>
	);
}
