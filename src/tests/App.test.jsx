import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      push: jest.fn(),
    };
  },
}));
describe("Página inicial", () => {
  it("deve renderizar o título principal", () => {
    render(<Home />);
    expect(
      screen.getByText("Bem-vindo à Pousada Pedra Furada")
    ).toBeInTheDocument();
  });
});