import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Check, Clock } from "lucide-react";
import Ebook from "../assets/ebook.png";
import { handleClickButton } from "@/lib/utils";

export function PricingSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariantsLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const itemVariantsRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const valueItems = [
    'Acesso ao método completo "Como Aprender Inglês Com Tradução Literal"',
    "Acesso a todas as Aulas em Vídeo (Bônus Exclusivo)",
    "Acesso Vitalício ao material e futuras atualizações",
    'A "Muleta Fonética" para destravar sua pronúncia',
  ];

  return (
    <section
      id="oferta"
      className="w-full bg-[#0a051d] py-20 sm:py-32 overflow-hidden"
    >
      <motion.div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Coluna Esquerda: Mockup do Livro */}
        <motion.div
          variants={itemVariantsLeft}
          className="relative flex items-center justify-center"
        >
          <div className="absolute aspect-square w-full max-w-lg rounded-full bg-indigo-500/20 blur-3xl"></div>
          <div className="relative w-full max-w-sm h-[500px] flex items-center justify-center bg-gray-900/50 rounded-2xl border border-indigo-500/20 shadow-2xl shadow-indigo-900/30">
            <img src={Ebook} alt="Capa do Ebook" className="object-contain" />
          </div>
        </motion.div>

        {/* Coluna Direita: A Oferta */}
        <motion.div
          variants={itemVariantsRight}
          className="flex flex-col gap-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
            Seu Acesso Imediato à Fluência
          </h2>
          <p className="text-lg text-gray-300">
            Enquanto escolas de inglês cobram{" "}
            <strong className="font-bold text-white">
              mais de R$300 por mês
            </strong>{" "}
            por aulas que levam anos, você terá acesso ao método completo que me
            tirou do zero, por um valor simbólico.
          </p>

          <div className="mt-4 space-y-3 p-6 rounded-lg bg-gray-900/50 border border-gray-700/50">
            <h4 className="font-semibold text-white">O que você recebe:</h4>
            {valueItems.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-indigo-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <span className="font-bold text-indigo-300">
              OFERTA EXCLUSIVA PARA ESTA PÁGINA
            </span>
            <p className="text-white">
              Você chegou a uma página especial. Por isso, estamos oferecendo a
              você a chance de destravar seu inglês com o método completo pelo
              valor promocional de R$ 97. O objetivo é ajudar o maior número de
              brasileiros a começar a falar inglês ainda esta semana. Corra e adquira logo, a qualquer momento o preço pode voltar ao normal.
            </p>
            <div className="flex flex-col items-center my-6">
              {/* Preço antigo riscado */}
              <p>De </p>
              <p className="text-2xl sm:text-3xl font-semibold text-red-400 line-through">
                R$ 497,00
              </p>
              <p>Por Apenas</p>

              {/* Preço novo destacado */}
              <p className="my-2 text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500 animate-pulse">
                R$ 97,00
              </p>

              {/* Economia */}
              <span className="text-lg sm:text-xl text-green-400 font-semibold">
                💰 Você economiza R$ 400!
              </span>
            </div>

            <p className="font-semibold text-white">Pagamento Único</p>
          </div>

          {/* CTA Final */}
          <Button
            size="lg"
            className="w-full mt-4 py-7 text-base lg:text-lg font-bold text-white shadow-lg shadow-green-600/30 !bg-green-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center whitespace-nowrap overflow-hidden text-ellipsis"
            onClick={handleClickButton}
          >
            Quero Começar a Falar Inglês ESTA SEMANA!
          </Button>

          {/* Garantia */}
          <div className="mt-6 flex items-center gap-4 p-4 rounded-lg bg-gray-900/50 border border-gray-700">
            <ShieldCheck className="h-10 w-10 text-green-400 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-white">
                Garantia Incondicional de 30 Dias
              </h4>
              <p className="text-sm text-gray-400">
                Seu risco é zero. Se, por qualquer motivo, você não amar o
                método, basta pedir seu dinheiro de volta. Simples assim.
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-400">
            <Clock className="h-4 w-4 animate-spin" />
            <p>
              Atenção: Este preço especial de lançamento é por tempo limitado.
              Garanta o seu antes que o valor seja reajustado.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
