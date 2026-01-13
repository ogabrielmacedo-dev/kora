import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Vamos construir a melhor solução para o{" "}
            <span className="text-gradient">seu negócio</span>
          </h2>
          
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Converse com um de nossos especialistas e descubra como a Kora pode
            transformar a gestão da sua empresa.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <MessageCircle className="w-5 h-5" />
                Falar com um especialista
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          <p className="text-muted-foreground text-sm mt-6">
            Sem compromisso. Entendemos sua realidade antes de propor qualquer solução.
          </p>
        </div>
      </div>
    </section>
  );
}
