import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Button from "../components/Button";

export default function Home() {
  const handleReserve = () => {
    alert("Função de reserva ainda não implementada!");
  };

  return (
    <main>
      <Header />
      <section style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", padding: "20px" }}>
        <Card title="Bem-vindo!" description="Conheça nossa pousada e serviços." />
        <Card title="Reservas" description="Faça sua reserva online de forma simples." />
      </section>
      <div style={{ textAlign: "center", margin: "20px" }}>
        <Button text="Reservar Agora" onClick={handleReserve} />
      </div>
      <Footer />
    </main>
  );
}