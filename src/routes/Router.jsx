import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/error/ErrorPage";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import About from "../pages/about/About";
import ContactUs from "../pages/contact/ContactUs";
import DashboardLayout from "../layout/DashboardLayout";
import TodoLists from "../components/dashboard/todoList/TodoLists";
import axiosInstance from "../api";
import TaskManager from "../components/dashboard/task-manager/TaskManager";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "/task-manager",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <TaskManager />,
      },
    ],
  },
]);
