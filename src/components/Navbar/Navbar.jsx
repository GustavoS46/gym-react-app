import React, { useState } from "react";
import { Dumbbell, Menu, X } from "lucide-react";
import { Link } from "react-scroll"; // Importando Link do react-scroll
import PrimaryBtn from "../Button/PrimaryBtn";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const navItems = [
    {
      name: "Início",
      link: "home", // Defina os IDs correspondentes a cada seção aqui
    },
    {
      name: "Sobre",
      link: "about",
    },
    {
      name: "Serviços",
      link: "services",
    },
    {
      name: "Planos",
      link: "plans",
    },
    {
      name: "Contato",
      link: "contact",
    },
  ];
  return (
    <>
      <nav className="w-full h-auto bg-[#1d1d1d] shadow-none lg:px-24 md:px-16 sm:px-6 px-4 py-3">
        <div className="justify-between mx-auto lg:w-full md:items-center md:flex">
          {/* Navbar logo & toggle button section */}
          <div>
            <div className="flex items-center justify-between py-1 md:py-1 md:block">
              {/* Logo section */}
              <Link
                to="home" // Defina o ID correspondente à seção inicial (se houver) aqui
                className="text-3xl text-indigo-600 font-semibold tracking-[0.1rem] flex items-end gap-x-1 relative"
              >
                G<span className="text-xl font-bold text-gray-300">Y</span>M
                <Dumbbell className="w-5 h-4 text-indigo-600 -rotate-45 absolute top-0 left-[46%] translate-x-[-50%]" />
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none border border-transparent focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <X className="text-gray-400 cursor-pointer" size={24} />
                  ) : (
                    <Menu className="text-gray-400 cursor-pointer" size={24} />
                  )}
                </button>
              </div>
            </div>
          </div>
          {/* Navbar menu items section */}
          <div
            className={`flex justify-between items-center md:block ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="list-none lg:flex md:flex sm:block block items-center gap-x-5 gap-y-16">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-500 text-lg font-medium hover:text-indigo-600 ease-out duration-700"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <PrimaryBtn>Torne-se Membro</PrimaryBtn>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
