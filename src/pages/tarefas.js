import { useEffect, useState } from "react";
import Menu from "../components/Menu";
import styles from "../styles/pages.module.css";

// Função para pegar token JWT do localStorage
const getToken = () => localStorage.getItem("token");

export default function Tarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [user, setUser] = useState(null);

  // 👇 Carregar informações do usuário do token
  const carregarUsuario = () => {
    const token = getToken();
    if (!token) return;

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      setUser({ id: payload.id, email: payload.email, role: payload.role });
    } catch (err) {
      console.error("Token inválido");
    }
  };

  // 👇 Carregar tarefas da API
  const carregarTarefas = async () => {
    try {
      const res = await fetch("/api/tarefas", {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      const data = await res.json();

      const formatado = data.map((t) => ({
        id: t.id,
        nome: t.titulo,
        status: t.status,
      }));

      setTarefas(formatado);
    } catch (error) {
      console.error("Erro ao carregar tarefas");
    }
  };

  useEffect(() => {
    carregarUsuario();
    carregarTarefas();
  }, []);

  // 👇 ADICIONAR TAREFA (somente Gestor/Admin)
  const adicionarTarefa = async () => {
    if (!novaTarefa || !user) return;
    if (!["GESTOR", "ADMIN"].includes(user.role)) {
      alert("Você não tem permissão para criar tarefas");
      return;
    }

    await fetch("/api/tarefas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify({ titulo: novaTarefa, descricao: "Sem descrição" }),
    });

    setNovaTarefa("");
    carregarTarefas();
  };

  // 👇 ATUALIZAR STATUS (Funcionário/Admin/Gestor)
  const atualizarStatus = async (id, statusAtual) => {
    if (!user) return;

    let novoStatus =
      statusAtual === "Atribuída"
        ? "Em andamento"
        : statusAtual === "Em andamento"
        ? "Concluída"
        : "Concluída";

    await fetch(`/api/tarefas/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify({ status: novoStatus }),
    });

    carregarTarefas();
  };

  // 👇 EDITAR (somente Gestor/Admin)
  const editarTarefa = async (id) => {
    if (!user || !["GESTOR", "ADMIN"].includes(user.role)) {
      alert("Você não tem permissão para editar tarefas");
      return;
    }

    const novoNome = prompt("Novo nome da tarefa:");
    if (!novoNome) return;

    await fetch(`/api/tarefas/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify({ titulo: novoNome }),
    });

    carregarTarefas();
  };

  // 👇 DELETAR (somente Gestor/Admin)
  const deletarTarefa = async (id) => {
    if (!user || !["GESTOR", "ADMIN"].includes(user.role)) {
      alert("Você não tem permissão para deletar tarefas");
      return;
    }

    await fetch(`/api/tarefas/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${getToken()}` },
    });

    carregarTarefas();
  };

  return (
    <div className={styles.container}>
      <Menu />

      <h1>Tarefas</h1>
      <p>Cadastro e gerenciamento de tarefas</p>

      {["GESTOR", "ADMIN"].includes(user?.role) && (
        <>
          <input
            type="text"
            placeholder="Nova tarefa"
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
          />
          <button onClick={adicionarTarefa}>Adicionar</button>
        </>
      )}

      <ul>
        {tarefas.map((t) => (
          <li key={t.id}>
            {t.nome} — <strong>{t.status}</strong>

            <button onClick={() => atualizarStatus(t.id, t.status)}>
              Atualizar
            </button>

            {["GESTOR", "ADMIN"].includes(user?.role) && (
              <>
                <button onClick={() => editarTarefa(t.id)}>Editar</button>
                <button onClick={() => deletarTarefa(t.id)}>Excluir</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}