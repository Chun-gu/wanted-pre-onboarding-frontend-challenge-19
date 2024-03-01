import { useId, useRef, useState } from "react";

type Todo = {
	id: string;
	content: string;
};

export function TodoPage() {
	const todoInputId = useId();
	const todoInputRef = useRef<HTMLInputElement>(null);
	const [todos, setTodos] = useState<Todo[]>([]);

	function onSubmitTodo(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (!todoInputRef.current) return;

		const newTodo = {
			id: crypto.randomUUID(),
			content: todoInputRef.current.value,
		};

		setTodos((prevTodos) => [...prevTodos, newTodo]);

		todoInputRef.current.value = "";
	}

	function onClickDeleteTodo(id: string) {
		const newTodos = todos.filter((todo) => todo.id !== id);
		setTodos(newTodos);
	}

	return (
		<main>
			<h1>할 일 목록 페이지</h1>

			<form onSubmit={onSubmitTodo}>
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

			<article>
				<h2>할 일 목록</h2>

				<ul>
					{todos.map((todo) => (
						<li key={todo.id}>
							{todo.content}
							<button
								onClick={() => {
									onClickDeleteTodo(todo.id);
								}}
							>
								삭제
							</button>
						</li>
					))}
				</ul>
			</article>
		</main>
	);
}
