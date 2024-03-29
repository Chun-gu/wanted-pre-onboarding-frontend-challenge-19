import { useId, useRef } from "react";

import { useAppDispatch } from "@/store";
import { addTodo } from "@/store/slices/todo-slice";

export function TodoForm() {
	const todoInputId = useId();
	const todoInputRef = useRef<HTMLInputElement>(null);
	const dispatch = useAppDispatch();

	function handleSubmitTodo(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (!todoInputRef.current) return;

		const todoContent = todoInputRef.current.value;
		if (todoContent === "") return;

		const newTodo = {
			id: crypto.randomUUID(),
			content: todoContent,
		};

		dispatch(addTodo(newTodo));

		todoInputRef.current.value = "";
	}

	return (
		<form onSubmit={handleSubmitTodo}>
			<label htmlFor={todoInputId}>새로운 할 일: </label>
			<input
				id={todoInputId}
				name="todo"
				type="text"
				ref={todoInputRef}
				placeholder="할 일을 입력하세요"
			/>
			<button type="submit">추가</button>
		</form>
	);
}
