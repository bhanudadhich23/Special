import React, { useState, useEffect } from "react";
import "./image.css";
import Prop from "../public/images/love.png.png";
import jagriti from "../public/images/jaggu.png";
import song from "../public/images/tumse.mp3";

function Jaggu() {
  const [position, setPosition] = useState({ x: 0, y: -194 });
  const [displays, setDisplay] = useState("none");
  const [showmsg, setShowmsg] = useState("");
  const [count, setCount] = useState(3); // Countdown state
  const [audio] = useState(new Audio(song)); // Initialize audio

  useEffect(() => {
    return () => {
      audio.pause(); // Pause the audio when the component unmounts
      audio.currentTime = 0; // Reset to the start
    };
  }, [audio]);

  function displace() {
    let randomX = Math.floor(Math.random() * 300);
    let randomY = Math.floor(Math.random() * 300);

    setPosition({ x: randomX, y: randomY });
  }

  function yes() {
    document.getElementById("no").style.display = "none";
    document.getElementById("yes").style.display = "none";
    setShowmsg(`Just wait for ${count} seconds, Jaggu...`);

    // Start the countdown
    const intervalId = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 1) {
          clearInterval(intervalId);
          setShowmsg(""); // Clear the message after countdown ends
          setDisplay("block"); // Show the Shayari
          audio.currentTime = 70;
          audio.play(); // Play the audio after countdown
          return 0;
        }
        setShowmsg(`Just wait for ${prevCount - 1} seconds, Jaggu...`);
        return prevCount - 1;
      });
    }, 1000);
  }

  return (
    <>
      <div>
        <img src={Prop} alt="Propose" />
        <i>Jaggu 😊</i>
      </div>
      <button onClick={yes} id="yes">
        Yes
      </button>
      <button
        onMouseOver={displace}
        id="no"
        onTouchStart={displace}
        style={{
          position: "absolute",
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: "transform 0s ease",
        }}
      >
        No
      </button>
      <h5 style={{ color: "red" }}>{showmsg}</h5>
      <div className="shayri" style={{ display: displays }}>
        आपकी आँखों में जो जादू है, वो दिल को बेकरार कर देता है, हर नजर में बस
        आपका ही ख्याल मेरे दिल को करार देता है। जागृति, अब ये दिल आपसे एक बात
        कहने को है बेताब, क्या आप मेरे दिल की धड़कन बनेंगी, क्या आप मेरा साथ
        निभाएंगी हमेशा?
      </div>
    </>
  );
}

export default Jaggu;
