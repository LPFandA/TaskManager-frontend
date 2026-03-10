import type { Task } from "../features/tasks/types";


type Props = {
    task: Task;
    onDelete?: (id: number) => void;
};

const TaskCard = ({ task, onDelete }: Props) => {


    const formatDate = (dateStr?: string | null) => {
        if (!dateStr) return "N/A";
        const date = new Date(dateStr);
        return date.toLocaleString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };
    return (
        <div
            className={`relative p-4 mb-3 rounded-lg border shadow
                ${task.is_completed ? "bg-green-100 dark:bg-green-900" : "bg-white dark:bg-gray-800"}
                border-gray-300 dark:border-gray-700
                text-black dark:text-white
            `}
        >
            {/* Delete cross button */}
            <button
                onClick={() => onDelete?.(task.id)}
                className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-lg font-bold"
                title="Delete task"
            >
                ×
            </button>
            <h3 className="text-lg font-bold">{task.name}</h3>

            <p className="mt-1">{task.description}</p>

            <p className="mt-2">
                Priority: <strong>{task.priority}</strong>
            </p>

            <p className="mt-1">
                Status: {task.is_completed ? "Completed ✅" : "Not completed ❌"}
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Start: {formatDate(task.startDate)}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
                End: {formatDate(task.endDate)}
            </p>
        </div>
    );
};

export default TaskCard;