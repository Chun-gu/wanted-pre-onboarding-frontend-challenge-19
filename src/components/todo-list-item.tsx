import type { Todo } from "@/pages/todo.page";
import { useAppDispatch } from "@/store";
import { removeTodo } from "@/store/slices/todo-slice";

type TodoListItemProps = { todo: Todo };

export function TodoListItem({ todo }: TodoListItemProps) {
	const dispatch = useAppDispatch();

	function handleClickRemove(id: Todo["id"]) {
		dispatch(removeTodo(id));
	}

	return (
		<li key={todo.id}>
			<p>{todo.content}</p>
			<button
				onClick={() => {
					handleClickRemove(todo.id);
				}}
			>
				삭제
			</button>
		</li>
	);
}
