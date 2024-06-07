import { Dumbbell } from "lucide-react";
import React from "react";
import SecondaryLink from "../../components/LinkBtn/SecondaryLink";

const Trainers = () => {
  const trainerData = [
    {
      id: 1,
      trainerImg: "https://source.unsplash.com/random/?bodybuilder",
      name: "Dr. João Silva",
      role: "Treinador de Musculação",
    },
    {
      id: 2,
      trainerImg: "https://source.unsplash.com/random/?gym,trainer",
      name: "Dr. Carlos Souza",
      role: "Instrutor de Academia",
    },
    {
      id: 3,
      trainerImg: "https://source.unsplash.com/random/?fitness",
      name: "Sra. Ana Pereira",
      role: "Professora de Fitness",
    },
    {
      id: 4,
      trainerImg: "https://source.unsplash.com/random/?wrestler",
      name: "Ricardo Santos",
      role: "Professor de Luta",
    },
  ];

  return (
    <>
      <div className="w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
        <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
          <Dumbbell className="w-4 h-4 -rotate-45 text-indigo-600" />
          Treinadores
        </h6>
        <div className="w-full h-auto flex items-center justify-center lg:gap-x-8 md:gap-x-6 sm:gap-x-4 gap-x-3 lg:gap-y-8 md:gap-y-6 sm:gap-y-4 gap-y-3 flex-wrap mb-10">
          {trainerData.map((data) => (
            <div
              key={data.id}
              className="lg:w-[23%] md:w-[48%] sm:w-[48%] w-full lg:h-[50vh] md:h-[53vh] sm:h-[58vh] h-[60vh] rounded-xl overflow-hidden relative"
            >
              <img
                src={data.trainerImg}
                alt="trainer image"
                className="w-full h-full object-cover"
              />
              <div className="w-full h-auto bg-gray-900/70 absolute bottom-0 py-4 px-2 flex items-center justify-center flex-col">
                <h1 className="text-xl text-white font-semibold">
                  {data.name}
                </h1>
                <p className="text-sm text-gray-300">{data.role}</p>
              </div>
            </div>
          ))}
        </div>
        <SecondaryLink
          link="/trainers"
          className="lg:w-[15%] md:w-[50%] sm:w-[75%] w-[85%] justify-center"
        >
          Veja todos Treinadores
        </SecondaryLink>
      </div>
    </>
  );
};

export default Trainers;
