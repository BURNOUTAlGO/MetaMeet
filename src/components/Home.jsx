import React from "react";
import Aurora from "../tailwind/Aurora/Aurora";
import BlurText from "../tailwind/BlurText/BlurText";
import CardSwap, { Card } from "../tailwind/CardSwap/CardSwap";
import Magnet from "../tailwind/Magnet/Magnet";
import ShinyText from "../tailwind/ShinyText/ShinyText";
import WrapButton from "../components/ui/wrap-button";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  const navigate = useNavigate();
  function goToJoinRoom() {
    navigate("/joinroom");
  }
  return (
    <div
      className="h-[100vh] w-[100%] bg-black relative flex justify-center items-center text-white custom-font2"
      id="home"
    >
      <div className="h-[100%] w-[100%] absolute">
        <Aurora
          colorStops={["#ff5616", "#FFB37D", "#FF6A00"]}
          blend={0.5}
          amplitude={1.0}
          speed={1.0}
        />
      </div>
      <div className="h-[85%] w-[95%] absolute flex flex-col justify-between items-center p-[2rem] md:flex-row">
        <div className="flex  flex-col gap-[1rem] w-[85%] md:pl-[3rem]">
          <BlurText
            text="Your Space to Meet Share and Grow"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className=" text-[33.9px] font-extrabold text-start md:[mb-8] w-[100%] text-white  md:w-[45%]  md:text-[40.9] lg:text-[50.9px]"
          />
          <div className=" w-[300px] pb-[3px]  rounded-4xl ">
            <ShinyText
              text="Designed for seamless teamwork"
              disabled={false}
              speed={3}
              className="custom-class text-[1rem] "
            />
          </div>
          {/*//! button */}
          <Magnet padding={50} disabled={false} magnetStrength={20}>
            <div className="flex">
              <WrapButton onClick={goToJoinRoom}>Create Room</WrapButton>
            </div>
          </Magnet>
        </div>
        <div
          className="p-[2rem]"
          style={{ height: "600px", position: "relative " }}
        >
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
          >
            <Card>
              <h3>Card 1</h3>
              <p>Your content here</p>
              <img className="object-cover w-[95%] h-auto" src="" alt="" />
            </Card>
            <Card>
              <h3>Card 2</h3>
              <p>Your content here</p>
                <img className="object-cover w-[100%] h-auto" src="" alt="" />
            </Card>
            <Card>
              <h3>Card 3</h3>
              <p>Your content here</p>
                <img className="object-cover w-[95%] h-auto" src="" alt="" />
            </Card>
          </CardSwap>
        </div>
      </div>
    </div>
  );
};

export default Home;
