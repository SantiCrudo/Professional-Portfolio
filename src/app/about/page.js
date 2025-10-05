export default function About() {
  return (
    <section className="py-20 container mx-auto px-6">
      <h1 className="text-4xl font-bold mb-6">Sobre mí</h1>

      <p className="text-lg text-gray-700 mb-4">
        Hola, soy Santiago, un **Backend Developer** apasionado por crear APIs escalables y sistemas robustos.
        Tengo experiencia en **Node.js, Express, SQL, MongoDB**, y disfruto resolver problemas complejos
        y optimizar procesos en backend.
      </p>

      <p className="text-lg text-gray-700 mb-8">
        Me interesa seguir aprendiendo tecnologías modernas, mejorar mis habilidades en **Next.js** y seguir
        desarrollando proyectos que tengan impacto real.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Habilidades técnicas</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
        <li className="bg-gray-100 p-3 rounded-lg text-center">Node.js</li>
        <li className="bg-gray-100 p-3 rounded-lg text-center">Express</li>
        <li className="bg-gray-100 p-3 rounded-lg text-center">Next.js</li>
        <li className="bg-gray-100 p-3 rounded-lg text-center">SQL</li>
        <li className="bg-gray-100 p-3 rounded-lg text-center">MongoDB</li>
        <li className="bg-gray-100 p-3 rounded-lg text-center">REST APIs</li>
      </ul>
    </section>
  );
}
