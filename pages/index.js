import Link from "../src/components/Link";
import Title from "../src/components/Title";

export default function HomePage() {
  return (
    <div>
      <Title as="h1">Ola mundo</Title>
      <Link href="/faq" passHref>Ir para a pagina do FAQ</Link>
    </div>
  );
}