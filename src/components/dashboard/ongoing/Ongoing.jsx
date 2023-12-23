import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../api";
import TodoRow from "../todoList/TodoRow";
import { useDrop } from "react-dnd";
import useAuth from "../../../hooks/useAuth";

const Ongoing = () => {
  const { user, effect, setEffect } = useAuth();
  const { data, refetch } = useQuery({
    queryKey: ["ongoing"],
    queryFn: async () =>
      await axiosInstance(`/tasks?user=${user?.email}&status=ongoing`),
  });
  useEffect(() => {
    console.log(effect, "outgoing before");
    refetch();
  }, [user, effect]);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: async (item) => {
      const response = await addItemTosection(item.id);
      if (response.status === 200) {
        setEffect((prevEffect) => !prevEffect);
        console.log(effect, "outgoing after");
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  const addItemTosection = async (item) =>
    await axiosInstance.patch(`/tasks/update/${item}`, { status: "ongoing" });
  return (
    <div
      ref={drop}
      className="w-full p-10 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.1)]"
    >
      <h2 className="text-center font-bold font-primary text-2xl 2xl:text-4xl">
        Ongoing List
      </h2>
      <div className="px-5 2xl:px-0">
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

            <tbody className="rounded-xl">
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
            No Ongoing Todo yet!
          </h2>
        )}
      </div>
    </div>
  );
};

export default Ongoing;
