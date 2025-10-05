export default function Home() {
  return (
    <section className="flex flex-col items-center text-center py-20">
      <h1 className="text-5xl font-bold">Hola, soy Santiago 👋</h1>
      <p className="mt-4 text-lg text-gray-600">
        Backend Developer especializado en Node.js y bases de datos.
      </p>
      <a
        href="/projects"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition"
      >
        Ver mis proyectos
      </a>
    </section>
  );
}