// import { useEffect, useState } from "react";
// import TaskCard from "@/features/tasks/components/TaskCard";
// import TaskForm from "@/features/tasks/components/TaskForm";
// import { getTasks } from "@/features/tasks/services";
// import { Task } from "@/features/tasks/types";

// export default function TasksPage() {
//     const [tasks, setTasks] = useState<Task[]>([]);

//     const loadTasks = async () => {
//         const data = await getTasks();
//         setTasks(data);
//     };

//     useEffect(() => {
//         loadTasks();
//     }, []);

//     return (
//         <div className="p-6">
//             <h1 className="text-3xl font-bold mb-4">Tasks</h1>

//             <TaskForm onSuccess={loadTasks} />

//             <div className="mt-6 space-y-2">
//                 {tasks.map(task => (
//                     <TaskCard key={task.id} task={task} />
//                 ))}
//             </div>
//         </div>
//     );
// }