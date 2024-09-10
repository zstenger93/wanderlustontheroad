import React, { useEffect } from "react";
import NavBar from "../../common/NavBar";
import Footer from "../../common/Footer";
import backgroundImage from "../../assets/city/DSC_5059.jpg";

function HomePage() {
  useEffect(() => {
    const handleRightClick = (event) => {
      event.preventDefault();
    };

    window.addEventListener("contextmenu", handleRightClick);

    return () => {
      window.removeEventListener("contextmenu", handleRightClick);
    };
  }, []);

  return (
    <div className="relative h-screen" style={{ overscrollBehavior: "none" }}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="relative z-10 flex flex-col h-full">
        <NavBar />
        <main className="flex-grow flex items-start justify-center">
          <div
            className="text-center text-white font-semibold text-lg bg-black bg-opacity-50
            p-4 rounded-xl md:bg-transparent md:bg-opacity-0"
            style={{ position: "absolute", top: "10%" }}
          >
            Creativity is
            <br />
            seeing what
            <br />
            everyone else
            <br />
            has seen,
            <br />
            and thinking
            <br />
            what no one
            <br />
            else has
            <br />
            thought.
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
