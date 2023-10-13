"use client";
import { Task } from "@prisma/client";
import { useRouter } from "next/navigation";

interface Props {
  task: Task;
}

function TaskCard({ task }: Props) {
  const router = useRouter();
  return (
    <div
      className="block p-6 border rounded-lg shadow bg-gray-800 border-gray-700 hover:bg-gray-700 hover:cursor-pointer"
      onClick={() => {
        router.push(`/tasks/edit/${task.id}`);
      }}
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tighttext-white">
        {task.title}
      </h5>
      <p className="font-normal text-gray-400">{task.description}</p>
    </div>
  );
}

export default TaskCard;
