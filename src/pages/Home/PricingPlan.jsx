import React from "react";
import { CheckSquare, Dumbbell } from "lucide-react";
import PrimaryBtn from "../../components/Button/PrimaryBtn";

const PricingPlan = () => {
  return (
    <>
      <div className="w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
        <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
          <Dumbbell className="w-4 h-4 -rotate-45 text-indigo-600" />
          Planos
        </h6>
        <p className="lg:text-base md:text-base sm:text-md text-gray-500 uppercase font-medium mb-8">
        Confira nossos planos de mensalidade e encontre a opção ideal para alcançar seus objetivos fitness!
        </p>
        <div className="w-full h-auto flex justify-center gap-x-5 gap-y-8 flex-wrap">
          <div className="lg:w-[28%] md:w-full sm:w-full w-full h-auto px-10 lg:py-12 md:py-12 sm:py-10 py-10 bg-black/10 rounded-lg border-[6px] border-gray-600 hover:border-indigo-600/40 hover:bg-gray-600/10 ease-out duration-700 cursor-pointer flex flex-col justify-between">
            <div>
              <h2 className="text-4xl text-white font-semibold mb-5">
                Plano Básico
              </h2>
              <h1 className="lg:text-5xl md:text-3xl sm:text-2xl text-indigo-600 font-bold mb-3 tracking-wide">
                R$ 110.00{" "}
                <span className="lg:text-xl md:text-xl sm:text-lg text-base text-gray-300 font-medium tracking-normal">
                  mês
                </span>
              </h1>
              <hr className="border-gray-600/40 my-7" />
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-indigo-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  Acesso a todas as aulas da academia
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-indigo-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  Aulas de Yoga ilimitadas
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-indigo-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  Armários com chave
                </p>
              </div>
            </div>
            <PrimaryBtn className="w-full h-11 text-lg justify-center font-semibold tracking-wider mb-3 uppercase">
              Selecionar Plano
            </PrimaryBtn>
          </div>

          <div className="lg:w-[32%] md:w-full sm:w-full w-full h-auto px-10 lg:py-12 md:py-12 sm:py-10 py-10 bg-indigo-600/ rounded-lg border-[6px] border-indigo-600 ease-out duration-700 cursor-pointer relative flex flex-col justify-between">
            <div className="absolute -top-6 left-[50%] translate-x-[-50%] bg-indigo-600 py-2 px-5 rounded-full text-base font-medium text-white">
              Recomendado
            </div>
            <div>
              <h2 className="text-4xl text-white font-semibold mb-5">
                Plano Premium
              </h2>
              <h1 className="lg:text-5xl md:text-3xl sm:text-2xl text-indigo-600 font-bold mb-3 tracking-wide">
                R$ 190.00{" "}
                <span className="lg:text-xl md:text-xl sm:text-lg text-base text-gray-300 font-medium tracking-normal">
                  mês
                </span>
              </h1>
              <hr className="border-gray-600/40 my-7" />
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-indigo-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  Acesso a todas as aulas da academia
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-indigo-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  Aulas de Yoga ilimitadas
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-indigo-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  Armários com chave
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-indigo-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  Acesso à piscina
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-indigo-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  Camiseta de academia grátis
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-indigo-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  20% de desconto em todos os produtos de academia
                </p>
              </div>
            </div>
            <PrimaryBtn className="w-full h-11 text-lg justify-center font-semibold tracking-wider mb-3 uppercase">
              Selecionar Plano
            </PrimaryBtn>
          </div>

          <div className="lg:w-[28%] md:w-full sm:w-full w-full h-auto px-10 lg:py-12 md:py-12 sm:py-10 py-10 bg-black/10 rounded-lg border-[6px] border-gray-600 hover:border-indigo-600/40 hover:bg-gray-600/10 ease-out duration-700 cursor-pointer flex flex-col justify-between">
            <div>
              <h2 className="text-4xl text-white font-semibold mb-5">
                Plano Vip
              </h2>
              <h1 className="lg:text-5xl md:text-3xl sm:text-2xl text-indigo-600 font-bold mb-3 tracking-wide">
                R$ 290.00{" "}
                <span className="lg:text-xl md:text-xl sm:text-lg text-base text-gray-300 font-medium tracking-normal">
                  mês
                </span>
              </h1>
              <hr className="border-gray-600/40 my-7" />
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-indigo-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  Acesso a todas as aulas da academia
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-indigo-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  Aulas de Yoga ilimitadas
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-indigo-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  Armários com chave
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-indigo-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  Acesso à piscina
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-indigo-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  Camiseta de academia grátis
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-indigo-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  30% de desconto em todos os produtos de academia
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-indigo-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  Personal trainer 3 vezes na semana
                </p>
              </div>
            </div>
            <PrimaryBtn className="w-full h-11 text-lg justify-center font-semibold tracking-wider mb-3 uppercase">
              Selecionar Plano
            </PrimaryBtn>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPlan;
