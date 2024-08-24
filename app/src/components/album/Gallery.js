import React, { useState, useEffect, useMemo } from "react";
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
  const [selectedImage, setSelectedImage] = useState(null);

  const images = useMemo(
    () => [
      { src: lonelyTree, alt: "Lonely Tree" },
      { src: skiathos, alt: "Skiathos" },
      { src: pyramids, alt: "Back in time" },
      { src: fireman, alt: "Don't play with fire!" },
      { src: somlo1, alt: "Somlo sunset" },
      { src: minimal, alt: "Art over the water" },
      { src: minimal1, alt: "Countryside morning" },
      { src: mountains, alt: "When Mt. Fuji welcomes the sunrise" },
      { src: newspaperman, alt: "Newspaperman" },
      { src: trainmotion, alt: "The motion of my running mind" },
      { src: neonshop, alt: "Neonshop" },
      { src: elevator, alt: "Elevator" },
      { src: porsche, alt: "Porsche" },
      { src: guard, alt: "Not on my watch!" },
      { src: myhead, alt: "My head!" },
      { src: lookup, alt: "Look up!" },
      { src: realitycheck, alt: "Reality check" },
      { src: plane, alt: "Plane" },
      { src: somlo, alt: "Somlo sunset" },
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

  const handleImageClick = (image) => {
    if (selectedImage === image) {
      setSelectedImage(null);
    } else {
      setSelectedImage(image);
    }
  };

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
                <div
                  key={index}
                  className={`gallery-item ${
                    selectedImage === image
                      ? "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
                      : ""
                  }`}
                  onClick={() => handleImageClick(image)}
                >
                  <img
                    loading="lazy"
                    src={image.src}
                    alt={image.alt}
                    className={`w-full h-auto rounded-xl hover:scale-95 transition-transform duration-5 ${
                      selectedImage === image
                        ? "max-w-full max-h-full object-contain"
                        : ""
                    }`}
                  />
                  {selectedImage === image && (
                    <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-2 rounded-t-xl">
                      {image.alt}
                    </div>
                  )}
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
