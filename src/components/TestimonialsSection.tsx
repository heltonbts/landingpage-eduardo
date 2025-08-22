// src/components/TestimonialsSection.jsx

import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'David D.',
    role: 'Aluno do Ebook',
    avatarFallback: 'MC',
    image: '/public/david_dias.jpg',
    testimonial: 'Eu passei anos em cursinhos e não saía do lugar. Com este método, em duas semanas eu já estava formando frases que nunca imaginei. É direto ao ponto e realmente funciona.',
  },
  {
    name: 'Marcelo M.',
    role: 'Aluno do Ebook',
    avatarFallback: 'JP',
    image: '/public/marcelo_monteiro.jpg',
    testimonial: 'O medo de errar a gramática sempre me travava. A abordagem da tradução literal tirou esse peso. Hoje, eu simplesmente falo com muito mais confiança.',
  },
  {
    name: 'Andrea R.',
    role: 'Aluna do Ebook',
    avatarFallback: 'CS',
    image: '/public/Andrea_Rodrigues.png',
    testimonial: 'A \'muleta fonética\' que o Eduardo ensina foi um divisor de águas! Finalmente consegui entender a pronúncia de um jeito simples e lógico. Recomendo demais.',
  },
  {
    name: 'Denilson M.',
    role: 'Aluno do Ebook',
    avatarFallback: 'CS',
    image: '/public/Denilson_Motta.jpg',
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
aluno. `
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
          <Avatar className="h-24 w-24 sm:h-32 sm:w-32 border-2 border-indigo-500/50">
            <AvatarImage src="/public/eduardo.png" alt="Eduardo Augusto Malaquias" />
            <AvatarFallback className="text-3xl bg-gray-800 text-gray-300">EM</AvatarFallback>
          </Avatar>
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-bold text-white">Eduardo Augusto Malaquias</h3>
            <p className="mt-2 text-gray-300 leading-relaxed">
              Professor de inglês desde 2008 e criador do método da Tradução Literal. Com{' '}
              <span className="font-bold text-indigo-300">mais de 15 anos de experiência</span>,
              Eduardo usa sua própria jornada, do zero à fluência, para guiar brasileiros pelo caminho mais prático e rápido para falar inglês.
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
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-indigo-900/50">{testimonial.avatarFallback}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 z-10">"{testimonial.testimonial}"</p>
              </div>
              <div className="flex gap-1 mt-4 text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}