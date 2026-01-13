import { Building2, Cpu, Database, FileCheck, Zap } from "lucide-react";

const capabilities = [
  { icon: Cpu, label: "ERP" },
  { icon: Building2, label: "Processos" },
  { icon: FileCheck, label: "Fiscal" },
  { icon: Database, label: "Dados" },
  { icon: Zap, label: "Automação" },
];

export function AboutKora() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Sobre a Kora
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Consultoria tecnológica que{" "}
              <span className="text-gradient">entende seu negócio</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              A Kora é uma empresa de tecnologia especializada em transformar a gestão
              de empresas B2B através de consultoria estratégica e soluções personalizadas.
            </p>
            <p className="text-muted-foreground">
              Nossa atuação vai além da implantação de sistemas. Mergulhamos na realidade
              de cada cliente para identificar oportunidades, otimizar processos e garantir
              que a tecnologia trabalhe a favor do seu crescimento.
            </p>
          </div>

          <div className="relative">
            <div className="border-gradient p-8">
              <h3 className="text-lg font-semibold mb-6">Áreas de atuação</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {capabilities.map((cap, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <cap.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{cap.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Decorative glow */}
            <div className="absolute -z-10 inset-0 bg-primary/10 blur-3xl rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
