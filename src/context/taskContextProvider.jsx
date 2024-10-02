import React, { useState } from "react";
import TaskContext from "./taskContext"; // Import TaskContext
const TaskContextProvider = ({ children }) => {
  const [newTask, setnewTask] = useState("");
  const [taskArray, setTaskArray] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  function handleAddnewTask() {
    const newItem = { task: newTask, id: Date.now(), isComplete: isComplete };
    console.log(newItem);
    if (newTask !== "") setTaskArray((prevArray) => [newItem, ...prevArray]);
    else console.log("please enter task!");
    setnewTask("");
  }
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      console.log("Enter key pressed");
      handleAddnewTask();
    }
  }
  function handleDelete(id) {
    const newTaskArray = taskArray.filter((task) => task.id !== id);
    setTaskArray(newTaskArray);
  }
  function handleComplete(id) {
    setTaskArray(
      taskArray.map((task) =>
        task.id === id ? { ...task, isComplete: !task.isComplete } : task
      )
    );
  }
  return (
    <TaskContext.Provider
      value={{
        newTask,
        setnewTask,
        taskArray,
        setTaskArray,
        isComplete,
        setIsComplete,
        handleAddnewTask,
        handleKeyDown,
        handleDelete,
        handleComplete,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
