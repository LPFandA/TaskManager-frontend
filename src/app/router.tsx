import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import LoginPage from "../components/LoginPage";

export const router = createBrowserRouter([
    { path: "/login", element: <LoginPage /> },
    { path: "/", element: <Dashboard /> },

]);