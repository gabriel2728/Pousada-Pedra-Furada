// pages/api/tarefas/index.js
import { prisma } from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const tarefas = await prisma.tarefa.findMany();
    return res.status(200).json(tarefas);
  }

  if (req.method === "POST") {
    const { titulo, descricao } = req.body;
    if (!titulo) return res.status(400).json({ error: "Titulo é obrigatório" });

    const tarefa = await prisma.tarefa.create({
      data: { titulo, descricao, status: "Atribuída" },
    });

    return res.status(201).json(tarefa);
  }

  return res.status(405).json({ error: "Método não permitido" });
}