import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { useForm } from "react-hook-form";
import axiosInstance from "../../../api";
import toast from "react-hot-toast";

const UpdateTask = ({ todo, isOpen, modalHandler, refetch }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (info) => {
    const { data } = await axiosInstance.patch(
      `/tasks/update/${todo?._id}`,
      info
    );
    if (data?.modifiedCount > 0) {
      toast.success("successfully updated task");
      refetch();
      modalHandler();
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={modalHandler}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[black] bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-[white] p-6 text-left align-middle shadow-xl transition-all">
                <div>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium text-center leading-6 text-gray-900"
                  >
                    Update Task
                  </Dialog.Title>
                  <div className="w-full mt-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <p>Task Title:</p>
                      <input
                        className="input my-2 input-bordered w-full focus:outline-none"
                        defaultValue={todo.title}
                        {...register("title")}
                      />
                      <p>Task Description:</p>
                      <input
                        className="input mt-2 input-bordered w-full focus:outline-none"
                        defaultValue={todo.description}
                        {...register("description")}
                      />
                      {errors.exampleRequired && (
                        <span className="text-[red]">
                          This field is required
                        </span>
                      )}
                      <hr className="mt-16" />
                      <div className="flex mt-2 justify-center gap-5">
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-[white]  focus:outline-none"
                        >
                          Update
                        </button>
                        <p
                          className="inline-flex cursor-pointer justify-center rounded-md border border-transparent bg-[#5cc2f8]  px-4 py-2 text-sm font-medium text-[white]  focus:outline-none "
                          onClick={modalHandler}
                        >
                          Cancel
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default UpdateTask;
