"use client"
import FeatureCard from "./Components/FeatureCard";
import Badge from "./Components/Badge";
import featuresList from "./Data/featuresList.json";
import H2Title from "./Components/H2Title";

export default function Home() {

  return (
    <div className="main">
      <header className="min-w-full">
        <div className="flex flex-col min-h-screen bg-hero-background bg-cover bg-center">

          <div className="flex flex-col justify-center items-center pt-10">
            <img src="./img/allrox-logo.webp" />
          </div>

          <div className="flex flex-col justify-center items-center grow pb-8">
            <div className="text-xs px-2 py-1 rounded-lg bg-highlight font-semibold uppercase">
              <p>A transformação digital começa aqui</p>
            </div>
            <h1 className="text-6xl md:text-9xl text-white font-black text-center leading-none"><span className="text-highlight">Tecnologia</span> para Negócios</h1>
            <h2 className="text-white text-2xl mt-6 font-light text-center">Criação de sites, landing pages e soluções tecnológicas para acelerar o seu crescimento.</h2>
          </div>

        </div>
      </header>

      <section className="container mx-auto my-16 px-4">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center items-start">
            <Badge text="Sobre nós"/>
            <H2Title><span className="text-highlight">Somos a resposta</span> para desbloquear o potencial do seu negócio.</H2Title>
            <p className="text-white text-lg">Desde 2009 criamos sites otimizados para o Google, desenvolvemos aplicações personalizadas e prestamos consultoria para superar desafios empresariais. 🚀</p>
            <p className="text-highlight text-lg font-bold">Especialistas em tecnologia, administração, finanças e marketing, oferecemos soluções de alta qualidade com ética e transparência.</p>
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

    </div>

  );
}
