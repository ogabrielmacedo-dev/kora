import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

export function Hero() {
	return (
		<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
			{/* Background gradient effect */}
			<div className="absolute inset-0 bg-gradient-hero" />

			{/* Decorative elements */}
			<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
			<div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

			<div className="container relative z-10">
				<div className="max-w-4xl mx-auto text-center stagger-children">
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border mb-8">
						<span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
						<span className="text-sm text-muted-foreground">
							Consultoria em ERP C-Plus 5
						</span>
					</div>

					<h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
						Tecnologia que se adapta ao{" "}
						<span className="text-gradient">seu negócio</span>
					</h1>

					<p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
						Implantação, consultoria e evolução contínua com o ERP C-Plus 5.
						Transformamos complexidade em resultados.
					</p>

					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<Button variant="hero" size="xl" asChild>
							<a
								href="https://wa.me/5521993733674"
								target="_blank"
								rel="noopener noreferrer"
								className="group"
							>
								<MessageCircle className="w-5 h-5" />
								Falar com um especialista
								<ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
							</a>
						</Button>

						<Button variant="outline" size="xl" asChild>
							<a href="#about">Conheça a Kora</a>
						</Button>
					</div>
				</div>
			</div>

			{/* Bottom gradient fade */}
			<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
		</section>
	);
}
