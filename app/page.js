"use client"
import FeatureCard from "./Components/FeatureCard";
import Badge from "./Components/Badge";
import H2Title from "./Components/H2Title";
import VerticalGlowingCard from "./Components/VerticalGlowingCard";
import DefaultNavbar from './Components/DefaultNavbar';
import featuresList from "./Data/featuresList.json";
import Workflow from "./Components/Workflow";

export default function Home() {

  return (
    <div className="main">
      <header className="min-w-full">
        <div className="flex flex-col min-h-screen bg-hero-background bg-cover bg-center">

          <DefaultNavbar />

          <div className="flex flex-col justify-center items-center grow pb-20">
            <div className="text-xs text-black px-4 py-2 rounded-lg bg-highlight font-semibold uppercase">A transformação digital começa aqui</div>
            <h1 className="text-6xl md:text-9xl text-white font-black text-center leading-none"><span className="text-highlight">Tecnologia</span> para Negócios</h1>
            <h2 className="text-white text-2xl mt-6 font-light text-center">Criação de sites, landing pages e soluções tecnológicas para acelerar o seu crescimento.</h2>
          </div>

        </div>
      </header>

      <section id="sobre" className="container mx-auto pt-16 px-4">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center items-start">
            <Badge text="Sobre nós" />
            <H2Title><span className="text-highlight">Somos a resposta</span> para desbloquear o potencial do seu negócio.</H2Title>
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

      <section id="como-funciona" className="pt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 p-8 md:p-12 gap-16 border-solid border-2 border-white/[.05] rounded-xl">
            <div className="justify-self-center items-center">
              <img src="./img/como-funciona.webp" />
            </div>
            <div>
              <div className="flex flex-col items-start">
                <Badge text="Como funciona?" />
                <H2Title><span className="text-highlight">Ouvir, entender,</span> resolver.</H2Title>
                <p className="text-white">Iniciamos seu projeto em três etapas: atendimento, análise técnica e aprovação da proposta.</p>
              </div>
              <Workflow />
              <div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 my-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <VerticalGlowingCard badge="Pontualidade" title={<><span className="text-highlight">No prazo</span>, sempre!</>} image="./img/agile.webp">
            <p>Utilizamos ferramentas, boas práticas e técnicas de métodos ágeis para garantir segurança ao seu projeto, através de uma gestão eficiente e com alto poder de entrega.</p>
            <p>Aqui, você acompanha cada etapa através do nosso sistema de gestão, de forma transparente, do orçamento à entrega.</p>
          </VerticalGlowingCard>

          <VerticalGlowingCard badge="Agile" title={<><span className="text-highlight">Eficiência</span> na gestão.</>} image="./img/no-prazo.webp">
            <p>Segundo a Harvard Business Review, 70% dos projetos de TI em todo o mundo ultrapassam prazos e comprometem orçamentos. Neste cenário, é vital escolher bem seus fornecedores de tecnologia.</p>
            <p className="text-highlight font-bold">O compromisso com prazos e os altos padrões de qualidade estão em nosso DNA. Assim protegemos os seus projetos e o seu bolso.</p>
          </VerticalGlowingCard>

        </div>
      </section>

    </div>

  );
}
