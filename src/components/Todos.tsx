import { FC, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { AiFillDelete, AiFillEdit, AiFillSave } from "react-icons/ai";
import { removeTodo, editTodo } from "../features/todoSlice";

const Todos: FC = () => {
	const [editId, setEditId] = useState<string | number>("");
	const [newText, setNewText] = useState<string>("");
	const dispatch = useDispatch();
	const todos = useSelector((state: RootState) => state.todo.todos);

	const handleEdit = (id: string | number, text: string) => {
		setEditId(id);
		setNewText(text);
	};

	const handleSave = (id: string | number) => {
		dispatch(editTodo({ id, text: newText }));
		setEditId("");
	};

	return (
		<div>
			<ul className="list-none">
				{todos.map((todo) => (
					<li
						className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
						key={todo.id}>
						{editId === todo.id ? (
							<>
								<input
									type="text"
									className="bg-gray-600 text-gray-100 ring-2 focus:ring-indigo-500 border-1 border-indigo-700 rounded focus:indigo-500 px-4 py-1"
									value={newText}
									onChange={(e) => setNewText(e.target.value)}
								/>

								<button
									onClick={() => handleSave(todo.id)}
									className="bg-green-500 text-white border-0 py-1 px-4 hover:bg-green-800"
									type="submit">
									<AiFillSave />
								</button>
							</>
						) : (
							<>
								<div className="text-white">{todo.text}</div>
								<div className="flex space-x-2">
									<button
										onClick={() => handleEdit(todo.id, todo.text)}
										className="bg-blue-500 text-white border-0 py-1 px-4 hover:bg-blue-800">
										<AiFillEdit />
									</button>
									<button
										onClick={() => dispatch(removeTodo(todo.id))}
										className="bg-red-500 text-white border-0 py-1 px-4 hover:bg-red-800">
										<AiFillDelete />
									</button>
								</div>
							</>
						)}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Todos;
