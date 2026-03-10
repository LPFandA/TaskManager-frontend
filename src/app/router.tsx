import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import TasksPage from "../pages/Tasks/TaskPage";

export const router = createBrowserRouter([
    { path: "/", element: <Dashboard /> },
    { path: "/tasks", element: <TasksPage /> },
]);