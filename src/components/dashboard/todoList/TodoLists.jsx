import React, { useEffect } from "react";
import TodoRow from "./TodoRow";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../api";
import useAuth from "../../../hooks/useAuth";

const TodoLists = () => {
  const { user, effect } = useAuth();
  const { data, refetch } = useQuery({
    queryKey: ["todo"],
    queryFn: async () =>
      await axiosInstance(`/tasks?user=${user?.email}&status=to-do`),
  });
  useEffect(() => {
    refetch();
  }, [user, effect]);
  return (
    <div className="w-full  p-10 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.1)]">
      <h2 className="text-center font-bold font-primary text-2xl 2xl:text-4xl">
        To-Do List
      </h2>
      <div className="px-5 2xl:px-0 overflow-x-scroll lg:overflow-hidden">
        {data?.data?.length > 0 ? (
          <table className="mt-10 w-full mb-6 drop-shadow-[0_0_7px_rgba(0,0,0,0.2)] rounded-xl">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="px-5 py-3 bg-[white]  border-b border-[#c9c9c9] text-[#525252]  text-left text-sm uppercase font-normal"
                >
                  Todo
                </th>
                <th
                  scope="col"
                  className="px-5 py-3  bg-[white]  border-b border-[#c9c9c9] text-[#525252]  text-left text-sm uppercase font-normal"
                >
                  Priority
                </th>
                <th
                  scope="col"
                  className="px-5 lg:text-center py-3 bg-[white]  border-b border-[#c9c9c9] text-[#525252]  text-left text-sm uppercase font-normal"
                >
                  Deadline
                </th>
                <th
                  scope="col"
                  className="px-5 lg:text-center py-3 bg-[white]  border-b border-[#c9c9c9] text-[#525252]  text-left text-sm uppercase font-normal"
                >
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="rounded-xl ">
              {data?.data?.length &&
                data?.data?.map((todo, index) => (
                  <TodoRow
                    key={index}
                    index={index}
                    todo={todo}
                    refetch={refetch}
                  />
                ))}
            </tbody>
          </table>
        ) : (
          <h2 className="text-xl lg:text-3xl mt-10 text-center font-semibold">
            No Todo created yet!
          </h2>
        )}
      </div>
    </div>
  );
};

export default TodoLists;
