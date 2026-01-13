import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
	const currentYear = new Date().getFullYear();

	const scrollToSection = (id: string) => {
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<footer className="py-16 border-t border-border bg-card/50">
			<div className="container">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
					{/* Brand */}
					<div className="lg:col-span-2">
						<span className="text-2xl font-bold text-gradient">Kora</span>
						<p className="text-muted-foreground mt-4 max-w-sm">
							Consultoria tecnológica especializada em ERP, processos e dados.
							Transformamos a gestão de empresas B2B.
						</p>
					</div>

					{/* Navigation */}
					<div>
						<h4 className="font-semibold mb-4">Navegação</h4>
						<ul className="space-y-3">
							<li>
								<button
									onClick={() => scrollToSection("about")}
									className="text-muted-foreground hover:text-primary transition-colors text-left"
								>
									Sobre
								</button>
							</li>
							<li>
								<button
									onClick={() => scrollToSection("cplus")}
									className="text-muted-foreground hover:text-primary transition-colors text-left"
								>
									C-Plus 5
								</button>
							</li>
							<li>
								<button
									onClick={() => scrollToSection("differentials")}
									className="text-muted-foreground hover:text-primary transition-colors text-left"
								>
									Diferenciais
								</button>
							</li>
							<li>
								<button
									onClick={() => scrollToSection("methodology")}
									className="text-muted-foreground hover:text-primary transition-colors text-left"
								>
									Metodologia
								</button>
							</li>
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h4 className="font-semibold mb-4">Contato</h4>
						<ul className="space-y-3">
							<li>
								<a
									href="https://wa.me/5521993733674"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
								>
									<Phone className="w-4 h-4" />
									<span>WhatsApp</span>
								</a>
							</li>
							<li>
								<a
									href="mailto:korasistemas@gmail.com"
									className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
								>
									<Mail className="w-4 h-4" />
									<span>korasistemas@gmail.com</span>
								</a>
							</li>
							<li>
								<a
									href="#"
									className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
								>
									<Linkedin className="w-4 h-4" />
									<span>LinkedIn</span>
								</a>
							</li>
							<li>
								<div className="flex items-start gap-2 text-muted-foreground">
									<MapPin className="w-4 h-4 mt-0.5" />
									<span>Rio de Janeiro, RJ</span>
								</div>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom bar */}
				<div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
					<p className="text-muted-foreground text-sm">
						© {currentYear} Kora. Todos os direitos reservados.
					</p>
					<div className="flex items-center gap-6 text-sm text-muted-foreground">
						<a href="#" className="hover:text-primary transition-colors">
							Política de Privacidade
						</a>
						<a href="#" className="hover:text-primary transition-colors">
							Termos de Uso
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
