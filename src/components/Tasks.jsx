import { useContext } from "react";
import TaskContext from "../context/taskContext";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdBookmarkAdd, MdBookmarkAdded } from "react-icons/md";
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
    editValue,
  } = useContext(TaskContext);

  return (
    <div className="mt-8 flex flex-col space-y-5">
      {taskArray.map((task) => (
        <div
          key={task.id}
          className="px-4 py-2  text-lg sm:text-xl lg:text-2xl rounded-md bg-slate-800 text-white focus:outline-none border border-slate-700 flex justify-between items-center"
        >
          {task.isEdited ? (
            <input
              type="text"
              value={editValue}
              style={task.isComplete ? { textDecoration: "line-through" } : {}}
              onChange={(e) => setEditValue(e.target.value)}
              className="w-full max-w-full bg-slate-800 text-lg px-3 py-2 rounded-md focus:outline-none  sm:text-lg lg:text-xl"
            />
          ) : (
            <span
              style={task.isComplete ? { textDecoration: "line-through" } : {}}
            >
              {task.task}
            </span>
          )}
          <div className="flex space-x-2 sm:space-x-4 ml-4">
            <button
              onClick={() => handleDelete(task.id)}
              className="focus:outline-none"
            >
              <FaDeleteLeft className="text-xl sm:text-2xl" />
            </button>
            <button
              className="focus:outline-none"
              onClick={() => handleComplete(task.id)}
            >
              {task.isComplete ? (
                <MdBookmarkAdded className="text-xl sm:text-2xl text-green-500" />
              ) : (
                <MdBookmarkAdd className="text-xl sm:text-2xl" />
              )}
            </button>
            {task.isEdited ? (
              <button onClick={() => handleSave(task.id)}>
                <CiSaveUp2 className="text-green-500 text-lg sm:text-xl" />
              </button>
            ) : (
              <button onClick={() => handleEdit(task.id, task.task)}>
                <FaEdit className="text-lg sm:text-xl" />
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tasks;
