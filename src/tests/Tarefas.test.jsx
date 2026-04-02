import { render, screen, fireEvent } from "@testing-library/react";
import Tarefas from "../pages/tarefas";
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([]),
  })
);
describe("Página Tarefas", () => {

  beforeEach(() => {
  fetch.mockClear();
});
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("deve renderizar o título Tarefas", () => {
    render(<Tarefas />);
    
    expect(
      screen.getByRole("heading", { name: "Tarefas" })
    ).toBeInTheDocument();
  });

  it("deve renderizar a descrição da página", () => {
    render(<Tarefas />);
    
    expect(
      screen.getByText("Cadastro e gerenciamento de tarefas")
    ).toBeInTheDocument();
  });

  it("deve renderizar tarefas iniciais", () => {
    render(<Tarefas />);

    expect(
      screen.getByText((text) => text.includes("Arrumar quarto 101"))
    ).toBeInTheDocument();

    expect(
      screen.getByText((text) => text.includes("Lavar pátio"))
    ).toBeInTheDocument();
  });

  it("deve adicionar uma nova tarefa", () => {
    render(<Tarefas />);

    const input = screen.getByPlaceholderText("Nova tarefa");
    const botao = screen.getByText("Adicionar");

    fireEvent.change(input, { target: { value: "Teste tarefa" } });
    fireEvent.click(botao);

    expect(
      screen.getByText((text) => text.includes("Teste tarefa"))
    ).toBeInTheDocument();
  });

  it("deve deletar uma tarefa", () => {
    render(<Tarefas />);

    const botaoExcluir = screen.getAllByText("Excluir")[0];

    fireEvent.click(botaoExcluir);

    expect(
      screen.queryByText((text) => text.includes("Arrumar quarto 101"))
    ).not.toBeInTheDocument();
  });

  it("deve editar uma tarefa", () => {
    render(<Tarefas />);

    jest.spyOn(window, "prompt").mockReturnValue("Quarto 101 limpo");

    const botaoEditar = screen.getAllByText("Editar")[0];

    fireEvent.click(botaoEditar);

    expect(
      screen.getByText((text) => text.includes("Quarto 101 limpo"))
    ).toBeInTheDocument();
  });

});