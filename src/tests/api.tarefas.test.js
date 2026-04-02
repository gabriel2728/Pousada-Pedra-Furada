import handler from "../pages/api/tarefas";

describe("API de Tarefas - PUT", () => {
  it("deve atualizar uma tarefa existente", async () => {
    // 1️⃣ cria uma tarefa primeiro
    let req = {
      method: "POST",
      body: { titulo: "Teste", descricao: "Desc" },
    };

    let res = mockResponse();

    await handler(req, res);

    const tarefaCriada = res.jsonData;

    // 2️⃣ agora edita
    req = {
      method: "PUT",
      body: {
        id: tarefaCriada.id,
        titulo: "Atualizado",
        descricao: "Nova desc",
        status: "Concluída",
      },
    };

    res = mockResponse();

    await handler(req, res);

    expect(res.statusCode).toBe(200);
  });
});

describe("API de Tarefas - DELETE", () => {
  it("deve deletar uma tarefa", async () => {
    // cria tarefa
    let req = {
      method: "POST",
      body: { titulo: "Para deletar", descricao: "Desc" },
    };

    let res = mockResponse();

    await handler(req, res);

    const tarefaCriada = res.jsonData;

    // deleta
    req = {
      method: "DELETE",
      body: { id: tarefaCriada.id },
    };

    res = mockResponse();

    await handler(req, res);

    expect(res.statusCode).toBe(200);
  });
});

function mockResponse() {
  const res = {};

  res.statusCode = 0;

  res.status = function (code) {
    this.statusCode = code;
    return this;
  };

  res.jsonData = null;

  res.json = function (data) {
    this.jsonData = data;
    return this;
  };

  return res;
}