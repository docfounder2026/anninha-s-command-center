import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import reformaSala from "@/assets/projeto-reforma-sala.jpg";
import construcaoResidencial from "@/assets/projeto-construcao-residencial.jpg";
import reformaBanheiro1 from "@/assets/projeto-reforma-banheiro-1.jpg";
import reformaBanheiro2 from "@/assets/projeto-reforma-banheiro-2.jpg";

// Fotos ilustrativas (banco de imagens) do tipo de transformação que
// acompanhamos. Substituir por fotos reais de projetos quando disponíveis.
const PROJECTS = [
  { photo: construcaoResidencial, title: "Construção residencial" },
  { photo: reformaSala, title: "Reforma de sala e ambientes integrados" },
  { photo: reformaBanheiro1, title: "Reforma de banheiro" },
  { photo: reformaBanheiro2, title: "Reforma de banheiro compacto" },
];

export function ProjectsSection() {
  return (
    <section id="projetos" className="bg-sand py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Projetos Realizados"
          title="O tipo de resultado que acompanhamos"
          description="Imagens ilustrativas do tipo de transformação que a gestão de compras e o acompanhamento operacional da ANNINHA ajudam a viabilizar."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={i * 90} className="h-full">
              <article className="card-lift h-full overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
                <img
                  src={project.photo}
                  alt={project.title}
                  className="aspect-[3/4] w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">Imagem ilustrativa</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
