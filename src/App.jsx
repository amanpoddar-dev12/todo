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
  const [isComplete, setIsComplete] = useState(false);
  const [taskProp, setTaskProp] = useState({});
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
    setTaskProp((prevTask) => {
      newTask, isComplete, prevTask;
    });
  }
  useEffect(() => {
    console.log("Updated taskArray: ", taskArray);
    console.log(taskProp);
  }, [taskArray, taskProp]);
  function handleDelete(key) {
    setTaskArray((tasks) => tasks.filter((task) => task.key !== key));
    console.log(key);
  }
  function handleComplete() {
    setIsComplete(!isComplete);
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
            {/* Wrap the buttons in a flex container and add margin to the first button */}
            <div className="flex space-x-4 ml-4">
              <button
                onClick={() => handleDelete(index)}
                className="focus:outline-none"
              >
                <FaDeleteLeft className="text-2xl" />
              </button>
              <button className="focus:outline-none">
                <MdBookmarkAdd className="text-2xl" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

//1 make an object
//2 add 2 value task,isComplted
//3 itrate them in manner it will show same as previous
//4 when user delete or complete work it should be updated in object
