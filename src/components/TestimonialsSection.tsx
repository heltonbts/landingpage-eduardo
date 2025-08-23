import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, Star, Instagram, Phone } from "lucide-react";
import David from "../assets/david_dias.jpg";
import Marcelo from "../assets/marcelo_monteiro.jpg";
import Andrea from "../assets/Andrea_Rodrigues.png";
import Denilson from "../assets/Denilson_Motta.jpg";
import Eduardo from "../assets/eduardo.png";
import Isabela from "../assets/isabela.jpg";
import { Button } from "./ui/button";
import VideoSection from "./Video";

const testimonials = [
  {
    name: "Isabela B.",
    role: "Aluna que testou e aprovou o método",
    avatarFallback: "MC",
    image: Isabela,
    testimonial: `Eu sempre fiquei admirada com a habilidade
do professor Eduardo em ensinar de forma
simples e eficaz a tradução literal para o
aprendizado do idioma. Eu super recomendo
este ebook escrito por ele, pois traz a tradução
literal de forma simples e clara, que no início
ajuda muito a enriquecer o vocabulário e se
familiarizar com o idioma a partir do português,
tornando o processo de aprendizagem mais
fácil.`,
  },
  {
    name: "David D.",
    role: "Aluno que aprovou o método",
    avatarFallback: "MC",
    image: David,
    testimonial: `Finally, this new project "LEARN ENGLISH WITH
LITERAL TRANSLATION" brings a method
developed for you to have a daily discipline of
study. The technique that boosts the language,
proven in practice. The book also offers vocabulary
enrichment, as there are more than 1700 words
inserted in contexts, which facilitates
memorization.

CORDIALLY / RESPECTFULLY `,
  },
  {
    name: "Marcelo M.",
    role: "Aluno que aprovou o método",
    avatarFallback: "JP",
    image: Marcelo,
    testimonial:
      "O medo de errar a gramática sempre me travava. A abordagem da tradução literal tirou esse peso. Hoje, eu simplesmente falo com muito mais confiança.",
  },
  {
    name: "Andrea R.",
    role: "Aluna que aprovou o método",
    avatarFallback: "CS",
    image: Andrea,
    testimonial: `A tradução literal faz toda a diferença no processo
ensino-aprendizagem de outra língua.

O professor Eduardo é extremamente capacitado
nessa área e as aulas dele são excelentes.

Recomendo.`,
  },
  {
    name: "Denilson M.",
    role: "Aluno que aprovou o método",
    avatarFallback: "CS",
    image: Denilson,
    testimonial: `De todos os cursos que eu havia feito, nenhum me mostrou essa técnica de forma tão clara e eficiente. Aprender comtradução literal reestrutura a nova língua em nossa cabeça de
forma que aprendemos como o inglês realmente funciona na
hora de traduzir. É uma metologia que acelera seu
aprendizado automaticamente. Quando você vê, já está
familiarizado com sentenças em inglês e entendendo muito
bem frases e textos mais complexos.

Essa técnica vai mudar totalmente a forma como aprende
uma nova língua. Esse ebook escrito pelo professor Eduardo
vai te mostrar um caminho diferente para aprender de forma
mais eficaz o Inglês, e assim, transformar sua vida como
aluno. `,
  },
];

export function TestimonialsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="w-full bg-[#0a051d] py-20 sm:py-32">
      <motion.div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-12 lg:gap-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div className="text-center" variants={itemVariants}>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
            Sua Jornada Guiada por um Especialista
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
            Um método nascido da experiência real, comprovado por alunos reais.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="w-full max-w-4xl p-8 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-indigo-500/20 flex flex-col sm:flex-row items-center gap-8"
        >
          <div className="justify-center-safe items-center gap-3 flex flex-col">
            <Avatar className="h-24 w-24 sm:h-32 sm:w-32 border-2 border-indigo-500/50">
              <AvatarImage src={Eduardo} alt="Eduardo Augusto Malaquias" />
              <AvatarFallback className="text-3xl bg-gray-800 text-gray-300">
                EM
              </AvatarFallback>
            </Avatar>
            <div className="flex gap-3">
              <Button
                size="icon"
                className="mt-2 rounded-full justify-center bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600"
              >
                <Instagram className="text-white !h-5 !w-5" />
              </Button>
              <Button
                size="icon"
                className="mt-2 rounded-full justify-center !bg-green-600"
              >
                <Phone className="text-black !h-5 !w-5" />
              </Button>
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-bold text-white">
              Eduardo Augusto Malaquias
            </h3>
            <p className="mt-2 text-gray-300 leading-relaxed">
              Professor de inglês desde 2008 e criador do método da Tradução
              Literal. Com{" "}
              <span className="font-bold text-indigo-300">
                mais de 15 anos de experiência
              </span>
              , Eduardo usa sua própria jornada, do zero à fluência, para guiar
              brasileiros pelo caminho mais prático e rápido para falar inglês.
            </p>
          </div>
        </motion.div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative flex flex-col justify-between p-6 rounded-2xl bg-gray-900/50 border border-indigo-500/20 shadow-lg"
              whileHover={{ scale: 1.03, y: -5, transition: { duration: 0.2 } }}
            >
              <Quote className="absolute top-6 right-6 h-12 w-12 text-gray-700/50" />
              <div className="flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarImage
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <AvatarFallback className="bg-indigo-900/50">
                      {testimonial.avatarFallback}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 z-10">
                  "{testimonial.testimonial}"
                </p>
              </div>
              <div className="flex gap-1 mt-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="flex justify-center mx-auto px-4 mt-6 items-center">
        <motion.div
          variants={itemVariants}
          className="w-full max-w-3xl"
          whileHover={{ scale: 1.03, y: -5, transition: { duration: 0.2 } }}
        >
          <h2 className="text-3xl text-center sm:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 mt-4 mb-8">
            O Professor Eduardo tem algo importante para te contar...
          </h2>
          <VideoSection />
        </motion.div>
      </div>
    </section>
  );
}
