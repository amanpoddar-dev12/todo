import "./App.css";

import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import "./index.css";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdBookmarkAdd } from "react-icons/md";
import { MdBookmarkAdded } from "react-icons/md";
function App() {
  const [newTask, setnewTask] = useState("");
  const [taskArray, setTaskArray] = useState([]);

  function handleAddnewTask() {
    if (newTask !== "") setTaskArray((prevArray) => [newTask, ...prevArray]);
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
  }, [taskArray]);
  function handleDelete(key) {
    setTaskArray(() => taskArray.filter((_, i) => i !== key));
    console.log(key);
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
          className="px-20 py-2 rounded-md bg-slate-800 text-white focus:outline-none border border-slate-700"
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
        {taskArray.map((task, index) => (
          <div
            key={index}
            className="px-10 py-2 text-2xl rounded-md bg-slate-800 text-white focus:outline-none border border-slate-700 flex justify-between items-center"
          >
            <span>{task}</span>
            <button onClick={() => handleDelete(index)} className="ml-4">
              <FaDeleteLeft />
            </button>
            <button className="ml-4">
              <MdBookmarkAdd />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
