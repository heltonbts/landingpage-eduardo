import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, ArrowRight } from "lucide-react";

export default function StorySection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative w-full py-24 bg-[#0a051d] text-white">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-12"
        >
          {/* Seção 1: Conexão com a dor */}
          <motion.div variants={item} className="text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">
              Você já se sentiu perdido em uma aula de inglês?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Como se estivesse engatinhando no "ABC" enquanto todos ao seu
              redor já corriam uma maratona? Eu sei exatamente como é isso.
            </p>
            <Card className="bg-white/5 border-white/10 text-left max-w-3xl mx-auto">
              <CardContent className="p-6 space-y-4">
                <p>
                  Na escola, eu era esse aluno. Ficava para trás, vendo outros
                  que estudaram em escolas particulares avançarem, enquanto eu
                  mal saía do lugar.
                </p>
                <p>
                  Em 1988, fui para Nova York com minha esposa para trabalhar, e
                  meu vocabulário inteiro cabia em um guardanapo:
                </p>
                <div className="bg-indigo-600/20 px-4 py-3 rounded-lg text-indigo-300 font-semibold">
                  "Coca-cola, hotdog, love."
                </div>
                <p>
                  Apenas três palavras. Imagine o desespero de precisar se
                  comunicar em uma das maiores cidades do mundo, e só saber
                  pedir um lanche.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Seção 2: Descoberta do método */}
          <motion.div variants={item} className="text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">
              O ponto de virada
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Sentado em um ônibus em Nova York, percebi que aprender inglês não
              precisava ser tão complicado. Eu precisava de algo prático. Agora.
            </p>
            <Card className="bg-white/5 border-white/10 text-left max-w-3xl mx-auto">
              <CardContent className="p-6 space-y-4">
                <p>
                  Usei o que já tinha: o português e um simples dicionário de
                  bolso. Comecei a traduzir palavra por palavra.
                </p>
                <p>Ignorei regras complexas e foquei na comunicação direta.</p>
                <div className="bg-emerald-600/20 px-4 py-3 rounded-lg text-emerald-300 font-semibold flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Em apenas 6 meses, quebrei a barreira do silêncio.
                </div>
                <p>
                  Eu não precisei decorar listas infinitas de verbos. Não
                  precisei dominar o "verb to be" antes de falar minha primeira
                  frase. A tradução literal virou a ponte.
                </p>
              </CardContent>
            </Card>
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-2xl text-black font-semibold shadow-md shadow-indigo-600/20"
            >
              <p className="text-white flex items-center gap-3">
                Quero aplicar esse método
                <ArrowRight className="w-5 h-5" />
              </p>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
