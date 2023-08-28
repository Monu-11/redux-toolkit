import { createSlice, nanoid } from "@reduxjs/toolkit";

interface Todo {
	id: string | number;
	text: string;
}
interface TodoState {
	todos: Todo[];
}
const initialState: TodoState = {
	todos: [
		{
			id: 1,
			text: "Hello World",
		},
	],
};

const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodo: (state, action) => {
			const newTodo: Todo = {
				id: nanoid(),
				text: action.payload,
			};
			state.todos.push(newTodo);
		},
		removeTodo: (state, action) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
			// const isInitialTodo = state.todos.some(
			// 	(todo) => todo.id === action.payload
			// );

			// // If it's an initial todo, do not remove it
			// if (isInitialTodo) {
			// 	console.log("Cannot remove an initially state value.");
			// } else {
			// 	// Remove the todo with the specified ID
			// 	state.todos = state.todos.filter((todo) => todo.id !== action.payload);
			// }
		},
		editTodo: (state, action) => {
			const todoToEdit = state.todos.find(
				(todo) => todo.id === action.payload.id
			);
			if (todoToEdit) {
				todoToEdit.text = action.payload.text;
			}
		},
	},
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
