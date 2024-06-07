import React from "react";
import PrimaryBtn from "../../components/Button/PrimaryBtn";

const Banner = () => {
  return (
    <>
      <div
        className="w-full h-[55vh] flex items-center justify-center flex-col relative z-10 lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4"
        style={{
          backgroundImage: "url(https://source.unsplash.com/random/?fitness)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full h-full bg-black/70 absolute top-0 left-0 -z-10"></div>
        <div className="relative z-20 text-center">
          <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-4xl font-bold text-gray-200 uppercase mb-4">
            Sem <span className="text-indigo-600">dor</span>, Sem{" "}
            <span className="text-indigo-600">ganho</span>
          </h1>
          <p className="text-lg text-gray-300 font-medium mb-8">
            Mas com esforço e determinação, a vitória é certa.
          </p>
          <PrimaryBtn className="px-10 py-3 uppercase rounded-full">
            Torne-se Membro
          </PrimaryBtn>
        </div>
      </div>
    </>
  );
};

export default Banner;
