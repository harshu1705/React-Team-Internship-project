import React from "react";

import Navbar from "../Components/HomePage/Navbar";
import Footer from "../Components/HomePage/Footer";
import Fro_Project from "../Components/HomePage/Fro_Project.png";
function Project() {
  return (
    <div className="flex flex-col gap-3 ">
      <div>
        <Navbar />
      </div>
      <p className=" flex justify-center text-[30px] font-bold text-dark-blue border-b-2">PROJECTS</p>
      <div className="grid grid-cols-3 py-4 shadow  items-center justify-evenly">
        <div className="flex gap-16 justify-center items-center">
        <div className=" flex bg-dark-blue rounded-full p-5 leading-[1]">
          <p className="flex text-[25px] text-white justify-center items-center">
            01
          </p>
        </div>
        <div className="flex ">
          <p className="text-[20px] font-bold text-dark-blue ">Frontend Development</p>
        </div>
        </div>
        <div className="flex justify-center ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            eveniet autem laudantium placeat itaque cum exercitationem, dolorem
            deserunt? Tenetur vel placeat eos explicabo soluta magnam!
          </p>
        </div>
        <div className="flex justify-center">
          <img src={Fro_Project} className="w-[50%] h-auto" />
        </div>
      </div>
      <div className="grid grid-cols-3 py-4 shadow  items-center justify-evenly py-3py-3 ">
        <div className="flex gap-16 justify-center items-center order-last">
        <div className=" flex bg-dark-blue rounded-full p-5 leading-[1] order-last">
          <p className="flex text-[25px] text-white justify-center items-center">
            02
          </p>
        </div>
        <div className="flex">
          <p className="text-[20px] font-bold text-dark-blue">Frontend Development</p>
        </div>
        </div>
        <div className="flex justify-center order-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            eveniet autem laudantium placeat itaque cum exercitationem, dolorem
            deserunt? Tenetur vel placeat eos explicabo soluta magnam!
          </p>
        </div>
        <div className="flex justify-center order-1">
          <img src={Fro_Project} className="w-[50%] h-auto" />
        </div>
      </div>
      <div className="grid grid-cols-3 py-4 shadow  items-center justify-evenly py-3py-3">
        <div className="flex gap-16 justify-center items-center">
        <div className=" flex bg-dark-blue rounded-full p-5 leading-[1]">
          <p className="flex text-[25px] text-white justify-center items-center">
            03
          </p>
        </div>
        <div className="flex ">
          <p className="text-[20px] font-bold text-dark-blue">Frontend Development</p>
        </div>
        </div>
        <div className="flex justify-center ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            eveniet autem laudantium placeat itaque cum exercitationem, dolorem
            deserunt? Tenetur vel placeat eos explicabo soluta magnam!
          </p>
        </div>
        <div className="flex justify-center">
          <img src={Fro_Project} className="w-[50%] h-auto" />
        </div>
      </div>
      <div className="grid grid-cols-3 py-4 shadow  items-center justify-evenly py-3py-3">
        <div className="flex gap-16 justify-center items-center order-last">
        <div className=" flex bg-dark-blue rounded-full p-5 leading-[1] order-last ">
          <p className="flex text-[25px] text-white justify-center items-center">
            04
          </p>
        </div>
        <div className="flex ">
          <p className="text-[20px] font-bold text-dark-blue">Frontend Development</p>
        </div>
        </div>
        <div className="flex justify-center order-4 ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            eveniet autem laudantium placeat itaque cum exercitationem, dolorem
            deserunt? Tenetur vel placeat eos explicabo soluta magnam!
          </p>
        </div>
        <div className="flex justify-center order-1">
          <img src={Fro_Project} className="w-[50%] h-auto" />
        </div>
      </div>
      <div className="grid grid-cols-3 py-4 shadow  items-center justify-evenly py-3py-3">
        <div className="flex gap-16 justify-center items-center">
        <div className=" flex bg-dark-blue rounded-full p-5 leading-[1]">
          <p className="flex text-[25px] text-white justify-center items-center">
            05
          </p>
        </div>
        <div className="flex ">
          <p className="text-[20px] font-bold text-dark-blue">Frontend Development</p>
        </div>
        </div>
        <div className="flex justify-center ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            eveniet autem laudantium placeat itaque cum exercitationem, dolorem
            deserunt? Tenetur vel placeat eos explicabo soluta magnam!
          </p>
        </div>
        <div className="flex justify-center">
          <img src={Fro_Project} className="w-[50%] h-auto" />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Project;
