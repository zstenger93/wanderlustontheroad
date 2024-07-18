import React from "react";
import NavBar from "../../common/NavBar";
import Footer from "../../common/Footer";
import backgroundImage from "../../assets/me/me.jpg";

function HomePage() {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="relative z-10 flex flex-col h-full">
        <NavBar />
        <main className="flex-grow">
          <div className="container mx-auto p-4">
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
