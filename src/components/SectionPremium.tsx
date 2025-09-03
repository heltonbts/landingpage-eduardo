import { motion } from "motion/react";
import {
  GraduationCap,
  BookOpen,
  UserRound,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import ebookPlusCertificate from "../assets/logo_completo.png";

// Props opcionais
type PremiumOfferSectionProps = {
  onPrimaryClick?: () => void;
  checkoutHref?: string;
  whatsappHref?: string;
  ebookImg?: string; // imagem mockup do ebook
  certificadoImg?: string; // imagem mockup do certificado
};

const features = [
  {
    icon: BookOpen,
    title: "eBook completo",
    desc: "Como Aprender Inglês Com Tradução Literal (acesso vitalício)",
  },
  {
    icon: UserRound,
    title: "Mentoria individual (4h)",
    desc: "Aplicação prática do método (Andragogia + Tradução Literal + APA)",
  },
  {
    icon: ShieldCheck,
    title: "Acompanhamento focado",
    desc: "Identificação de pontos cegos e auxílio no inglês instrumental",
  },
  {
    icon: GraduationCap,
    title: "Certificado de 33h",
    desc: "Extensão universitária emitido pela Faculdade Faciência (selo MEC)",
  },
];

export default function PremiumOfferSection({
  onPrimaryClick,
  checkoutHref = "#checkout-premium",
  whatsappHref = "#contato",
}: PremiumOfferSectionProps) {
  return (
    <section
      aria-labelledby="premium-title"
      className="w-full bg-gradient-to-br from-violet-900 to-teal-900"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 md:grid-cols-2">
        {/* Lado esquerdo: imagens */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-6"
        >
          <div className="relative flex flex-col items-center gap-6 md:flex-row">
            <img
              src={ebookPlusCertificate}
              alt="Mockup do eBook"
              width={1200}
              height={800}
              className="rounded-xl shadow-lg"
            />
          </div>
        </motion.div>

        {/* Lado direito: conteúdo */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex items-stretch"
        >
          <Card className="relative w-full self-stretch">
            <CardHeader>
              <div className="mb-1 flex items-center gap-2">
                <Badge variant="default" className="bg-green-700">
                  <Sparkles className="mr-1 h-4 w-4" /> Premium
                </Badge>
                <Badge className="bg-blue-400">
                  <span className="text-xs text-muted-foreground">
                    Inclui tudo + Certificação
                  </span>
                </Badge>
              </div>
              <CardTitle className="text-2xl font-bold">
                Mentoria + Certificação Universitária
              </CardTitle>
              <CardDescription>
                Para quem busca acompanhamento individual e diploma válido pelo
                MEC.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <ul className="grid gap-4">
                {features.map(({ icon: Icon, title, desc }, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Icon className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <div>
                      <p className="font-medium leading-none">{title}</p>
                      <p className="text-sm text-muted-foreground">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <Separator />

              <div>
                <div className="flex flex-col items-center my-6">
                  <p>De </p>
                  <p className="text-2xl sm:text-3xl font-semibold text-red-400 line-through">
                    R$ 5.000
                  </p>
                  <p>Por Apenas</p>

                  {/* Preço novo destacado */}
                  <p className="my-2 text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500 animate-pulse">
                    R$ 3.000
                  </p>

                  {/* Economia */}
                  <span className="text-lg sm:text-xl text-green-400 font-semibold">
                    💰 Você economiza R$ 2000!
                  </span>
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col items-stretch gap-3">
              <Button
                size="lg"
                className="w-full bg-emerald-600 text-black! hover:scale-105"
                variant={"default"}
                onClick={onPrimaryClick}
                asChild
              >
                <a
                  href={checkoutHref}
                  aria-label="Garantir Mentoria + Certificação"
                >
                  Garantir Mentoria + Certificação
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={whatsappHref} aria-label="Tirar dúvidas no WhatsApp">
                  Tirar dúvidas no WhatsApp
                </a>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
