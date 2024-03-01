import { TodoForm } from "@/components/todo-form";
import { TodoList } from "@/components/todo-list";

export type Todo = {
	id: string;
	content: string;
};

export function TodoPage() {
	return (
		<>
			<header>
				<h1>할 일 페이지</h1>
			</header>

			<main>
				<TodoForm />

				<article>
					<h2>할 일 목록</h2>
					<TodoList />
				</article>
			</main>
		</>
	);
}
