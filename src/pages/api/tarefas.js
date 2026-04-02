let tarefas = [];

export default function handler(req, res) {
  // GET
  if (req.method === "GET") {
    return res.status(200).json(tarefas);
  }

  // POST
  if (req.method === "POST") {
    const { titulo, descricao } = req.body;

    if (!titulo || !descricao) {
      return res.status(400).json({ erro: "Dados inválidos" });
    }

    const novaTarefa = {
      id: Date.now(),
      titulo,
      descricao,
      status: "Atribuída",
    };

    tarefas.push(novaTarefa);

    return res.status(201).json(novaTarefa);
  }

  // PUT
  if (req.method === "PUT") {
    const { id, titulo } = req.body;

    tarefas = tarefas.map((t) =>
      t.id === id ? { ...t, titulo } : t
    );

    return res.status(200).json({ message: "Atualizado" });
  }

  // DELETE
  if (req.method === "DELETE") {
    const { id } = req.body;

    tarefas = tarefas.filter((t) => t.id !== id);

    return res.status(200).json({ message: "Deletado" });
  }

  return res.status(405).json({ erro: "Método não permitido" });
}