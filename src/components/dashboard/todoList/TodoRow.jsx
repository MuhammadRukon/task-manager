import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useDrag } from "react-dnd";
import axiosInstance from "../../../api";
import toast from "react-hot-toast";
import UpdateTask from "../task/UpdateTask";
import { set } from "react-hook-form";

const TodoRow = ({ todo, index, refetch }) => {
  const [isOpen, setIsOpen] = useState(false);
  let [isEditModalOpen, setIsEditModalOpen] = useState(false);

  function closeModal() {
    setIsEditModalOpen(false);
  }
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: todo?._id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  const description = todo.description;
  const shortDescription = description.slice(0, 80);

  const handleDelete = async () => {
    await axiosInstance.delete(`/tasks/delete/${todo?._id}`);
    toast.success("successfully deleted task");
    refetch();
  };
  return (
    <>
      <tr
        ref={drag}
        className={` ${isDragging ? "opacity-35" : "opacity-100"}`}
      >
        {/* todo */}
        <td className="px-2 lg:px-5 py-5 border-b border-[#c9c9c9] bg-[white] text-sm">
          <div className="flex items-start lg:gap-2">
            {/* count */}
            <div className="flex-shrink-0 font-semibold text-xl">
              {index + 1}.
            </div>
            <div className="ml-3 max-w-xl">
              {/* title */}
              <p className="text-gray-900 whitespace-no-wrap font-bold text-base lg:text-lg">
                {todo.title}
              </p>
              {/* description */}
              <p className="text-gray-900 pt-2 text-sm lg:text-base whitespace-no-wrap">
                {isOpen ? (
                  <span className="text-gray-900 pt-2 text-sm lg:text-base whitespace-no-wrap">
                    {description}
                  </span>
                ) : (
                  <span className="text-gray-900 pt-2 text-sm lg:text-base whitespace-no-wrap">
                    {shortDescription}
                  </span>
                )}
                <span
                  className="text-blue-600 italic text-xs lg:text-sm cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {" "}
                  {isOpen ? "...view less." : "view more..."}
                </span>
              </p>
            </div>
          </div>
        </td>
        {/* priority */}
        <td className="px-1 lg:py-5 border-b space-x-3 border-[#c9c9c9] bg-[white] text-sm">
          <p className="text-gray-900 whitespace-no-wrap font-bold pl-6 lg:text-lg">
            {todo.priority}
          </p>
        </td>
        {/* deadline */}
        <td className="px-2 lg:px-5 border-b space-x-3 border-[#c9c9c9] bg-[white] text-sm">
          <div className="flex flex-col gap-2 text-center">{todo.deadline}</div>
        </td>
        {/* actions */}
        <td className="px-2 lg:px-5 border-b space-x-3 border-[#c9c9c9] bg-[white] text-sm">
          <div className="flex flex-col gap-2 text-center">
            {/* edit button */}
            <span
              onClick={() => {
                setIsEditModalOpen(true);
              }}
              className="relative cursor-pointer inline-block px-3 py-1 font-semibold hover:scale-110 transition leading-tight"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-[#6ee9ff]  rounded-md"
              ></span>
              <span className="relative flex items-center justify-center gap-2">
                Edit
                <FaEdit color="black" size={16} />
              </span>
              <UpdateTask
                isOpen={isEditModalOpen}
                modalHandler={closeModal}
                refetch={refetch}
                todo={todo}
              />
            </span>
            {/* delete button */}
            {
              <span
                onClick={handleDelete}
                className="relative cursor-pointer inline-block px-3 py-1 font-semibold hover:scale-110 transition  leading-tight"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-[#ff5959]  rounded-md"
                ></span>
                <span className="relative flex gap-1 items-center font-bold justify-center">
                  Delete
                  <MdDeleteForever color="black" size={18} />
                </span>
              </span>
            }
          </div>
        </td>
      </tr>
    </>
  );
};

export default TodoRow;
