import React from "react";
import NavBar from "../../common/NavBar";
import Footer from "../../common/Footer";
import backgroundImage from "../../assets/city/DSC_1913.jpg";
import lonelyTree from "../../assets/nature/DSC_3758.jpg";
import pyramids from "../../assets/travel/DSC_3976-2.jpg";
import skiathos from "../../assets/city/DSC_2469.jpg";
import fireman from "../../assets/city/DSC_6844.jpg";
import minimal from "../../assets/minimal/DSC_6990-Enhanced-NR.jpg";
import minimal1 from "../../assets/minimal/DSC_7018-Enhanced-NR.jpg";
import mountains from "../../assets/mountains/DSC_0223-Pano.jpg";
import somlo from "../../assets/nature/DSC_6940.jpg";
import somlo1 from "../../assets/nature/DSC_6938.jpg";
import trainmotion from "../../assets/street/DSC_1017.jpg";
import elevator from "../../assets/street/DSC_1053.jpg";
import neonshop from "../../assets/street/DSC_1191.jpg";
import porsche from "../../assets/street/DSC_1692.jpg";
import guard from "../../assets/street/DSC_1698.jpg";
import myhead from "../../assets/street/DSC_2409.jpg";
import lookup from "../../assets/street/DSC_2594.jpg";
import newspaperman from "../../assets/street/DSC_2971.jpg";
import plane from "../../assets/street/DSC_3008-2.jpg";
import realitycheck from "../../assets/street/DSC_3017-2.jpg";

function Gallery() {
  const images = [
    { src: lonelyTree, alt: "Lonely Tree" },
    { src: skiathos, alt: "Skiathos" },
    { src: pyramids, alt: "Pyramids" },
    { src: fireman, alt: "Pyramids" },
    { src: somlo1, alt: "Pyramids" },
    { src: minimal, alt: "Pyramids" },
    { src: minimal1, alt: "Pyramids" },
    { src: mountains, alt: "Pyramids" },
    { src: somlo, alt: "Pyramids" },
    { src: trainmotion, alt: "Pyramids" },
    { src: neonshop, alt: "Pyramids" },
    { src: elevator, alt: "Pyramids" },
    { src: porsche, alt: "Pyramids" },
    { src: guard, alt: "Pyramids" },
    { src: myhead, alt: "Pyramids" },
    { src: lookup, alt: "Pyramids" },
    { src: newspaperman, alt: "Pyramids" },
    { src: plane, alt: "Pyramids" },
    { src: realitycheck, alt: "Pyramids" },
  ];
  return (
    <div className="relative h-screen" style={{ overscrollBehavior: "none" }}>
      <div
        className=""
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "contain",
          backgroundRepeat: "repeat",
        }}
      >
        <NavBar />
        <main className="flex-grow">
          <div className="container mx-auto p-4">
            <div className="gallery">
              {images.map((image, index) => (
                <div key={index} className="gallery-item">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="
                    w-full h-auto rounded-xl hover:scale-105
                    transition-transform duration-10 border-black
                    border-r-2 border-b-2 hover:border-r-4 hover:border-b-4 "
                  />
                </div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Gallery;
