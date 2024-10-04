import { useContext } from "react";
import TaskContext from "../context/taskContext";

import { VscClearAll } from "react-icons/vsc";
import { FaPlus } from "react-icons/fa";
import { CiSaveUp2 } from "react-icons/ci";
export default function Search() {
  const {
    newTask,
    setNewTask,
    handleKeyDown,
    handleAddnewTask,
    handleClear,
    onClear,
  } = useContext(TaskContext);
  return (
    <div className="mt-8 flex flex-row sm:flex-row items-center space-y-1 space-x-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
      <input
        type="text"
        placeholder="Enter your work...."
        className="w-auto sm:w-auto px-4 sm:px-6 py-3 rounded-md bg-slate-800 text-white focus:outline-none border border-slate-700"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className="bg-indigo-600 p-3 rounded-full text-white hover:bg-indigo-700 transition"
        onClick={(e) => handleAddnewTask(e)}
      >
        <FaPlus />
      </button>
      <button onClick={handleClear} className="text-white">
        {onClear ? (
          <CiSaveUp2 className="text-4xl" />
        ) : (
          <VscClearAll className="text-4xl" />
        )}
      </button>
    </div>
  );
}
