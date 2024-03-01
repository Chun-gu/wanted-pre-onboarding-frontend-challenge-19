import { useId, useRef } from "react";

type TodoFormProps = {
	onSubmit: (todoContent: string) => void;
};

export function TodoForm({ onSubmit: addTodo }: TodoFormProps) {
	const todoInputId = useId();
	const todoInputRef = useRef<HTMLInputElement>(null);

	function handleSubmitTodo(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (!todoInputRef.current) return;

		const todoContent = todoInputRef.current.value;
		if (todoContent === "") return;

		addTodo(todoContent);

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
