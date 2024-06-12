import React, { useEffect, useRef } from "react";
import Peer from "peerjs";

const VideoCall = () => {
  const localVideoRef = useRef();
  const remoteVideoRef = useRef();
  let peer;

  useEffect(() => {
    peer = new Peer();

    // Listen for peer ID assignment
    peer.on("open", () => {
      console.log("Peer ID:", peer.id);
    });

    // Listen for incoming calls
    peer.on("call", (call) => {
      // Answer the call and stream local video
      navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
        call.answer(stream);

        // Display remote video stream
        call.on("stream", (remoteStream) => {
          remoteVideoRef.current.srcObject = remoteStream;
        });
      }).catch((error) => {
        console.error("Error accessing media devices:", error);
      });
    });

    // Error handling
    peer.on("error", (error) => {
      console.error("PeerJS error:", error);
    });

    return () => {
      peer.disconnect();
    };
  }, []);

  // Make a call to a remote peer
  const makeCall = (remotePeerId) => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
      const call = peer.call(remotePeerId, stream);

      // Display remote video stream
      call.on("stream", (remoteStream) => {
        remoteVideoRef.current.srcObject = remoteStream;
      });
    }).catch((error) => {
      console.error("Error accessing media devices:", error);
    });
  };

  return (
    <div>
      <h1>Video Call</h1>
      <video ref={localVideoRef} autoPlay muted />
      <video ref={remoteVideoRef} autoPlay />
      <button onClick={() => makeCall("remote-peer-id")}>Make Call</button>
    </div>
  );
};

export default VideoCall;
