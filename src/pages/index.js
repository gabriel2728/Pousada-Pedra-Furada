import { useRouter } from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Button from "../components/Button";

export default function Home() {
  const router = useRouter();

  const handleReserve = () => {
    router.push("/contato");
  };

  return (
    <main>
      {/* 🔝 HERO (parte principal) */}
      <Header />

      <section style={{ textAlign: "center", padding: "40px" }}>
        <h1>Bem-vindo à Pousada Pedra Furada</h1>
        <p>Conforto, tranquilidade e natureza em um só lugar 🌿</p>
      </section>

      {/* 🏨 SERVIÇOS */}
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <Card title="Acomodações" description="Quartos confortáveis e bem equipados." />
        <Card title="Reservas" description="Faça sua reserva online de forma simples." />
        <Card title="Localização" description="Perto das melhores atrações turísticas." />
      </section>

      {/* 🔘 CALL TO ACTION */}
      <div style={{ textAlign: "center", margin: "30px" }}>
        <Button text="Reservar Agora" onClick={handleReserve} />
      </div>

      <Footer />
    </main>
  );
}