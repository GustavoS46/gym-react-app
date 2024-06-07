import { Dumbbell } from "lucide-react";
import React from "react";
import Logo from "../../assets/Logo.png";
import SecondaryBtn from "../../components/Button/SecondaryBtn";

const About = () => {
  return (
    <>
      <div id="about" className="w-full h-auto flex items-center justify-between gap-7 lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 flex-wrap-reverse">
        <div className="lg:w-[38%] md:w-full sm:w-full w-full h-auto relative overflow-hidden rounded-lg">
          <img
            src="https://source.unsplash.com/random/?gym"
            alt="Sobre a imagem"
            className="w-full lg:h-[70vh] md:h-[68vh] sm:h-[60vh] h-[55vh] object-cover"
          />
        </div>
        <div className="lg:w-[50%] md:w-full sm:w-full w-full h-auto lg:text-start md:text-start sm:text-start text-center">
          <h6 className="text-lg font-medium text-gray-200 flex items-center lg:justify-start md:justify-start sm:justify-center justify-center gap-x-2 mb-3">
            <Dumbbell className="w-5 h-5 -rotate-45 text-indigo-600" />
            Sobre Nós
          </h6>

          <h1 className="lg:text-3xl md:text-3xl sm:text-2xl text-xl font-semibold text-gray-200 mb-4 leading-normal lg:pe-5 md:pe-4 sm:pe-1 pe-0">
            Transformação Através do Movimento e Comunidade
          </h1>
          <p className="lg:text-base md:text-base sm:text-md text-gray-500 font-medium mb-4">
            Bem-vindo à{" "}
            <img
              src={Logo}
              alt="Logo"
              className="inline lg:w-[4%] md:w-[8%] sm:w-[4%] py-0 cursor-text"
            />
            , onde acreditamos na transformação através do movimento. Desde
            2009, temos sido dedicados a fornecer um ambiente acolhedor e
            motivador para pessoas de todas as idades e níveis de aptidão. Nosso
            objetivo é capacitar você a alcançar seus objetivos de saúde e
            fitness de uma maneira que seja eficaz, segura e divertida. Na{" "}
            <img
              src={Logo}
              alt="Logo"
              className="inline lg:w-[4%] md:w-[8%] sm:w-[4%] py-0 cursor-text"
            />
            , valorizamos a comunidade e o apoio mútuo. Nossos instrutores
            altamente qualificados estão aqui para orientá-lo em sua jornada de
            fitness, oferecendo uma variedade de aulas desafiadoras e programas
            personalizados para atender às suas necessidades específicas. Além
            disso, oferecemos uma ampla gama de equipamentos de última geração e
            instalações modernas para garantir que você tenha tudo o que precisa
            para ter sucesso. Quer você esteja buscando perder peso, ganhar
            músculos ou simplesmente melhorar sua saúde geral, estamos aqui para
            ajudá-lo a alcançar seus objetivos. Junte-se a nós na{" "}
            <img
              src={Logo}
              alt="Logo"
              className="inline lg:w-[4%] md:w-[8%] sm:w-[4%] py-0 cursor-text"
            />{" "}
            e descubra como podemos ajudá-lo a se tornar a melhor versão de si
            mesmo. Estamos ansiosos para fazer parte da sua jornada de fitness e
            ajudá-lo a alcançar resultados duradouros.
          </p>
          <SecondaryBtn className="lg:w-auto md:w-auto sm:w-full w-full px-7py-2 text-base font-medium uppercase justify-center">Torne-se Membro</SecondaryBtn>
        </div>
      </div>
    </>
  );
};

export default About;
