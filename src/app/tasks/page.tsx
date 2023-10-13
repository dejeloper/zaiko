import { prisma } from "../libs/prisma";

async function loadTasks() {
  const tasks = await prisma.task.findMany();
  return tasks;
}

async function TasksPage() {
  const tasks = await loadTasks();

  return (
    <main className="min-h-screen w-full bg-gray-900">
      <h1 className="text-center m-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">
        Tareas Nuevas
      </h1>
      <section className="flex flex-row justify-center text-center m-2 gap-2 py-8 px-4   max-w-screen-xl  lg:py-16">
        <section className="w-full grid grid-cols-3 gap-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="block p-6 border rounded-lg shadow bg-gray-800 border-gray-700 hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tighttext-white">
                {task.title}
              </h5>
              <p className="font-normal text-gray-400">{task.description}</p>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}

export default TasksPage;
