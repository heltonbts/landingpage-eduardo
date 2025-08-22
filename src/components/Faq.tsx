import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function Faq() {
  return (
    // Seção principal com fundo escuro e espaçamento vertical
    <section className="w-full bg-[#0d1117] py-20 sm:py-24">
      <div className="container mx-auto max-w-3xl px-4">
        {/* Títulos da Seção */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Tudo o que você precisa saber antes de destravar seu inglês.
          </p>
        </div>

        {/* Componente Acordeão */}
        <Accordion type="single" collapsible className="w-full">
          {/* Cada AccordionItem agora tem seu próprio estilo */}
          <AccordionItem value="item-1" className="mb-4 rounded-lg border border-gray-800 bg-gray-900/50 shadow-md">
            <AccordionTrigger className="px-6 py-4 text-left font-semibold text-white hover:no-underline">
              Para quem é este ebook? Funciona para quem é iniciante total?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300 mt-3">
              Sim! O método foi pensado principalmente para quem está começando do zero ou se sente travado com métodos tradicionais. Assim como o Professor Eduardo, que começou com apenas 3 palavras, você aprenderá uma ponte para a comunicação real, sem precisar de nenhuma base anterior em inglês.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="mb-4 rounded-lg border border-gray-800 bg-gray-900/50 shadow-md">
            <AccordionTrigger className="px-6 py-4 text-left font-semibold text-white hover:no-underline">
              O método da "Tradução Literal" não vai me fazer falar um inglês "errado"?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300 mt-3">
              Essa é uma ótima pergunta. O objetivo da Tradução Literal não é a perfeição gramatical, mas sim a <span className="font-bold">comunicação</span>. Ela funciona como uma ferramenta inicial para você quebrar a barreira do silêncio e ganhar confiança para construir suas próprias frases. No ebook, você aprende a usar essa ponte de forma inteligente para falar de maneira clara e ser entendido.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="mb-4 rounded-lg border border-gray-800 bg-gray-900/50 shadow-md">
            <AccordionTrigger className="px-6 py-4 text-left font-semibold text-white hover:no-underline mt-3">
              O que eu recebo exatamente ao comprar o produto?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300 mt-3">
              Você recebe o acesso completo e vitalício ao ebook "Como Aprender Inglês com Tradução Literal" em formato digital (PDF). Além disso, ganha o bônus exclusivo: uma videoula para cada página do ebook, onde o Professor Eduardo explica o conteúdo em detalhes, como se estivesse ao seu lado.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="mb-4 rounded-lg border border-gray-800 bg-gray-900/50 shadow-md">
            <AccordionTrigger className="px-6 py-4 text-left font-semibold text-white hover:no-underline">
              Como e quando receberei o acesso?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300 mt-3">
              O acesso é imediato. Assim que seu pagamento for confirmado, você receberá um e-mail da Hotmart, nossa plataforma de vendas, com todas as instruções e o link para acessar tanto o ebook quanto as videoaulas.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="mb-4 rounded-lg border border-gray-800 bg-gray-900/50 shadow-md">
            <AccordionTrigger className="px-6 py-4 text-left font-semibold text-white hover:no-underline">
              E se eu não gostar ou não me adaptar? Tenho alguma garantia?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300 mt-3">
              Com certeza. Sua confiança é nossa prioridade. <span className="font-bold"> Você tem uma garantia incondicional de 30 dias. </span> Se por qualquer motivo você achar que o método não é para você, basta pedir o reembolso diretamente na plataforma da Hotmart e devolveremos 100% do seu dinheiro, sem burocracia. O risco é todo nosso.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="rounded-lg border border-gray-800 bg-gray-900/50 shadow-md">
            <AccordionTrigger className="px-6 py-4 text-left font-semibold text-white hover:no-underline">
              Preciso de muito tempo por dia para estudar?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300 mt-3">
              Não. O método foi feito para ser prático e se encaixar na sua rotina. Os capítulos são curtos e objetivos, permitindo que você aprenda e aplique o conhecimento em poucos minutos por dia, estudando de onde estiver e no seu próprio ritmo.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}