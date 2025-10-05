export default function ProjectCard({ title, description, tech, link }) {
  return (
    <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <p className="mt-2 text-sm text-gray-500">
        Tecnologías: {tech.join(", ")}
      </p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Ver proyecto
      </a>
    </div>
  );
}
