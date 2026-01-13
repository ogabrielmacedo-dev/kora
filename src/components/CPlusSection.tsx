import { Check, Server } from "lucide-react";

const features = [
  "Gestão financeira completa",
  "Controle de estoque avançado",
  "Módulo fiscal integrado",
  "Vendas e faturamento",
  "Compras e supply chain",
  "Relatórios gerenciais",
];

export function CPlusSection() {
  return (
    <section id="cplus" className="py-24 md:py-32 bg-muted/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="border-gradient p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                    <Server className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">C-Plus 5</h3>
                    <p className="text-muted-foreground text-sm">ERP Completo</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Plataforma
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              A base tecnológica para sua{" "}
              <span className="text-gradient">evolução</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              O ERP C-Plus 5 é a plataforma utilizada pela Kora para estruturar e
              evoluir a gestão das empresas clientes.
            </p>
            <p className="text-muted-foreground">
              Um sistema robusto, flexível e em constante evolução, que se adapta
              às necessidades específicas de cada operação. Com a consultoria Kora,
              extraímos o máximo potencial da ferramenta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
