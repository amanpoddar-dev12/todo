import React, { useEffect, useState } from "react";
import TaskContext from "./taskContext";
const TaskContextProvider = ({ children }) => {
  const [newTask, setNewTask] = useState("");
  const [taskArray, setTaskArray] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [editValue, setEditValue] = useState("");
  const [onClear, setOnClear] = useState(false);
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
    if (newTask !== "") setTaskArray((prevArray) => [...prevArray, newItem]);
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
    const updatedTask = taskArray.map((task) =>
      task.id === id ? { ...task, isComplete: !task.isComplete } : task
    );
    // console.log("Updated task");
    // console.log(updatedTask);
    const completedTask = updatedTask.find((task) => task.id === id);
    // console.log("COmpleted task");
    // console.log(completedTask);
    const remainingTask = updatedTask.filter((task) => task.id !== id);
    // console.log("remaining task");
    // console.log(remainingTask);
    remainingTask.push(completedTask);
    // console.log("After push Remaining");
    // console.log(remainingTask);
    setTaskArray(remainingTask);
    // console.log("Set Task Array");
    // console.log(taskArray);
  }

  function handleOnEnterSave(id) {
    console.log("enter");
    const updatedTodos = taskArray.map((task) =>
      task.id === id ? { ...task, task: editValue, isEdited: false } : task
    );
    setTaskArray(updatedTodos);
  }

  function handleClear() {
    setTaskArray([]);
    localStorage.setItem("tasks", JSON.stringify([]));
    setOnClear(true);
    setTimeout(() => {
      console.log("Inside settimeout");
      setOnClear(false);
    }, 300);
    console.log("Outside settimeout");
  }
  function handleEdit(id, currentTaskValue) {
    setEditValue(currentTaskValue);
    const updatedTodos = taskArray.map((task) =>
      task.id === id ? { ...task, isEdited: true } : task
    );
    setTaskArray(updatedTodos);
  }
  function handleSave(id) {
    const updatedTodos = taskArray.map((task) =>
      task.id === id ? { ...task, task: editValue, isEdited: false } : task
    );
    setTaskArray(updatedTodos);
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
        handleOnEnterSave,
        setEditValue,
        editValue,
        handleEdit,
        handleSave,
        handleClear,
        onClear,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
