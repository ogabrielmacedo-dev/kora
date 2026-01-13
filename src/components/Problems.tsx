import { AlertTriangle, BarChart3, FileWarning, Settings, TrendingUp } from "lucide-react";

const problems = [
  {
    icon: Settings,
    title: "Processos desorganizados",
    description: "Fluxos manuais e retrabalho que consomem tempo e recursos",
  },
  {
    icon: BarChart3,
    title: "Sistemas subutilizados",
    description: "Investimento em tecnologia que não entrega todo seu potencial",
  },
  {
    icon: AlertTriangle,
    title: "Falta de clareza nos dados",
    description: "Dificuldade em tomar decisões baseadas em informações confiáveis",
  },
  {
    icon: FileWarning,
    title: "Riscos fiscais",
    description: "Exposição a multas e inconsistências tributárias",
  },
  {
    icon: TrendingUp,
    title: "Crescimento sem estrutura",
    description: "Escalabilidade comprometida por falta de processos sólidos",
  },
];

export function Problems() {
  return (
    <section id="problems" className="py-24 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Desafios que impedem seu{" "}
            <span className="text-gradient">crescimento</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Reconhece algum desses cenários na sua empresa?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group border-gradient p-6 hover:bg-muted/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <problem.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
              <p className="text-muted-foreground text-sm">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
