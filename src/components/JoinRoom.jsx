import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";


import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "../components/magicui/terminal";
import { ShinyButton } from "./magicui/shiny-button";
import { ShineBorder } from "../components/magicui/shine-border";
import { AvatarCircles } from "../components/magicui/avatar-circles";
import Dither from "../tailwind/Dither/Dither";
import Toast from "react-hot-toast";
import LiquidChrome from "../tailwind/LiquidChrome/LiquidChrome";

const JoinRoom = () => {
  const [roomId, setRoomId] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const type = location.state?.type || "create"; //!Agar location.state.type mil gaya, to usko type mein store karo.
                                                 //!Agar nahi mila, to "create" ko default value ke roop mein use karo.
  //  AVATARS
  const avatars = [
    {
      imageUrl: "https://avatars.githubusercontent.com/u/16860528",
      profileUrl: "https://github.com/dillionverma",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/20110627",
      profileUrl: "https://github.com/tomonarifeehan",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/106103625",
      profileUrl: "https://github.com/BankkRoll",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/149594822?v=4",
      profileUrl: "https://github.com/BURNOUTAlGO",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/59442788",
      profileUrl: "https://github.com/sanjay-mali",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/89768406",
      profileUrl: "https://github.com/itsarghyadas",
    },
  ];

  const validateInput = (roomId) => {
    const regex = /^[A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]{6,20}$/;
    return regex.test(roomId);
  };

  const handleJoin = () => {
    if (validateInput(roomId)) {
      navigate(`/room/${roomId}`);
    } else {
      Toast.error(
        "Invalid Room ID! Use 6–20 characters: letters, numbers, or symbols. No spaces."
      );
    }
  };
  return (
    <div className="h-[100vh] w-[100%] bg-[#c7c7c7] relative flex justify-center items-center text-white custom-font2">
      <div className="h-[100%] w-[100%] relative ">

        {type === "create" ? (
          <LiquidChrome
            baseColor={[0, 0, 0.1]}
            speed={0.6}
            amplitude={0.45}
            interactive={true}
          />
        ) : (
          <Dither
            waveColor={[0.5, 0.5, 0.5]}
            disableAnimation={false}
            enableMouseInteraction={true}
            mouseRadius={0.3}
            colorNum={4}
            waveAmplitude={0.56}
            waveFrequency={3}
            waveSpeed={0.02}
          />
        )}
      </div>

      <div className="h-[400px] w-[90%]  rounded-2xl  absolute flex justify-center items-center md:w-[400px]">
        <Terminal className="bg-white text-black relative overflow-hidden ">
          <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
          <TypingAnimation className="text-[25px]">
            {type === "create" ? "> Create RoomId" : "> Join RoomId"}
          </TypingAnimation>

          <AnimatedSpan delay={1500} className="text-green-500">
            <span>✔ Must be 6–20 characters long</span>
          </AnimatedSpan>

          <AnimatedSpan delay={2000} className="text-green-500">
            <span>✔ Can contain letters and numbers</span>
          </AnimatedSpan>

          <AnimatedSpan delay={2500} className="text-green-500">
            <span>✔ No spaces are ever allowed</span>
          </AnimatedSpan>

          <AnimatedSpan delay={3000} className="text-green-500">
            <span>✔ It must be unique</span>
          </AnimatedSpan>
          <input
            type="text"
            placeholder={type === "create" ? "Create your RoomId" : "Enter your JoinId"}
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            className="w-[250px] bg-[white] text-black rounded-[10px] p-[10px] mt-[1rem] placeholder:text-black border border-black "
          />

          <ShinyButton
            className="w-[100px] h-[2.5rem] bg-[#000000] text-white border-none mt-[1.5rem]"
            onClick={handleJoin}
          >
            Join
          </ShinyButton>
          <AvatarCircles
            numPeople={99}
            avatarUrls={avatars}
            className="mt-[1.5rem]"
          />
        </Terminal>
      </div>
    </div>
  );
};

export default JoinRoom;

