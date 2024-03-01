import type { Todo } from "@/pages/todo.page";

type TodoListItemProps = { todo: Todo; onClick: (id: string) => void };

export function TodoListItem({ todo, onClick: removeTodo }: TodoListItemProps) {
	function handleClickRemove() {
		removeTodo(todo.id);
	}

	return (
		<li key={todo.id}>
			<p>{todo.content}</p>
			<button onClick={handleClickRemove}>삭제</button>
		</li>
	);
}
