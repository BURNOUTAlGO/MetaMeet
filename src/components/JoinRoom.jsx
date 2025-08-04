import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "../components/magicui/terminal";
import { ShinyButton } from "./magicui/shiny-button";
import { ShineBorder } from "../components/magicui/shine-border";
import { AvatarCircles } from "../components/magicui/avatar-circles";
import Dither from '../tailwind/Dither/Dither';








const JoinRoom = () => {
  const [roomId, setRoomId] = useState("");
  const navigate = useNavigate();
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
 

  function handleJoin() {
    if (roomId.trim()) {
      navigate(`/room/${roomId}`);
    }
  }
  return (
    <div className="h-[100vh] w-[100%] bg-[#c7c7c7] relative flex justify-center items-center text-white custom-font2">
      <div className="h-[100%] w-[100%] relative ">
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
      </div>


          <div className="h-[400px] w-[90%]  rounded-2xl  absolute flex justify-center items-center md:w-[50%] ">
            <Terminal className="bg-white text-black relative overflow-hidden ">
              <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
              <TypingAnimation className="text-[25px]">
                &gt; Create RoomId
              </TypingAnimation>

              <AnimatedSpan delay={1500} className="text-green-500">
                <span>✔ It must not be empty</span>
              </AnimatedSpan>

              <AnimatedSpan delay={2000} className="text-green-500">
                <span>✔ It should be between 4 and 20 characters long</span>
              </AnimatedSpan>

              <AnimatedSpan delay={2500} className="text-green-500">
                <span>✔ It can only contain letters, numbers and Symbols</span>
              </AnimatedSpan>

              <AnimatedSpan delay={3000} className="text-green-500">
                <span>✔ It must be unique</span>
              </AnimatedSpan>
              <input
                type="text"
                placeholder="Enter Your RoomID"
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
        // <h1 className="text-4xl font-bold mb-6 ">Join a Meeting</h1>
        // <input
        //   className="h-[2rem] w-[200px] p-[1rem] bg-amber-400 text-gray-950 border-2 border-b-black"
        //   type="text"
        //   placeholder="Enter Room ID"
        //   value={roomId}
        //   onChange={(e) => setRoomId(e.target.value)}
        // />

        // <button
        //   className="mt-5 bg-blue-600 text-white px-6 py-2 rounded-lg font-medium"
        //   onClick={handleJoin}
        // >
        //   Join Meet
        // </button>
