import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

const AddTodo: FC = () => {
	const dispatch = useDispatch();
	const [input, setInput] = useState<string>("");

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(addTodo(input));
		setInput("");
	};

	return (
		<form className="px-6 py-2 space-x-3" onSubmit={handleSubmit}>
			<h1 className="text-bold text-indigo-500 text-2xl mb-10">Add Todo</h1>
			<input
				type="text"
				className="bg-gray-600 text-gray-100 ring-2 focus:ring-indigo-500 border-1 border-indigo-700 rounded focus:indigo-500 px-4 py-2"
				value={input}
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setInput(e.target.value)
				}
			/>
			<button
				className="bg-indigo-500 hover:bg-indigo-800 px-4 py-2 rounded text-white text-lg space-x-2"
				type="submit">
				Add Todo
			</button>
		</form>
	);
};

export default AddTodo;
