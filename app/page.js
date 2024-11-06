"use client"

/* External Source */
import { YouTubeEmbed } from '@next/third-parties/google'

/* Components */
import Navigation from './Components/Navigation';
import TitleTwo from "./Components/TitleTwo";
import Badge from "./Components/Badge";
import Button from "./Components/Button";
import GlowingSection from "./Components/GlowingSection";
import GlowingCard from './Components/GlowingCard';
import FeatureCard from "./Components/FeatureCard";
import PortfolioItem from "./Components/PortfolioItem";
import WorkflowProcess from "./Components/WorkflowProcess";
import DoubleColumnSection from "./Components/PageStructure/DoubleColumnSection";
import SingleColumnSection from "./Components/PageStructure/SingleColumnSection";

/* Data Import */
import featuresList from "./Data/featuresList.json";
import portfolio from "./Data/portfolio.json";

export default function Home() {

  return (
    <main>
      <header id="topo" className="min-w-full">
        <div className="flex flex-col min-h-screen bg-hero-background bg-cover bg-center">
          <Navigation />
          <div className="container mx-auto flex flex-col justify-center items-center grow mb-28">
            <div className="text-xs text-black px-4 py-2 mb-8 rounded-lg bg-highlight font-semibold uppercase">A transformação digital começa aqui</div>
            <h1 className="text-6xl md:text-9xl text-white font-black text-center leading-none tracking-tighter"><span className="text-highlight">Tecnologia</span> para Negócios</h1>
            <h2 className="text-white text-xl mt-6 font-light text-center">Criação de sites, landing pages e soluções tecnológicas para acelerar o seu crescimento.</h2>
          </div>
        </div>
      </header>

      <section id="sobre" className="container mx-auto pt-16 px-4">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center items-start">
            <Badge text="Sobre nós" />
            <TitleTwo><span className="text-highlight">Somos a resposta</span> para desbloquear o potencial do seu negócio.</TitleTwo>
            <p className="text-white">Desde 2009 criamos sites otimizados para o Google, desenvolvemos aplicações personalizadas e prestamos consultoria para superar desafios empresariais. 🚀</p>
            <p className="text-highlight font-medium">Especialistas em tecnologia, administração, finanças e marketing, oferecemos soluções de alta qualidade com ética e transparência.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4">
            {featuresList
              .slice()
              .sort((a, b) => a.text.localeCompare(b.text))
              .map((feature, index) => (
                <FeatureCard
                  key={index}
                  image={feature.image}
                  text={feature.text}
                  alt={feature.text}
                  hover={feature.hover}
                />
              ))}
          </div>
        </div>
      </section>

      <DoubleColumnSection id="como-funciona">
        <div className="justify-self-center items-center">
          <img src="./img/como-funciona.webp" alt="Ilustração como funciona?" />
        </div>
        <div>
          <div className="flex flex-col items-start">
            <Badge text="Como funciona?" />
            <TitleTwo><span className="text-highlight">Ouvir, entender,</span> resolver.</TitleTwo>
            <p className="text-white">Iniciamos seu projeto em apenas três passos: atendimento, análise técnica e proposta comercial.</p>
          </div>
          <WorkflowProcess />
          <div>
          </div>
        </div>
      </DoubleColumnSection>

      <section className="container mx-auto px-4 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-8">
          <GlowingCard badge="Agile" title={<><span className="text-highlight">Eficiência</span> na gestão.</>} image="./img/no-prazo.webp" alt="Ilustração gestão de projetos">
            <p>Segundo a Harvard Business Review, 70% dos projetos de TI em todo o mundo ultrapassam prazos e comprometem orçamentos. Neste cenário, é vital escolher bem seus fornecedores de tecnologia.</p>
            <p className="text-highlight font-medium">O compromisso com prazos e os altos padrões de qualidade estão em nosso DNA. Assim protegemos os seus projetos e o seu bolso.</p>
            <Button icon="bi bi-window">Painel do Cliente</Button>
          </GlowingCard>
          <GlowingCard badge="Pontualidade" title={<><span className="text-highlight">No prazo</span>, sempre!</>} image="./img/agile.webp" alt="Ilustração métodos ágeis">
            <p>Utilizamos ferramentas, boas práticas e técnicas de métodos ágeis para garantir segurança ao seu projeto, através de uma gestão eficiente e com alto poder de entrega.</p>
            <p>Aqui, você acompanha cada etapa através do nosso sistema de gestão, de forma transparente, do orçamento à entrega.</p>
          </GlowingCard>
        </div>
      </section>

      <DoubleColumnSection>
        <div className="inline-flex flex-col items-start">
          <Badge text="Qualidade de ponta a ponta" />
          <TitleTwo>Atendimento <span className="text-highlight">qualificado</span></TitleTwo>
          <p>Todos os projetos são analisados a partir das visões da tecnologia, gestão e marketing. Este é um dos diferenciais que permeiam as nossas atividades e potencializa os resultados.</p>
          <p>Agende um horário para conversar com nossos especialistas sobre a solução que você procura para o seu negócio.</p>
          <Button icon="bi bi-calendar-day">Agendar Atendimento</Button>
        </div>
        <div className="flex-col my-auto">
          <YouTubeEmbed videoid="YMGeRvMKgu8" className="w-max" style="border-radius: 16px;" params="controls=0" />
        </div>
      </DoubleColumnSection>

      <SingleColumnSection id="portfolio" >
        <div className="flex flex-col justify-center items-start">
          <Badge text="Expertise comprovada" />
          <TitleTwo>Confira alguns <span className="text-highlight">projetos realizados</span>.</TitleTwo>
          <p className="text-white text-sm">Escolha um projeto e clique na miniatura para navegar.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-4 mt-4">
          {portfolio
            .slice()
            .sort((a, b) => a.label.localeCompare(b.label))
            .map((item, index) => (
              <PortfolioItem
                key={index}
                imgUrl={item.image}
                label={item.label}
                alt={item.label}
                link={item.link} />
            ))
          }
        </div>
      </SingleColumnSection>

      <GlowingSection id="depoimentos" className="container mt-16 px-4 mx-auto justify-center items-center">
        <Badge text="Feedback"></Badge>
        <TitleTwo>Opiniões de <span className="text-highlight">clientes reais</span>.</TitleTwo>
        <p className="mb-8">Usamos ferramentas, boas práticas e técnicas dos métodos ágeis para oferecer segurança ao seu projeto, através de uma gestão eficiente, com alto poder de entrega. <span className="text-highlight font-medium">Aqui, você acompanha cada etapa através do nosso sistema de gestão, de forma transparente, do orçamento à entrega.</span></p>
        <script src="https://static.elfsight.com/platform/platform.js" async></script>
        <div className="elfsight-app-17c826c4-eb69-403e-9b58-8111974fc9bf" data-elfsight-app-lazy></div>
      </GlowingSection>

      <GlowingSection id="agile" className="container mt-16 px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex items-center justify-center">
            <img className="max-w-full" src="./img/agile-squads.webp" alt="Ilustração squads ágeis" />
          </div>
          <div className="flex flex-col items-start">
            <Badge text="Agile friendly" />
            <TitleTwo>Squads <span className="text-highlight">Ágeis</span>.</TitleTwo>
            <p className="text-highlight font-medium">71% das empresas que precisam desenvolver soluções em tecnologia já planejavam usar squads ágeis dois anos atrás.</p>
            <p>Para aumentar a velocidade de reação do seu negócio aos movimentos de mercado e da concorrência, alocando profissionais para desenvolver os seus projetos, conte com a gente.</p>
            <Button icon="bi bi-calendar-day">Agendar Atendimento</Button>
          </div>
        </div>
      </GlowingSection>

      <DoubleColumnSection>
        <div className="flex flex-col items-start">
          <Badge text="Conteúdo exclusivo" />
          <TitleTwo>Confira o que está em alta no canal do <span className="text-highlight">YouTube.</span></TitleTwo>
          <p>Vídeos exclusivos sobre tecnologia, negócios e empreendedorismo.</p>
          <p className="text-highlight font-medium">Agende um horário para conversar com nossos especialistas sobre a solução que você procura para o seu negócio.</p>
        </div>
        <div className="flex-col my-auto">
          <YouTubeEmbed videoid="S3h8SXwcJJw" className="w-max" style="border-radius: 16px;" params="controls=0" />
        </div>
      </DoubleColumnSection>

      <GlowingSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          <div className="order-2 lg:order-1 flex flex-col items-start justify-center">
            <Badge text="CX Positiva" />
            <TitleTwo>A experiência do consumidor vale ouro.</TitleTwo>
            <p>Gestores e negócios têm propósitos e personalidades que os tornam únicos. Por isso, nos preocupamos em estabelecer uma relação com experiências personalizadas.</p>
            <p className="text-highlight font-medium">Se você quer um atendimento mais objetivo e já tem um briefing detalhado, clique no botão abaixo para enviar a sua demanda.</p>
            <Button icon="bi bi-window">Orçamento Online</Button>
          </div>
          <div className="flex flex-col order-1 lg:order-2 items-center justify-center">
            <img className="w-[450px] max-w-full" src="./img/customer-experience.webp" alt="Ilustração customer experience" />
          </div>
        </div>
      </GlowingSection>

      <SingleColumnSection>
        <div className="flex flex-col md:flex-row justify-center items-center gap-2">
          <div>&copy; AllRox 2024. Todos os direitos reservados. </div><div><a href="#topo" className="text-highlight font-bold"><i className="bi bi-arrow-up-short"></i>Ir para o topo.</a></div>
        </div>
      </SingleColumnSection>

    </main>
  );
}
