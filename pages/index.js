import Link from "../src/components/Link";

export default function HomePage() {
  return (
    <div>
      <h1>Ola mundo</h1>
      <Link href="/faq" passHref>Ir para a pagina do FAQ</Link>
    </div>
  );
}