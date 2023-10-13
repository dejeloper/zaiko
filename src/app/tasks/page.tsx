import TaskCard from "@/components/Tasks/TaskCard";
import { prisma } from "../libs/prisma";

async function loadTasks() {
  const tasks = await prisma.task.findMany();
  return tasks;
}

async function TasksPage() {
  const tasks = await loadTasks();

  return (
    <main className="h-[calc(100vh-7rem)] w-full bg-gray-900">
      <h1 className="text-center m-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">
        Listado de Tareas
      </h1>
      <section className="flex flex-row justify-center text-center m-2 gap-2 py-8 px-4   max-w-screen-xl  lg:py-16">
        <section className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </section>
      </section>
    </main>
  );
}

export default TasksPage;
