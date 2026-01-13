import { Lightbulb } from "lucide-react";

export function Vision() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="border-gradient p-8 md:p-12 lg:p-16 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
              <Lightbulb className="w-8 h-8 text-primary" />
            </div>
            
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed mb-6">
              "Tecnologia só gera resultado quando está{" "}
              <span className="text-gradient">alinhada à realidade</span> do negócio."
            </blockquote>
            
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A Kora atua como parceira estratégica, não apenas como fornecedora de software.
              Entendemos seu negócio antes de propor soluções.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
