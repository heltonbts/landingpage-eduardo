
import { motion } from 'framer-motion';
import { CheckCircle2, Lightbulb, Video } from 'lucide-react';

export function MethodSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const benefits = [
    'Falar inglês de forma prática, sem enrolação.',
    'Aprender frases úteis desde a primeira semana.',
    'Nunca mais travar em regras gramaticais complicadas.',
    'Método direto, que funciona mesmo sem base no inglês.',
    'Pode estudar no seu tempo, de qualquer lugar.',
  ];

  return (
    <section className="w-full bg-[#0a051d] py-20 sm:py-32 text-white">
      <motion.div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Coluna Esquerda: O Método e Benefícios */}
        <div className="flex flex-col gap-8">
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3">
              <Lightbulb className="h-8 w-8 text-indigo-400" />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
                O Segredo Está na Tradução Literal
              </h2>
            </div>
          </motion.div>

          <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed">
            Quando parei de tentar decorar regras e foquei em traduzir palavra por palavra, tudo mudou. Não precisei de anos de curso, não precisei começar pelo "verb to be". Eu simplesmente comecei a falar frases reais desde o primeiro dia. E é exatamente isso que você vai aprender dentro deste ebook.
          </motion.p>

          <motion.ul variants={itemVariants} className="space-y-4 mt-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-indigo-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Coluna Direita: O Produto e Bônus */}
        <div className="flex flex-col gap-8">
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-indigo-500/20"
          >
            <h3 className="text-2xl font-semibold text-white">Seu Guia Passo a Passo</h3>
            <p className="mt-4 text-gray-300 leading-relaxed">
              No ebook “Como Aprender Inglês com Tradução Literal”, eu reuni o passo a passo completo que usei para destravar meu inglês e chegar à fluência. São capítulos curtos, objetivos e com exemplos práticos para você aplicar imediatamente.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative p-8 rounded-2xl overflow-hidden bg-indigo-950/40 border border-indigo-500/30 shadow-2xl shadow-indigo-900/40"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-indigo-500/40 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-500/40 rounded-full blur-3xl"></div>

            <div className="flex items-center gap-4">
              <div className="p-2 bg-indigo-500/20 rounded-lg">
                 <Video className="h-6 w-6 text-indigo-300" />
              </div>
              <h3 className="text-2xl font-bold text-white">Bônus Exclusivo</h3>
            </div>
            <p className="mt-4 text-gray-300 leading-relaxed">
              E tem algo que torna esse material único: para cada página do ebook, você terá acesso a uma aula em vídeo, onde eu explico aquele conteúdo como se estivesse em sala de aula com você. É como ter o autor do método sentado ao seu lado, te guiando passo a passo.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}