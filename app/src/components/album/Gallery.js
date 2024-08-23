import React, { useEffect, useMemo } from "react";
import NavBar from "../../common/NavBar";
import Footer from "../../common/Footer";
import backgroundImage from "../../assets/abstract/DSC_0583-Pano.jpg";
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
  const images = useMemo(
    () => [
      { src: lonelyTree, alt: "Lonely Tree" },
      { src: skiathos, alt: "Skiathos" },
      { src: pyramids, alt: "Pyramids" },
      { src: fireman, alt: "Fireman" },
      { src: somlo1, alt: "Somlo1" },
      { src: minimal, alt: "Minimal" },
      { src: minimal1, alt: "Minimal1" },
      { src: mountains, alt: "Mountains" },
      { src: newspaperman, alt: "Newspaperman" },
      { src: trainmotion, alt: "Trainmotion" },
      { src: neonshop, alt: "Neonshop" },
      { src: elevator, alt: "Elevator" },
      { src: porsche, alt: "Porsche" },
      { src: guard, alt: "Guard" },
      { src: myhead, alt: "Myhead" },
      { src: lookup, alt: "Lookup" },
      { src: realitycheck, alt: "Realitycheck" },
      { src: plane, alt: "Plane" },
      { src: somlo, alt: "Somlo" },
    ],
    []
  );

  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image.src;
    });

    const handleRightClick = (event) => {
      event.preventDefault();
    };

    window.addEventListener("contextmenu", handleRightClick);

    return () => {
      window.removeEventListener("contextmenu", handleRightClick);
    };
  }, [images]);

  return (
    <div
      className="relative h-screen"
      style={{ overscrollBehavior: "none", loading: "lazy" }}
    >
      <div
        className=""
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "contain",
          backgroundRepeat: "repeat",
          loading: "lazy",
        }}
      >
        <NavBar />
        <main className="flex-grow">
          <div className="container mx-auto p-4">
            <div className="gallery">
              {images.map((image, index) => (
                <div key={index} className="gallery-item">
                  <img
                    loading="lazy"
                    src={image.src}
                    alt={image.alt}
                    className="
                    w-full h-auto rounded-xl hover:scale-95
                    transition-transform duration-5"
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
