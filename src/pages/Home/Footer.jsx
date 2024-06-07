import React from "react";
import { Link } from "react-scroll"; 
import { Dumbbell, Facebook, Instagram, MailOpen, MapPin, Phone, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <>
      <div className="w-full h-auto flex items-center justify-center bg-black/30 flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
        <div className="w-full h-auto flex items-start lg:justify-between md:justify-between sm:justify-center justify-center gap-5 mb-10 flex-wrap">
          <div className="lg:w-[30%] md:w-[30%] sm:w-full w-full h-auto p-2 flex lg:items-start md:items-start sm:items-center items-center flex-col justify-center">
            <Link to="/" className="w-fit h-auto text-3xl text-indigo-600 font-semibold tracking-[0.1rem] flex items-end gap-x-1 relative mb-3">
              G<span className="text-xl font-bold text-gray-300">Y</span>M
              <Dumbbell className="w-5 h-4 text-indigo-600 -rotate-45 absolute top-0 left-[46%] translate-x-[-50%]" />
            </Link>
            <p className="text-base text-gray-500 font-normal mb-4 lg:text-start md:text-start sm:text-center text-center uppercase">
              Transformando vidas através do esporte
            </p>
            <div className="w-full h-auto space-y-2">
              <div className="w-full h-auto flex items-center lg:justify-start md:justify-start sm:justify-center justify-center gap-x-2 text-gray-400 hover:text-indigo-600 ease-out duration-300 cursor-pointer">
                <MapPin className="w-7 h-7" />
                <p className="text-base">
                  Rua da Saúde, 123 - Bairro Fitness, Cidade Ativa, Estado
                  Bem-Estar, CEP 12345-678
                </p>
              </div>
              <div className="w-full h-auto flex items-center lg:justify-start md:justify-start sm:justify-center justify-center gap-x-2 text-gray-400 hover:text-indigo-600 ease-out duration-300 cursor-pointer">
                <MailOpen className="w-5 h-5" />
                <p className="text-base">gym@gmail.com</p>
              </div>
              <div className="w-full h-auto flex items-center lg:justify-start md:justify-start sm:justify-center justify-center gap-x-2 text-gray-400 hover:text-indigo-600 ease-out duration-300 cursor-pointer">
                <Phone className="w-5 h-5" />
                <p className="text-base">(62) 3333-3333</p>
              </div>
            </div>
          </div>
          <div className="lg:w-[65%] md:w-[65%] sm:w-full w-full h-auto p-2 flex items-center lg:justify-end md:justify-end sm:justify-center justify-center flex-wrap gap-5">
            <div className="lg:w-[30%] md:w-[48%] sm:w-[48%] w-full h-auto flex items-center flex-col justify-center">
              <h2 className="text-lg text-gray-200 font-medium mb-4">
                Mais Procurados
              </h2>
              <div className="w-full h-auto">
                <ul className="w-full h-auto space-y-2">
                  <li className="w-full h-auto text-gray-400 hover:text-indigo-600 ease-out duration-300 cursor-pointer text-center">
                    <Link to="/strength-training">Treinamento de Força</Link>
                  </li>
                  <li className="w-full h-auto text-gray-400 hover:text-indigo-600 ease-out duration-300 cursor-pointer text-center">
                    <Link to="/boxing">Boxing</Link>
                  </li>
                  <li className="w-full h-auto text-gray-400 hover:text-indigo-600 ease-out duration-300 cursor-pointer text-center">
                    <Link to="/yoga-session">Sessão de Yoga</Link>
                  </li>
                  <li className="w-full h-auto text-gray-400 hover:text-indigo-600 ease-out duration-300 cursor-pointer text-center">
                    <Link to="/deadlift">Levantamento Terra</Link>
                  </li>
                  <li className="w-full h-auto text-gray-400 hover:text-indigo-600 ease-out duration-300 cursor-pointer text-center">
                    <Link to="/squat">Agachamento</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-[30%] md:w-[48%] sm:w-[48%] w-full h-auto flex items-center flex-col justify-center">
              <h2 className="text-lg text-gray-200 font-medium mb-4">
                Menu
              </h2>
              <div className="w-full h-auto">
                <ul className="w-full h-auto space-y-2">
                  <li className="w-full h-auto text-gray-400 hover:text-indigo-600 ease-out duration-300 cursor-pointer text-center">
                    <Link to="hero">Home</Link>
                  </li>
                  <li className="w-full h-auto text-gray-400 hover:text-indigo-600 ease-out duration-300 cursor-pointer text-center">
                    <Link to="about">Sobre</Link>
                  </li>
                  <li className="w-full h-auto text-gray-400 hover:text-indigo-600 ease-out duration-300 cursor-pointer text-center">
                    <Link to="plans">Planos</Link>
                  </li>
                  <li className="w-full h-auto text-gray-400 hover:text-indigo-600 ease-out duration-300 cursor-pointer text-center">
                    <Link to="contact">Contato</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[1.5px] flex items-center lg:bg-gray-900 mb:bg-gray-900 sm:bg-transparent bg-transparent relative">
            <div className="w-full h-auto flex items-center lg:justify-between md:justify-between sm:justify-center justify-center absolute -top-4 left-[50%[50%] translate-x- flex-wrap-reverse gap-4">
                <p className="text-sm text-gray-400 font-normal lg:bg-gray-900 md:bg-gray-900 sm:bg-transparent bg-transparent py-1 px-4 rounded-md">Copyright &copy; 2024
                </p>
                <div className="w-auto h-auto flex items-center justify-center">
                    <ul className="w-full h-auto flex justify-center gap-x-4">
                    <li className="w-8 h-8 cursor-pointer flex items-center justify-center bg-indigo-900 py-1 px-4 rounded-md text-white hover:text-black/70 ease-out duration-500">
                      <a href="/" target="_blank">
                        <Facebook className="w-5 h-5" />
                      </a>
                    </li>
                    <li className="w-8 h-8 cursor-pointer flex items-center justify-center bg-indigo-900 py-1 px-4 rounded-md text-white hover:text-black/70 ease-out duration-500">
                      <a href="/"  target="_blank">
                        <Instagram className="w-5 h-5" />
                      </a>
                    </li>
                    <li className="w-8 h-8 cursor-pointer flex items-center justify-center bg-indigo-900 py-1 px-4 rounded-md text-white hover:text-black/70 ease-out duration-500">
                      <a href="/"  target="_blank">
                        <Youtube className="w-5 h-5" />
                      </a>
                    </li>
                  </ul>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;