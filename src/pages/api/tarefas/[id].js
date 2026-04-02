// pages/api/tarefas/[id].js
import { prisma } from "../../../lib/prisma";

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "PUT") {
    const { titulo, descricao, status } = req.body;
    const tarefa = await prisma.tarefa.update({
      where: { id: Number(id) },
      data: { titulo, descricao, status },
    });
    return res.status(200).json(tarefa);
  }

  if (req.method === "DELETE") {
    await prisma.tarefa.delete({
      where: { id: Number(id) },
    });
    return res.status(204).end();
  }

  return res.status(405).json({ error: "Método não permitido" });
}