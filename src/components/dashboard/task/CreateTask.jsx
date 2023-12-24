import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axiosInstance from "../../../api";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";

const CreateTask = () => {
  const { user, setEffect } = useAuth();
  const navigate = useNavigate();
  const [priority, setPriority] = useState("Select Priority Level");
  //  refetch after adding task
  const handleRefetch = () => {
    setEffect((prevEffect) => !prevEffect);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const deadline = e.target.deadline.value;
    const email = user?.email;
    const status = "to-do";

    if (
      title?.length < 1 ||
      description?.length < 1 ||
      priority === "Select Priority Level" ||
      deadline === "Select Deadline"
    ) {
      alert("fill up all inputs");
      return;
    }
    try {
      const task = { title, description, priority, deadline, email, status };
      //create task
      const response = await axiosInstance.post("/tasks/create-task", task);
      e.target.reset();
      if (response.status === 200) {
        handleRefetch();
        toast.success(`sucessfully created task. Deadline ${deadline}`);
      } else {
        toast.error("could not create task");
      }
      navigate("/task-manager");
    } catch (error) {
      console.log(error.message);
      alert("error occurred");
    }
  };
  return (
    <div className="w-full p-8 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.1)]">
      <h2 className="text-center font-bold font-primary text-2xl 2xl:text-4xl">
        Create a Task
      </h2>
      <form onSubmit={(e) => handleSubmit(e)} className="card-body p-0 mt-7">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* title */}
          <div className="form-control  flex-1">
            <label className="label mb-[1px]">
              <span className="label-text">Task Title</span>
            </label>
            <input
              type="text"
              placeholder="Task Title"
              name="title"
              className="input input-bordered focus:outline-none"
              required
            />
          </div>
          {/* priority level */}
          <div className="form-control flex-1">
            <label className="label mb-[1px]">
              <span className="label-text">Priority level</span>
            </label>
            <select
              onChange={(e) => setPriority(e.target.value)}
              value={priority}
              className="select select-bordered focus:outline-none w-full "
            >
              <option disabled>Select Priority Level</option>
              <option>Low</option>
              <option>Moderate</option>
              <option>High</option>
            </select>
          </div>
          {/* deadline */}
          <div className="form-control  flex-1">
            <label className="label mb-[1px]">
              <span className="label-text">Deadline</span>
            </label>
            <input
              type="date"
              name="deadline"
              id=""
              className="border-[#d9d9d9] border-[1px] h-full min-h-[48px] rounded-lg px-5"
            />
          </div>
        </div>
        {/* description */}
        <div className="form-control  flex-1">
          <span className="label label-text mb-px mt-6">task description</span>
          <textarea
            name="description"
            className="textarea textarea-bordered resize-none focus:outline-none"
            placeholder="task Description"
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-primary hover:bg-[white] hover:text-primary hover:border-primary text-lg w-fit px-10 mx-auto text-[white]">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
