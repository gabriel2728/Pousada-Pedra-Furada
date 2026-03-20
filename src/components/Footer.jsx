import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2026 Pousada Pedra Furada - Todos os direitos reservados</p>
      <p>Contato: contato@pousadapedrafurada.com | Tel: (11) 99999-9999</p>
    </footer>
  );
}