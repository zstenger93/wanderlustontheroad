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
        <main className="flex-grow"></main>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
