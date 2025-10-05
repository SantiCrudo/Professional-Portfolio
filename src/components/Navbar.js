import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Santiago.dev
        </Link>
        <div className="space-x-6">
          <Link href="/about">Sobre mí</Link>
          <Link href="/projects">Proyectos</Link>
          <Link href="/contact">Contacto</Link>
        </div>
      </div>
    </nav>
  );
}
