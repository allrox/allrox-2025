"use client"
import Navigation from './Components/Navigation';
import TitleLevel2 from "./Components/TitleLevel2";
import Badge from "./Components/Badge";
import Button from "./Components/Button";
import GlowingSection from "./Components/GlowingSection";
import FeatureCard from "./Components/FeatureCard";
import featuresList from "./Data/featuresList.json";
import PortfolioItem from "./Components/PortfolioItem";
import Workflow from "./Components/Workflow";
import Section2col from "./Components/Section2Col";
import Section1col from "./Components/Section1Col";

export default function Home() {

  return (
    <div id="main" className="main">
      <header className="min-w-full">
        <div className="flex flex-col min-h-screen bg-hero-background bg-cover bg-center">
          <Navigation />
          <div className="container mx-auto flex flex-col justify-center items-center grow pb-20">
            <div className="text-xs text-black px-4 py-2 mb-8 rounded-lg bg-highlight font-semibold uppercase">A transformação digital começa aqui</div>
            <h1 className="text-6xl md:text-9xl text-white font-black text-center leading-none tracking-tighter"><span className="text-highlight">Tecnologia</span> para Negócios</h1>
            <h2 className="text-white text-2xl mt-6 font-light text-center">Criação de sites, landing pages e soluções tecnológicas para acelerar o seu crescimento.</h2>
          </div>
        </div>
      </header>

      <section id="sobre" className="container mx-auto pt-16 px-4">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center items-start">
            <Badge text="Sobre nós" />
            <TitleLevel2><span className="text-highlight">Somos a resposta</span> para desbloquear o potencial do seu negócio.</TitleLevel2>
            <p className="text-white">Desde 2009 criamos sites otimizados para o Google, desenvolvemos aplicações personalizadas e prestamos consultoria para superar desafios empresariais. 🚀</p>
            <p className="text-highlight font-bold">Especialistas em tecnologia, administração, finanças e marketing, oferecemos soluções de alta qualidade com ética e transparência.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4">
            {featuresList.map((feature, index) => (
              <FeatureCard
                key={index}
                image={feature.image}
                text={feature.text}
                hover={feature.hover} />
            ))}
          </div>
        </div>
      </section>

      <Section2col id="como-funciona">
        <div className="justify-self-center items-center">
          <img src="./img/como-funciona.webp" />
        </div>
        <div>
          <div className="flex flex-col items-start">
            <Badge text="Como funciona?" />
            <TitleLevel2><span className="text-highlight">Ouvir, entender,</span> resolver.</TitleLevel2>
            <p className="text-white">Iniciamos seu projeto em três etapas: atendimento, análise técnica e aprovação da proposta.</p>
          </div>
          <Workflow />
          <div>
          </div>
        </div>
      </Section2col>

      <section className="container mx-auto px-4 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <GlowingSection badge="Pontualidade" title={<><span className="text-highlight">No prazo</span>, sempre!</>} image="./img/agile.webp">
            <p>Utilizamos ferramentas, boas práticas e técnicas de métodos ágeis para garantir segurança ao seu projeto, através de uma gestão eficiente e com alto poder de entrega.</p>
            <p>Aqui, você acompanha cada etapa através do nosso sistema de gestão, de forma transparente, do orçamento à entrega.</p>
          </GlowingSection>
          <GlowingSection badge="Agile" title={<><span className="text-highlight">Eficiência</span> na gestão.</>} image="./img/no-prazo.webp">
            <p>Segundo a Harvard Business Review, 70% dos projetos de TI em todo o mundo ultrapassam prazos e comprometem orçamentos. Neste cenário, é vital escolher bem seus fornecedores de tecnologia.</p>
            <p className="text-highlight font-bold">O compromisso com prazos e os altos padrões de qualidade estão em nosso DNA. Assim protegemos os seus projetos e o seu bolso.</p>
            <Button icon="bi bi-window">Painel do Cliente</Button>
          </GlowingSection>
        </div>
      </section>

      <Section2col id="qualidade">
        <div className="inline-flex flex-col items-start">
          <Badge text="Qualidade de ponta a ponta" />
          <TitleLevel2>Atendimento <span className="text-highlight">qualificado</span></TitleLevel2>
          <p>Todos os projetos são analisados a partir das visões da tecnologia, gestão e marketing. Este é um dos diferenciais que permeiam as nossas atividades e potencializa os resultados.</p>
          <p>Agende um horário para conversar com nossos especialistas sobre a solução que você procura para o seu negócio.</p>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center">
            <iframe className="w-full aspect-video rounded-xl aspect-auto" width="560" height="315" src="https://www.youtube.com/embed/YMGeRvMKgu8?si=4Y9LKOJfCSUDiOwJ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        </div>
      </Section2col>

      <section id="portfolio">
        <Section1col >
          <div className="flex flex-col justify-center items-start">
            <Badge text="Qualidade de ponta a ponta" />
            <TitleLevel2>Confira alguns <span className="text-highlight">projetos realizados</span>.</TitleLevel2>
            <p className="text-white">Escolha um projeto e clique na miniatura para navegar.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-4 mt-4">
            <PortfolioItem imgUrl="./img/portfolio/robson-georgny.webp" label="Robson Georgny" link="robsongeorgny.com.br" />
            <PortfolioItem imgUrl="./img/portfolio/audiblue.webp" label="Audiblue" link="https://audiblue.com" />
            <PortfolioItem imgUrl="./img/portfolio/begen.webp" label="Begen AI" link="https://begen.ai" />
            <PortfolioItem imgUrl="./img/portfolio/ufrla.webp" label="UFRLA" link="https://ufrla.com" />
            <PortfolioItem imgUrl="./img/portfolio/omntex.webp" label="OmnTex" link="https://omntex.com.br" />
            <PortfolioItem imgUrl="./img/portfolio/jaguar.webp" label="Jaguar Soluções Empresariais" link="https://jaguarsolucoes.com.br" />
            <PortfolioItem imgUrl="./img/portfolio/gutter-heroes.webp" label="Gutter Heroes" link="https://gutterheroesfl.com" />
            <PortfolioItem imgUrl="./img/portfolio/freelaemcasa.webp" label="FreelaEmCasa" link="https://freelaemcasa.com" />
          </div>
        </Section1col>

      </section>

      <section id="depoimentos" className="container mt-16 px-4 mx-auto">
        <GlowingSection className="justify-center items-center">
          <Badge text="Feedback"></Badge>
          <TitleLevel2>Opiniões de <span className="text-highlight">clientes reais</span>.</TitleLevel2>
          <p className="mb-8">Usamos ferramentas, boas práticas e técnicas dos métodos ágeis para oferecer segurança ao seu projeto, através de uma gestão eficiente, com alto poder de entrega. <span className="text-highlight font-bold">Aqui, você acompanha cada etapa através do nosso sistema de gestão, de forma transparente, do orçamento à entrega.</span></p>
          <script src="https://static.elfsight.com/platform/platform.js" async></script>
          <div className="elfsight-app-17c826c4-eb69-403e-9b58-8111974fc9bf" data-elfsight-app-lazy></div>
        </GlowingSection>
      </section>

      <section id="agile" className="container mt-16 px-4 mx-auto">
        <GlowingSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="flex items-center justify-center">
              <img className="max-w-full" src="./img/agile-squads.webp" />
            </div>
            <div className="flex flex-col items-start">
              <Badge text="Agile friendly" />
              <TitleLevel2>Squads <span className="text-highlight">Ágeis</span>.</TitleLevel2>
              <p className="text-highlight font-bold">71% das empresas que precisam desenvolver soluções em tecnologia já planejavam usar squads ágeis dois anos atrás.</p>
              <p>Para aumentar a velocidade de reação do seu negócio aos movimentos de mercado e da concorrência, alocando profissionais para desenvolver os seus projetos, conte com a gente.</p>
              <Button icon="bi bi-calendar-day">Agendar Atendimento</Button>
            </div>
          </div>
        </GlowingSection>
      </section>

      <Section2col id="conteudo grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        <div className="flex flex-col items-start">
          <Badge text="Qualidade de ponta a ponta" />
          <TitleLevel2>Confira o que está em alta no canal do <span className="text-highlight">YouTube.</span></TitleLevel2>
          <p>Vídeos exclusivos sobre tecnologia, negócios e empreendedorismo.</p>
          <p className="text-highlight font-bold">Agende um horário para conversar com nossos especialistas sobre a solução que você procura para o seu negócio.</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <iframe className="w-full aspect-video rounded-xl aspect-auto" width="560" height="315" src="https://www.youtube.com/embed/S3h8SXwcJJw?si=2Xke_coZ9cv5ioET" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </Section2col>

      <section className="container mt-16 px-4 mx-auto">
        <GlowingSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            <div className="order-2 lg:order-1 flex flex-col items-start justify-center">
              <Badge text="CX Positiva" />
              <TitleLevel2>A experiência do consumidor vale ouro.</TitleLevel2>
              <p>Gestores e negócios têm propósitos e personalidades que os tornam únicos. Por isso, nos preocupamos em estabelecer uma relação com experiências personalizadas.</p>
              <p className="text-highlight font-bold">Se você quer um atendimento mais objetivo e já tem um briefing detalhado, clique no botão abaixo para enviar a sua demanda.</p>
              <Button icon="bi bi-window">Orçamento Online</Button>
            </div>
            <div className="order-1 lg:order-2">
              <img className="w-[450px] max-w-full justify-self-center" src="./img/customer-experience.webp" />
            </div>

          </div>
        </GlowingSection>
      </section>

      <Section1col>
        <div className="flex flex-col md:flex-row justify-center items-center text-center">&copy; AllRox 2024. Todos os direitos reservados. <a href="#main" className="text-highlight font-bold"><i class="bi bi-arrow-up-short"></i>Ir para o topo.</a></div>
      </Section1col>

    </div>
  );
}
