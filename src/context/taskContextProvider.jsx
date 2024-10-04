import React, { useEffect, useState } from "react";
import TaskContext from "./taskContext";
const TaskContextProvider = ({ children }) => {
  const [newTask, setNewTask] = useState("");
  const [taskArray, setTaskArray] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    try {
      const tasks = JSON.parse(localStorage.getItem("tasks"));
      if (tasks && tasks.length > 0) {
        setTaskArray(tasks);
      }
    } catch (error) {
      console.error("Failed to parse tasks from localStorage:", error);
    }
  }, []);

  useEffect(() => {
    if (taskArray.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(taskArray));
    }
  }, [taskArray]);

  function handleAddnewTask() {
    const newItem = {
      task: newTask,
      id: Date.now(),
      isComplete: isComplete,
      isEdited: false,
    };
    // console.log(newItem);
    if (newTask !== "") setTaskArray((prevArray) => [newItem, ...prevArray]);
    else console.log("please enter task!");
    setNewTask("");
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
        setNewTask,
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
