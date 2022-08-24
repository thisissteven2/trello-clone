import Board from "./Board";
import { DragDropContext } from "react-beautiful-dnd";
import useTasks from "../hooks/useTasks";
import Delete from "./Delete";

const Boards = () => {
	const { setIsDragging, updateTask, deleteTask } = useTasks();

	const handleDragEnd = (result) => {
		setIsDragging(false);
		const { destination, source } = result;
		if (destination.droppableId === "delete") {
			deleteTask(source);
		} else {
			updateTask(destination, source);
		}
	};

	return (
		<DragDropContext onDragEnd={handleDragEnd} onDragStart={() => setIsDragging(true)}>
			<Delete />
			<Board statusType="todo"></Board>
			<Board statusType="ongoing"></Board>
			<Board statusType="completed"></Board>
		</DragDropContext>
	);
};

export default Boards;
