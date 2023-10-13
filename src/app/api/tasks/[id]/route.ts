import { NextResponse } from "next/server";
import { prisma } from "@/app/libs/prisma";

interface Params {
  params: {
    id: string;
  };
}

export async function GET(request: Request, { params }: Params) {
  const { id } = params;
  const task = await prisma.task.findFirst({ where: { id: Number(id) } });

  return NextResponse.json(task);
}

export async function PUT(request: Request, { params }: Params) {
  const { id } = params;
  const data = await request.json();
  const taskUpdate = await prisma.task.update({
    where: { id: Number(id) },
    data,
  });

  return NextResponse.json(taskUpdate);
}

export async function DELETE(request: Request, { params }: Params) {
  const { id } = params;
  const task = await prisma.task.delete({ where: { id: Number(id) } });
  return NextResponse.json(task);
}
