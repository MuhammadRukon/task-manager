import React, { useState } from "react";
import CreateTask from "../task/CreateTask";
import TodoLists from "../todoList/TodoLists";
import Ongoing from "../ongoing/Ongoing";
import Complete from "../complete/Complete";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const TaskManager = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="space-y-6">
        <div>
          <TodoLists />
        </div>
        <div className="lg:flex gap-6">
          <Ongoing />
          <Complete />
        </div>
        <CreateTask />
      </div>
    </DndProvider>
  );
};

export default TaskManager;
