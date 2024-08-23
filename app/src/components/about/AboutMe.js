import React, { useState, useEffect } from "react";
import NavBar from "../../common/NavBar";
import Footer from "../../common/Footer";
import backgroundImage from "../../assets/me/me.jpg";

function AboutMe() {
  const [isTextAreaVisible, setIsTextAreaVisible] = useState(false);

  useEffect(() => {
    const handleRightClick = (event) => {
      event.preventDefault();
    };

    window.addEventListener("contextmenu", handleRightClick);

    return () => {
      window.removeEventListener("contextmenu", handleRightClick);
    };
  }, []);

  const handleButtonClick = () => {
    setIsTextAreaVisible(true);
  };

  const handleCloseTextArea = () => {
    setIsTextAreaVisible(false);
  };

  return (
    <div className="relative h-screen" style={{ overscrollBehavior: "none" }}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="relative z-10 flex flex-col h-full">
        <NavBar />
        <main className="flex-grow flex items-center justify-center">
          <div className="container mx-auto p-4 flex flex-col items-center">
            {!isTextAreaVisible && (
              <button
                onClick={handleButtonClick}
                className="bg-gray-700 bg-opacity-30 text-white font-bold floating
                py-2 px-4 rounded-2xl shadow-lg hover:bg-gray-700 transition duration-200"
                style={{ position: "absolute", bottom: "33%" }}
              >
                cLiCk Me
              </button>
            )}
            {isTextAreaVisible && (
              <div className="bg-black bg-opacity-30 p-4 rounded-xl shadow-lg w-full max-w-2xl">
                <button
                  onClick={handleCloseTextArea}
                  className="text-white py-0 font-bold px-2 rounded-lg shadow-lg
                  hover:bg-red-700 hover:bg-opacity-20 transition duration-200 mb-4"
                >
                  X
                </button>
                <div className="w-full h-70 p-2 border-gray-700 border-2 rounded-lg overflow-auto">
                  <p className="text-white font-bold">
                    Hello there!
                    <br />
                    <br />
                    My name is Zsolt.
                    <br />
                    Currently living in Germany.
                    <br />
                    <span
                      className="block"
                      style={{ textAlign: "left", marginLeft: "15%" }}
                    >
                      I am a software developer,
                    </span>
                    <span className="block text-right">cabinetmaker,</span>
                    <span
                      className="block"
                      style={{ textAlign: "right", marginRight: "25%" }}
                    >
                      joiner,
                    </span>
                    <span className="block text-left">photographer</span>
                    <span
                      className="block"
                      style={{ textAlign: "right", marginRight: "35%" }}
                    >
                      and a person who cannot center shit.
                    </span>
                    <br />
                    Just kidding!
                    <br />I can achieve anything with black magic!
                  </p>
                </div>
              </div>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default AboutMe;
