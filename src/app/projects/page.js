import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "API REST con Express",
    description: "Una API REST para gestionar usuarios y productos.",
    tech: ["Node.js", "Express", "MongoDB"],
    link: "https://github.com/tuusuario/api-rest",
  },
  {
    title: "Portfolio con Next.js",
    description: "Este portfolio construido con Next.js y Tailwind.",
    tech: ["Next.js", "Tailwind"],
    link: "https://github.com/tuusuario/portfolio",
  },
];

export default function Projects() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">Mis proyectos</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
