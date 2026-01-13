import { BarChart3, DollarSign, Package, Receipt, TrendingUp } from "lucide-react";

const metrics = [
  { icon: DollarSign, label: "Financeiro", color: "from-green-500/20 to-green-600/20" },
  { icon: TrendingUp, label: "Vendas", color: "from-blue-500/20 to-blue-600/20" },
  { icon: Package, label: "Estoque", color: "from-orange-500/20 to-orange-600/20" },
  { icon: Receipt, label: "Fiscal", color: "from-purple-500/20 to-purple-600/20" },
  { icon: BarChart3, label: "Operação", color: "from-cyan-500/20 to-cyan-600/20" },
];

export function DataAndDashboards() {
  return (
    <section className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Dados & Dashboards
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
            Dados claros para{" "}
            <span className="text-gradient">decisões inteligentes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Transformamos informação bruta em insights acionáveis.
            Visualize o que realmente importa para seu negócio.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="group flex items-center gap-3 px-6 py-4 rounded-full bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${metric.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <metric.icon className="w-5 h-5 text-foreground" />
              </div>
              <span className="font-medium">{metric.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 border-gradient p-8 max-w-2xl mx-auto text-center">
          <p className="text-muted-foreground">
            Nossos dashboards são construídos sob medida, focando nos KPIs que
            fazem diferença para sua operação. Acompanhe métricas em tempo real
            e tome decisões baseadas em dados confiáveis.
          </p>
        </div>
      </div>
    </section>
  );
}
