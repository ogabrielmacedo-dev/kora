import { 
  HeartHandshake, 
  LineChart, 
  Settings2, 
  Shield, 
  Users, 
  Workflow 
} from "lucide-react";

const differentials = [
  {
    icon: Workflow,
    title: "Consultoria de processos",
    description: "Mapeamos e otimizamos fluxos para eliminar gargalos e aumentar eficiência",
  },
  {
    icon: Shield,
    title: "Ajustes fiscais estratégicos",
    description: "Garantimos conformidade e identificamos oportunidades tributárias",
  },
  {
    icon: LineChart,
    title: "Dashboards gerenciais",
    description: "Visualização clara de indicadores para decisões mais assertivas",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento humanizado",
    description: "Relacionamento próximo, com foco em entender suas reais necessidades",
  },
  {
    icon: Users,
    title: "Acompanhamento contínuo",
    description: "Suporte pós-implantação para evolução constante do sistema",
  },
  {
    icon: Settings2,
    title: "Soluções via API",
    description: "Integrações personalizadas para conectar sistemas e automatizar processos",
  },
];

export function Differentials() {
  return (
    <section id="differentials" className="py-24 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Diferenciais
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
            Por que escolher a <span className="text-gradient">Kora</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Combinamos expertise técnica com visão estratégica para entregar
            resultados reais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((diff, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 shadow-glow group-hover:scale-105 transition-transform">
                <diff.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{diff.title}</h3>
              <p className="text-muted-foreground text-sm">{diff.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
