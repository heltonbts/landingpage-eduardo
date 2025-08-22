
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen } from 'lucide-react';

function app() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0a051d] text-white">
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Anúncio (adaptado da imagem) */}
          <motion.div
            variants={itemVariants}
            className="rounded-full bg-white/10 px-4 py-1.5 text-sm text-gray-300 backdrop-blur-sm"
          >
            Vagas abertas por tempo limitado. <a href="#pricing" className="font-semibold text-white underline underline-offset-2 hover:text-indigo-300">Garanta a sua →</a>
          </motion.div>

          {/* Headline Principal */}
          <motion.div
            variants={itemVariants}
            className="text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 sm:text-6xl md:text-8xl"
          >
            De 3 Palavras em Inglês a Professor Fluente
          </motion.div>

          {/* Parágrafo de Suporte */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-lg text-gray-300"
          >
            Descubra o Método da Tradução Literal que me Tirou do Zero e Pode Fazer Você Falar Inglês Ainda Esta Semana.
          </motion.p>

          {/* Botões de Ação */}
          <motion.div
            variants={itemVariants}
            className="mt-4 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Button size="lg" className="!bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-lg shadow-indigo-600/20">
              <BookOpen className="mr-2 h-5 w-5" />
              Quero Aprender Agora
            </Button>
            <Button size="lg" className="group text-gray-300 hover:text-white !bg-indigo-600 hover:bg-indigo-500">
              Saber mais
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default app