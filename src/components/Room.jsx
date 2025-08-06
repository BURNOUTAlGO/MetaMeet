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

    const KitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      APP_ID,
      SERVER_SECRET,
      roomId,
      userID,
      userName
    );

    const zp = ZegoUIKitPrebuilt.create(KitToken);

    zp.joinRoom({
      container: meetingRef.current,
      turnOnMicrophoneWhenJoining: true,
      turnOnCameraWhenJoining: true,
      showMyCameraToggleButton: true,
      showMyMicrophoneToggleButton: true,
      showAudioVideoSettingsButton: true,      // Force enable on all devices
      showScreenSharingButton: true,           // Force enable on all devices
      showTextChat: true,
      showUserList: true,
      maxUsers: 50,
      layout: 'Grid',
      showLayoutButton: true,
      scenario: {
        mode: 'VideoConference',
        config: {
          role: 'Host',
        },
      },
    });

    return () => {
      zp.destroy();
    };
  }, [roomId]);

  return <div className="h-screen w-full" ref={meetingRef}></div>;
};

export default Room;
