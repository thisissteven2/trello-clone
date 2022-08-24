import DraggableIcon from "./DraggableIcon";
import * as React from "react";

const colors = {
	todo: "bg-undone-secondary",
	ongoing: "bg-ongoing-secondary",
	completed: "bg-done-secondary",
};

const Card = ({ title, status, ...dragHandleProps }) => {
	return (
		<div className={`${colors[status]} rounded-md px-2 py-3 flex justify-between items-center gap-2`}>
			<p className="break-all">{title}</p>
			<div {...dragHandleProps}>
				<DraggableIcon />
			</div>
		</div>
	);
};

export default Card;
