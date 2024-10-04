import { useContext } from "react";
import TaskContext from "../context/taskContext";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdBookmarkAdd } from "react-icons/md";
import { MdBookmarkAdded } from "react-icons/md";

import { CiSaveUp2 } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";

function Tasks() {
  const {
    taskArray,
    handleDelete,
    handleComplete,
    setEditValue,
    handleSave,
    handleEdit,
  } = useContext(TaskContext);
  return (
    <div className="mt-8 flex flex-col space-y-5 w-full sm:w-auto">
      {taskArray.map((task) => (
        <div
          key={task.id}
          className="px-4 sm:px-10  py-2 text-lg sm:text-xl rounded-md bg-slate-800 text-white focus:outline-none border border-slate-700 flex justify-between items-center"
        >
          {task.isEdited ? (
            <input
              type="text"
              defaultValue={task.task}
              style={task.isComplete ? { textDecoration: "line-through" } : {}}
              onChange={(e) => setEditValue(e.target.value)}
              className="bg-slate-800 focus:outline-none"
            ></input>
          ) : (
            <span
              style={task.isComplete ? { textDecoration: "line-through" } : {}}
            >
              {task.task}
            </span>
          )}
          <div className="flex space-x-4 ml-4">
            <button
              onClick={() => handleDelete(task.id)}
              className="focus:outline-none text-white hover:text-red-500 transition"
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
              <button
                onClick={() => handleSave(task.id)}
                className="focus:outline-none text-green-500"
              >
                <CiSaveUp2 className="text-2xl" />
              </button>
            ) : (
              <button
                onClick={() => handleEdit(task.id)}
                className="focus:outline-none text-white hover:text-blue-400 transition"
              >
                <FaEdit className="text-2xl" />
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tasks;
