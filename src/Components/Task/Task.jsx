import React from "react";
import "./Task.css";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Task = ({ id, title, imgSrc }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="task"
    >
      <img className="logo" src={imgSrc} />
      {/* <p>Test</p> */}
      <p className="taskName">{title}</p>
    </div>
  );
};

export default Task;
