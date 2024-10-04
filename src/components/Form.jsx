import { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdBookmarkAdd } from "react-icons/md";
import { MdBookmarkAdded } from "react-icons/md";
import { VscClearAll } from "react-icons/vsc";
import { CiSaveUp2 } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import TaskContext from "../context/taskContext";

export default function Task() {
  const {
    newTask,
    setNewTask,
    taskArray,
    handleKeyDown,
    handleAddnewTask,
    handleDelete,
    handleComplete,
    handleClear,
    onClear,
    setEditValue,
    handleSave,
    handleEdit,
  } = useContext(TaskContext);

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
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="bg-indigo-600 p-3 rounded-full text-white"
          onClick={(e) => handleAddnewTask(e)}
        >
          <FaPlus />
        </button>
        <button onClick={handleClear}>
          {onClear ? (
            <CiSaveUp2 className="text-4xl" />
          ) : (
            <VscClearAll className="text-4xl" />
          )}
        </button>
      </div>
      <div className="mt-8 flex flex-col space-y-5">
        {taskArray.map((task) => (
          <div
            key={task.id}
            className="px-10 py-2 text-2xl rounded-md bg-slate-800 text-white focus:outline-none border border-slate-700 flex justify-between items-center"
          >
            {task.isEdited ? (
              <input
                type="text"
                defaultValue={task.task}
                style={
                  task.isComplete ? { textDecoration: "line-through" } : {}
                }
                onChange={(e) => setEditValue(e.target.value)}
                className="bg-slate-800 focus:outline-none"
              ></input>
            ) : (
              <span
                style={
                  task.isComplete ? { textDecoration: "line-through" } : {}
                }
              >
                {task.task}
              </span>
            )}
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
              {task.isEdited ? (
                <button onClick={() => handleSave(task.id)}>
                  <CiSaveUp2 className="text-green-500" />
                </button>
              ) : (
                <button onClick={() => handleEdit(task.id)}>
                  <FaEdit />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
