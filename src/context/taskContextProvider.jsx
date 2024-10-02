import React, { useState } from "react";
import TaskContext from "./taskContext"; // Import TaskContext
const TaskContextProvider = ({ children }) => {
  const [task, setTask] = useState(null);
  return (
    <TaskContext.Provider value={{ task, setTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
