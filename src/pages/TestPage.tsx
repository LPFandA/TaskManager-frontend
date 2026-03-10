import { useState, useEffect } from "react";
import axios from "axios";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import ThemeToggle from "../components/ThemeToggle";
import type { Task } from "../features/tasks/types";

const API_BASE = "http://localhost:8000/api/tasks/";

const TestPage = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true);

    // 1️⃣ Fetch tasks on mount
    useEffect(() => {
        axios
            .get<Task[]>(API_BASE)
            .then((res) => setTasks(res.data))
            .finally(() => setLoading(false));
    }, []);

    // 2️⃣ Add task to API
    const addTask = (newTask: Omit<Task, "id">) => {
        axios
            .post<Task>(API_BASE, newTask)
            .then((res) => setTasks([...tasks, res.data]))
            .catch((err) => console.error(err));
    };


    const deleteTask = (taskId: number) => {
        axios
            .delete(`${API_BASE}${taskId}/`)
            .then(() => {
                // remove task locally
                setTasks((prev) => prev.filter((task) => task.id !== taskId));
            })
            .catch((err) => console.error(err));
    };
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white flex flex-col items-center py-10 px-4">
            {/* Header */}
            <div className="w-full max-w-lg flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Task Manager 1</h1>
                <ThemeToggle />
            </div>

            {/* Task Form */}
            <TaskForm onAddTask={(task) => addTask(task)} />

            {/* Task List */}
            <div className="w-full max-w-lg mt-6 flex flex-col mx-auto">
                {loading ? (
                    <p className="text-center">Loading tasks...</p>
                ) : tasks.length === 0 ? (
                    <p className="text-center">No tasks found</p>
                ) : (
                    tasks.map((task) => (
                        <TaskCard
                            key={task.id}
                            task={task}
                            onDelete={deleteTask}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default TestPage;