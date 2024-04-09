import React from "react";
import img from "../assets/img/hero.png";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:flex-row items-center lg:px-32 px-5 bg-backgroundColor">
      <div className="flex flex-col items-center text-center lg:text-start lg:items-start w-full lg:w-3/4 space-y-4">
        <h1 className=" text-5xl font-semibold leading-tight mt-24">
          I'm Saurav Sebedi
          <span className=" text-brightColor"> Front-end </span>
          Developer
        </h1>
        <p>
        Hey there! I'm Saurav Subedi, a frontend developer passionate about creating beautiful and user-friendly websites. Excited to share my work with you!
        </p>
        <Button title="HIRE ME" />
      </div>
      <div className=" mt-20">
        <img width={570} src={img} alt="img" />
      </div>
    </div>
  );
};

export default Home;
