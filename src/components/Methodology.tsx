import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Entendemos profundamente sua operação, desafios e objetivos",
  },
  {
    number: "02",
    title: "Mapeamento",
    description: "Documentamos processos e identificamos oportunidades de melhoria",
  },
  {
    number: "03",
    title: "Implantação",
    description: "Configuramos o sistema alinhado à sua realidade operacional",
  },
  {
    number: "04",
    title: "Ajustes",
    description: "Refinamos configurações fiscais e operacionais",
  },
  {
    number: "05",
    title: "Evolução",
    description: "Acompanhamento contínuo para melhorias e novas necessidades",
  },
];

export function Methodology() {
  return (
    <section id="methodology" className="py-24 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Metodologia
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
            Como <span className="text-gradient">trabalhamos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Um processo estruturado para garantir resultados consistentes
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-6 md:gap-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div
                      className={`border-gradient p-6 inline-block w-full ${
                        index % 2 === 0 ? "" : ""
                      }`}
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-3xl font-bold text-primary/30">
                          {step.number}
                        </span>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>

                  {/* Center dot - desktop only */}
                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex-shrink-0 relative z-10">
                    <ArrowRight className="w-5 h-5 text-primary" />
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
