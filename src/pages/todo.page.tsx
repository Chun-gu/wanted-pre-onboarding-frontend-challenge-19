import { useState } from "react";

import { TodoForm } from "@/components/todo-form";
import { TodoList } from "@/components/todo-list";

export type Todo = {
	id: string;
	content: string;
};

export function TodoPage() {
	const [todos, setTodos] = useState<Todo[]>([]);

	function handleSubmitTodo(todoContent: string) {
		const newTodo = {
			id: crypto.randomUUID(),
			content: todoContent,
		};

		setTodos((prevTodos) => [...prevTodos, newTodo]);
	}

	function handleClickRemove(id: string) {
		const newTodos = todos.filter((todo) => todo.id !== id);

		setTodos(newTodos);
	}

	return (
		<>
			<header>
				<h1>할 일 페이지</h1>
			</header>

			<main>
				<TodoForm onSubmit={handleSubmitTodo} />

				<article>
					<h2>할 일 목록</h2>
					<TodoList todos={todos} onClick={handleClickRemove} />
				</article>
			</main>
		</>
	);
}
