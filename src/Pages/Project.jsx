import React, { useState,useEffect } from "react";
import Navbar from "../Components/HomePage/Navbar";
import Footer from "../Components/HomePage/Footer";
import Fro_Project from "../Components/HomePage/Fro_Project.png";
import AOS from "aos";
import "aos/dist/aos.css";


function Project() {
  const [visibleTexts, setVisibleTexts] = useState([false, false, false, false, false]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  const toggleText = (index) => {
    setVisibleTexts((prev) => {
      const newVisibleTexts = [...prev];
      newVisibleTexts[index] = !newVisibleTexts[index];
      return newVisibleTexts;
    });
  };
  

  return (
    <div className="flex flex-col gap-3">
      <div>
        <Navbar />
      </div>
      <p className="flex justify-center text-[30px] font-bold text-dark-blue">PROJECTS</p>
      <div className="flex border-b-2 mx-12">
        <img src={Fro_Project} className="w-full h-[500px]" alt="Project" data-aos="fade-up" />
      </div>

      <div className="grid grid-cols-3 py-4 shadow items-center justify-evenly mx-10" data-aos="fade-up">
        <div className="flex gap-16 justify-center items-center " >
          <div className="flex bg-dark-blue rounded-full p-5 leading-[1]">
            <p className="flex text-[25px] text-white justify-center items-center">01</p>
          </div>
          <div className="flex">
            <p className="text-[20px] font-bold text-dark-blue">Frontend Development</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              eveniet autem laudantium placeat itaque cum exercitationem, dolorem
              deserunt? Tenetur vel placeat eos explicabo soluta magnam!
              <span className="font-bold text-dark-blue cursor-pointer" onClick={() => toggleText(0)}>
                {visibleTexts[0] ? '' : ' show more'}
              </span>
              {visibleTexts[0] && (
                <>
                  <span>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facere, voluptatibus adipisci dolorum eum ratione deserunt
                    aliquam accusantium officiis recusandae, similique, aliquid
                    consequuntur aspernatur id eligendi?
                  </span>
                  <span className="font-bold text-dark-blue cursor-pointer" onClick={() => toggleText(0)}>
                    {' show less'}
                  </span>
                </>
              )}
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={Fro_Project} className="w-[50%] h-auto" alt="Project" />
        </div>
      </div>

      <div className="grid grid-cols-3 py-4 shadow items-center justify-evenly mx-10 py-3py-3" data-aos="fade-up">
        <div className="flex gap-16 justify-center items-center order-last">
          <div className="flex bg-dark-blue rounded-full p-5 leading-[1] order-last">
            <p className="flex text-[25px] text-white justify-center items-center">02</p>
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
            <span className="font-bold text-dark-blue cursor-pointer" onClick={() => toggleText(1)}>
              {visibleTexts[1] ? '' : ' show more'}
            </span>
            {visibleTexts[1] && (
              <>
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Facere, voluptatibus adipisci dolorum eum ratione deserunt
                  aliquam accusantium officiis recusandae, similique, aliquid
                  consequuntur aspernatur id eligendi?
                </span>
                <span className="font-bold text-dark-blue cursor-pointer" onClick={() => toggleText(1)}>
                  {' show less'}
                </span>
              </>
            )}
          </p>
        </div>
        <div className="flex justify-center order-1">
          <img src={Fro_Project} className="w-[50%] h-auto" alt="Project" />
        </div>
      </div>

      <div className="grid grid-cols-3 py-4 shadow items-center justify-evenly mx-10 py-3py-3" data-aos="fade-up">
        <div className="flex gap-16 justify-center items-center">
          <div className="flex bg-dark-blue rounded-full p-5 leading-[1]">
            <p className="flex text-[25px] text-white justify-center items-center">03</p>
          </div>
          <div className="flex">
            <p className="text-[20px] font-bold text-dark-blue">Frontend Development</p>
          </div>
        </div>
        <div className="flex justify-center">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            eveniet autem laudantium placeat itaque cum exercitationem, dolorem
            deserunt? Tenetur vel placeat eos explicabo soluta magnam!
            <span className="font-bold text-dark-blue cursor-pointer" onClick={() => toggleText(2)}>
              {visibleTexts[2] ? '' : ' show more'}
            </span>
            {visibleTexts[2] && (
              <>
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Facere, voluptatibus adipisci dolorum eum ratione deserunt
                  aliquam accusantium officiis recusandae, similique, aliquid
                  consequuntur aspernatur id eligendi?
                </span>
                <span className="font-bold text-dark-blue cursor-pointer" onClick={() => toggleText(2)}>
                  {' show less'}
                </span>
              </>
            )}
          </p>
        </div>
        <div className="flex justify-center">
          <img src={Fro_Project} className="w-[50%] h-auto" alt="Project" />
        </div>
      </div>

      <div className="grid grid-cols-3 py-4 shadow items-center justify-evenly mx-10 py-3py-3" data-aos="fade-up">
        <div className="flex gap-16 justify-center items-center order-last">
          <div className="flex bg-dark-blue rounded-full p-5 leading-[1] order-last">
            <p className="flex text-[25px] text-white justify-center items-center">04</p>
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
            <span className="font-bold text-dark-blue cursor-pointer" onClick={() => toggleText(3)}>
              {visibleTexts[3] ? '' : ' show more'}
            </span>
            {visibleTexts[3] && (
              <>
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Facere, voluptatibus adipisci dolorum eum ratione deserunt
                  aliquam accusantium officiis recusandae, similique, aliquid
                  consequuntur aspernatur id eligendi?
                </span>
                <span className="font-bold text-dark-blue cursor-pointer" onClick={() => toggleText(3)}>
                  {' show less'}
                </span>
              </>
            )}
          </p>
        </div>
        <div className="flex justify-center order-1">
          <img src={Fro_Project} className="w-[50%] h-auto" alt="Project" />
        </div>
      </div>

      <div className="grid grid-cols-3 py-4 shadow items-center justify-evenly mx-10 py-3py-3" data-aos="fade-up">
        <div className="flex gap-16 justify-center items-center">
          <div className="flex bg-dark-blue rounded-full p-5 leading-[1]">
            <p className="flex text-[25px] text-white justify-center items-center">05</p>
          </div>
          <div className="flex">
            <p className="text-[20px] font-bold text-dark-blue">Frontend Development</p>
          </div>
        </div>
        <div className="flex justify-center">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            eveniet autem laudantium placeat itaque cum exercitationem, dolorem
            deserunt? Tenetur vel placeat eos explicabo soluta magnam!
            <span className="font-bold text-dark-blue cursor-pointer" onClick={() => toggleText(4)}>
              {visibleTexts[4] ? '' : ' show more'}
            </span>
            {visibleTexts[4] && (
              <>
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Facere, voluptatibus adipisci dolorum eum ratione deserunt
                  aliquam accusantium officiis recusandae, similique, aliquid
                  consequuntur aspernatur id eligendi?
                </span>
                <span className="font-bold text-dark-blue cursor-pointer" onClick={() => toggleText(4)}>
                  {' show less'}
                </span>
              </>
            )}
          </p>
        </div>
        <div className="flex justify-center">
          <img src={Fro_Project} className="w-[50%] h-auto" alt="Project" />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Project;
