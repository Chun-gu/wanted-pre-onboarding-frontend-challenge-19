import { createSlice } from "@reduxjs/toolkit";

import type { Todo } from "@/pages/todo.page";

import type { PayloadAction } from "@reduxjs/toolkit";

export type TodoState = { todos: Todo[] };

const initialState: TodoState = {
	todos: [],
};

export const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodo: (state, { payload: newTodo }: PayloadAction<Todo>) => {
			state.todos.push(newTodo);
		},
		removeTodo: (state, { payload: todoId }: PayloadAction<Todo["id"]>) => {
			state.todos = state.todos.filter((todo) => todo.id !== todoId);
		},
	},
});

export const { addTodo, removeTodo } = todoSlice.actions;
