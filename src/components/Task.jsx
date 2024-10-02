import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdBookmarkAdd } from "react-icons/md";
import { MdBookmarkAdded } from "react-icons/md";
import { VscClearAll } from "react-icons/vsc";
export default function Task() {
  const [newTask, setnewTask] = useState("");
  const [taskArray, setTaskArray] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  // const [taskProp, setTaskProp] = useState({});
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
  useEffect(() => {
    console.log("Updated taskArray: ", taskArray);
    // console.log(taskProp);
  }, [taskArray]);
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
    <div className=" text-white h-screen flex flex-col items-center ">
      <h1 className="text-7xl text-center underline font-mono font-extralight md:font-thin tracking-wide text-indigo-100">
        TODO
      </h1>
      <div className="mt-8 flex items-center space-x-4">
        <input
          type="text"
          placeholder="Enter your work...."
          className="px-12 py-3 rounded-md bg-slate-800 text-white focus:outline-none border border-slate-700"
          value={newTask}
          onChange={(e) => setnewTask(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="bg-indigo-600 p-3 rounded-full text-white"
          onClick={(e) => handleAddnewTask(e)}
        >
          <FaPlus />
        </button>
      </div>
      <div className="mt-8 flex flex-col space-y-5">
        {taskArray.map((task) => (
          <div
            key={task.id}
            className="px-10 py-2 text-2xl rounded-md bg-slate-800 text-white focus:outline-none border border-slate-700 flex justify-between items-center"
          >
            <span
              style={task.isComplete ? { textDecoration: "line-through" } : {}}
            >
              {task.task}
            </span>
            <div className="flex space-x-4 ml-4">
              <button
                onClick={() => handleDelete(task.id)}
                className="focus:outline-none"
              >
                <FaDeleteLeft className="text-2xl" />
              </button>
              <button
                className="focus:outline-none"
                onClick={() => handleComplete(task.id)}
              >
                {task.isComplete ? (
                  <MdBookmarkAdded className="text-2xl text-green-500" />
                ) : (
                  <MdBookmarkAdd className="text-2xl" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
      <button>
        <VscClearAll className="" />
      </button>
    </div>
  );
}
