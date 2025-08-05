import React, { useEffect, useRef } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { APP_ID, SERVER_SECRET } from "../constants";
import { useParams } from "react-router-dom";

const Room = () => {
  const { roomId } = useParams();
  const meetingRef = useRef(null);
  useEffect(() => {
    const userID = String(Math.floor(Math.random() * 10000));
    const userName = "User_" + userID;
    const KitTokens = ZegoUIKitPrebuilt.generateKitTokenForTest(
      APP_ID,
      SERVER_SECRET,
      roomId,
      userID,
      userName
    );

    const zp = ZegoUIKitPrebuilt.create(KitTokens);
    zp.joinRoom({
      container: meetingRef.current,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  }, [roomId]);

  return <div className="h-screen w-full" ref={meetingRef}></div>;
};

export default Room;
