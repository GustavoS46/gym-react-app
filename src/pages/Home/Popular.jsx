import React from "react";
import { Dumbbell } from "lucide-react";
import SecondaryBtn from "../../components/Button/SecondaryBtn";

const Popular = () => {
  const exerciseData = [
    {
      id: 1,
      exerciseImg: "https://source.unsplash.com/random/?warmup",
      name: "Aquecimento",
      duration: 15,
      sets: 3,
      calories: 100,
    },
    {
      id: 2,
      exerciseImg: "https://source.unsplash.com/random/?deadlift",
      name: "Treino de Ombro",
      duration: 20,
      sets: 4,
      calories: 150,
    },
    {
      id: 3,
      exerciseImg: "https://source.unsplash.com/random/?yoga",
      name: "Sessão de Yoga",
      duration: 55,
      sets: 5,
      calories: 250,
    },
    {
      id: 4,
      exerciseImg: "https://source.unsplash.com/random/?squat",
      name: "Treino de Pernas",
      duration: 18,
      sets: 4,
      calories: 120,
    },
  ];
  return (
    <>
      <div className="w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
        <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
          <Dumbbell className="w-4 h-4 -rotate-45 text-indigo-600" />
          Esportes mais Populares
        </h6>
        <div className="w-full h-auto flex items-center gap-x-5 gap-y-6 lg:flex-nowrap md:flex-wrap sm:flex-wrap flex-wrap">
          {exerciseData.map((data) => (
            <div
              key={data.id}
              className="lg:w-[24%] md:w-[48%] sm:w-[48%] w-full h-auto rounded-lg overflow-hidden hover:shadow hover:shadow-indigo-900/40 ease-out duration 700 cursor-pointer"
            >
              <img
                src={data.exerciseImg}
                alt="imagem do exercício"
                className="w-full lg:h-[30vh] md:h-[33vh] sm:h-[40vh] h-[40vh] object-cover rounded-lg"
              />
              <div className="w-full h-auto py-4 px-3">
                <h1 className="text-lg text-white font-semibold mb-1">
                  {data.name}
                </h1>
                <div className="w-full h-auto flex items-center gap-x-2">
                  <p className="text-sm text-gray-300">{data.duration} min</p>
                  <span className="w-1 h-1 rounded-full bg-gray-600" />
                  <p className="text-sm text-gray-300">{data.sets} sets</p>
                  <span className="w-1 h-1 rounded-full bg-gray-600" />
                  <p className="text-sm text-gray-300">{data.calories} calorias</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <SecondaryBtn
          link="/trainers"
          className="lg:w-[15%] md:w-[50%] sm:-[75%] w-[85%] justify-center"
        >
          Todos os Treinadores
        </SecondaryBtn>
      </div>
    </>
  );
};

export default Popular;
