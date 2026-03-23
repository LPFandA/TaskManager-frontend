import { useState } from "react";
import type { Task } from "../features/tasks/types";

type TaskFormProps = {
    onAddTask?: (task: Task) => void;
};

const TaskForm = ({ onAddTask }: TaskFormProps) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState<"Main_quest" | "Routine" | "Daily" | "Grind">("Grind");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newTask: Task = {
            id: Math.floor(Math.random() * 100000),
            name,
            description,
            is_completed: false,
            priority,
            startDate,
            endDate,
        };
        onAddTask?.(newTask);

        // reset form
        setName("");
        setDescription("");
        setPriority("Grind");
        setStartDate("");
        setEndDate("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="p-6 mb-6 border rounded-lg bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-black dark:text-white"
        >
            <h2 className="text-xl font-bold mb-4">Create Task</h2>

            <input
                placeholder="Title"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mb-3 p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-black dark:text-white"
            />

            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full mb-3 p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-black dark:text-white"
            />

            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value as "Main_quest" | "Routine" | "Daily" | "Grind")}
                className="w-full mb-3 p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-black dark:text-white"
            >
                <option value="Main_quest">Main_quest</option>
                <option value="Routine">Routine</option>
                <option value="Daily">Daily</option>
                <option value="Grind">Grind</option>
            </select>

            <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full mb-3 p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-black dark:text-white"
            />

            <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full mb-3 p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-black dark:text-white"
            />

            <button
                type="submit"
                className="px-4 py-2 rounded bg-blue-500 text-white dark:bg-blue-700 dark:text-white hover:bg-blue-600 dark:hover:bg-blue-800 transition-colors"
            >
                Add Task
            </button>
        </form>
    );
};

export default TaskForm;