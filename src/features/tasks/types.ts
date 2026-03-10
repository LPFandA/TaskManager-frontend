export type Task = {
    id: number;
    name: string;
    description: string;
    is_completed: boolean;
    priority: "Main_quest" | "Routine" | "Daily" | "Grind";
    startDate?: string | null; 
    endDate?: string | null;   
    createdAt?: string | null; 
    updatedAt?: string | null; 
};