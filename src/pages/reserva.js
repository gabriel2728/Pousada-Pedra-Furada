import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Reserva() {
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Reserva feita para ${nome} na data ${data}`);
  };

  return (
    <>
      <Header />

      <main style={{ padding: "20px", textAlign: "center" }}>
        <h1>Reserva</h1>
        <p>Preencha os dados para fazer sua reserva.</p>

        <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
          <div>
            <input
              type="text"
              placeholder="Seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <div style={{ marginTop: "10px" }}>
            <input
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
              required
            />
          </div>

          <button style={{ marginTop: "15px" }} type="submit">
            Confirmar Reserva
          </button>
        </form>
      </main>

      <Footer />
    </>
  );
}