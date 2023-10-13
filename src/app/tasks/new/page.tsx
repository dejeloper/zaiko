"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

function NewTask({ params }: { params: { id: string } }) {
  const { handleSubmit, register, setValue } = useForm();
  const router = useRouter();

  useEffect(() => {
    if (params.id) {
      axios.get(`/api/tasks/${params.id}`).then((res) => {
        const task = res.data;
        setValue("title", task.title);
        setValue("description", task.description);
      });
    }
  }, [params.id, setValue]);

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await axios.put(`/api/tasks/${params.id}`, data);
    } else {
      await axios.post("/api/tasks", data);
    }

    router.push("/tasks");
    router.refresh();
  });

  const onDelete = async () => {
    if (confirm("¿Estas seguro de eliminar esta tarea?")) {
      await axios.delete(`/api/tasks/${params.id}`);
      router.push("/tasks");
      router.refresh();
    }
  };

  return (
    <main className="flex justify-center items-center h-[calc(100vh-7rem)] w-full bg-gray-900">
      <section className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">
          {params.id ? "Editar Tarea" : "Crear Tarea"}
        </h1>
        <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48  text-gray-400">
          {params.id
            ? "Edite sus Tareas y esté al día"
            : "Cree las Tareas que tiene pendiente"}
        </p>

        <form onSubmit={onSubmit} className="w-full max-w-md mx-auto">
          <input
            type="text"
            placeholder="Titulo de la Tarea"
            className="block w-full mb-2 p-4 text-sm border rounded-lg bg-gray-800 border-gray-700 placeholder-gray-400 text-white  focus:ring-blue-500 focus:border-blue-500"
            {...register("title")}
          />

          <textarea
            className="block w-full mt-2 p-4 text-sm border rounded-lg bg-gray-800 border-gray-700 placeholder-gray-400 text-white  focus:ring-blue-500 focus:border-blue-500 resize-none"
            placeholder="Descripcion de la Tarea"
            {...register("description")}
          ></textarea>
          <div className="flex justify-center">
            <button
              type="submit"
              className="text-white mt-4 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800"
            >
              {params.id ? "Editar Tarea" : "Crear Tarea"}
            </button>
            {params.id && (
              <button
                type="button"
                className="mt-4 focus:outline-none text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-red-600 hover:bg-red-700 focus:ring-red-900"
                onClick={onDelete}
              >
                Eliminar Tarea
              </button>
            )}
          </div>
        </form>
      </section>
    </main>
  );
}

export default NewTask;
