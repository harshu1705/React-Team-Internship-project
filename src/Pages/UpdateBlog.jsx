import React, { useState } from "react";
import Navbar from "../Components/HomePage/Navbar";
import Footer from "../Components/HomePage/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UpdateBlog() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/users/blog",
        formData
      );
      console.log("Blog info:", response.data);
      alert("Blog details added");
      navigate("/Blog");
    } catch (error) {
      console.error("Error logging user:", error);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <Navbar />
      <div className="flex justify-evenly w-full gap-10">
        <div className="flex p-5 w-full rounded-lg shadow-lg shadow-black border-dark-blue border-[5px] m-5 bg-slate-100">
          <div className="flex flex-col gap-4 w-full">
            <input
              placeholder="Task title...."
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border-none border-collapse border-white focus:outline-none text-[30px] bg-slate-100 font-bold placeholder:text-dark-blue placeholder:bg-slate-100"
            />
            <div className="flex gap-3 border border-gray-500 w-24 justify-center rounded-lg bg-slate-200">
              <i className="fa-solid fa-code mt-1"></i>
              <p className="font-bold">Assign</p>
            </div>
            <p className="font-bold text-[20px] font-bold text-dark-blue text-dark-blue">Description</p>
            <div className="flex border border-slate-200 p-4 flex-col gap-5 rounded-lg bg-dark-blue w-full">
              <div className="flex gap-3 text-[20px] font-bold text-dark-blue text-white">
                <i className="fa-solid fa-b"></i>
                <i className="fa-solid fa-italic"></i>
                <i className="fa-solid fa-underline"></i>
                <i className="fa-solid fa-list-ul"></i>
                <i className="fa-solid fa-list"></i>
                <i className="fa-solid fa-link"></i>
                <i className="fa-solid fa-text-height"></i>
              </div>
              <div>
                <textarea
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Description...."
                  className="focus:outline-none border-none w-full h-auto pb-36 resize-none p-2"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-dark-blue text-white px-4 rounded-lg text-[18px]"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 m-5">
          <div className="flex flex-col gap-3 p-5 border-[5px] border-r-2 border-b-2  border-dark-blue rounded-lg bg-slate-100">
            <div className="flex justify-between border-b-2">
              <p className="text-[20px] font-bold text-dark-blue">Jishnu Hari</p>
              <p className="text-[20px] font-bold text-dark-blue">2 hr ago</p>
            </div>
            <p className="font-bold text-[18px] text-dark-blue">5 tips to create modern website</p>
            <p className="font-bold text-slate-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam rem recusandae autem culpa voluptatibus? Molestias.
            </p>
            <button className="bg-dark-blue w-full text-white rounded-lg p-2">Read More</button>
          </div>
          <div className="flex flex-col gap-3 p-5 border-[5px] border-b-2  border-dark-blue rounded-lg bg-slate-100">
            <div className="flex justify-between border-b-2">
              <p className="text-[20px] font-bold text-dark-blue">Jishnu Hari</p>
              <p className="text-[20px] font-bold text-dark-blue">2 hr ago</p>
            </div>
            <p className="font-bold text-[18px] text-dark-blue">5 tips to create modern website</p>
            <p className="font-bold text-slate-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam rem recusandae autem culpa voluptatibus? Molestias.
            </p>
            <button className="bg-dark-blue w-full text-white rounded-lg p-2">Read More</button>
          </div>
          <div className="flex flex-col gap-3 p-5 border-[5px] border-r-2   border-dark-blue rounded-lg bg-slate-100">
            <div className="flex justify-between border-b-2">
              <p className="text-[20px] font-bold text-dark-blue">Jishnu Hari</p>
              <p className="text-[20px] font-bold text-dark-blue">2 hr ago</p>
            </div>
            <p className="font-bold text-[18px] text-dark-blue">5 tips to create modern website</p>
            <p className="font-bold text-slate-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam rem recusandae autem culpa voluptatibus? Molestias.
            </p>
            <button className="bg-dark-blue w-full text-white rounded-lg p-2">Read More</button>
          </div>
          <div className="flex flex-col gap-3 p-5 border-[5px]   border-dark-blue rounded-lg bg-slate-100">
            <div className="flex justify-between border-b-2">
              <p className="text-[20px] font-bold text-dark-blue">Jishnu Hari</p>
              <p className="text-[20px] font-bold text-dark-blue">2 hr ago</p>
            </div>
            <p className="font-bold text-[18px] text-dark-blue">5 tips to create modern website</p>
            <p className="font-bold text-slate-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam rem recusandae autem culpa voluptatibus? Molestias.
            </p>
            <button className="bg-dark-blue w-full text-white rounded-lg p-2">Read More</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UpdateBlog;
