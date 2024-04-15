import React from "react";
import "./Column.css";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Task from "../Task/Task";

const Column = ({ tasks }) => {
  return (
    <div className="parentColumn">
      <p className="columnLabel columnLabelTop">Paling Enak</p>
      <div className="column">
        <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
          {tasks.map((task) => (
            <Task
              id={task.id}
              title={task.title}
              key={task.id}
              imgSrc={task.imgSrc}
            />
            // <div key={task.id}>{task.title}</div>
          ))}
        </SortableContext>
      </div>
      <p className="columnLabel columnLabelBot">Kurang Enak</p>
    </div>
  );
};

export default Column;
