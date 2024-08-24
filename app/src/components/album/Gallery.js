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
import face from "../../assets/abstract/DSC_5531_2-2.jpg";
import morocco from "../../assets/city/jpeg-optimizer_DSC_2912.jpg";
import ferrari from "../../assets/city/jpeg-optimizer_DSC_3403.jpg";
import bpb from "../../assets/city/jpeg-optimizer_DSC_4179.jpg";
import tokio from "../../assets/city/DSC_1913.jpg";
import past from "../../assets/city/DSC_5059.jpg";
import lightt from "../../assets/city/jpeg-optimizer_DSC_6851.jpg";
import rainw from "../../assets/city/jpeg-optimizer_DSC_6882.jpg";
import foggydome from "../../assets/city/jpeg-optimizer_DSC_6937.jpg";
import godzilla from "../../assets/city/jpeg-optimizer_DSC_8185.jpg";
import threetower from "../../assets/city/jpeg-optimizer_DSC_8295.jpg";
import cloudcatching from "../../assets/minimal/jpeg-optimizer_DSC_1387.jpg";
import muskateers from "../../assets/minimal/jpeg-optimizer_DSC_3303-2.jpg";
import longwalk from "../../assets/nature/jpeg-optimizer_DSC_0187.jpg";
import birds from "../../assets/nature/jpeg-optimizer_DSC_2720.jpg";
import sahara from "../../assets/nature/jpeg-optimizer_DSC_3041.jpg";
import bird from "../../assets/nature/jpeg-optimizer_DSC_4138.jpg";
import fish from "../../assets/nature/jpeg-optimizer_DSC_4231.jpg";
import otthon from "../../assets/nature/jpeg-optimizer_DSC_4978.jpg";
import longbird from "../../assets/nature/jpeg-optimizer_DSC_6160.jpg";
import flyingbird from "../../assets/nature/jpeg-optimizer_DSC_6181.jpg";
import bee from "../../assets/nature/jpeg-optimizer_DSC_6215.jpg";
import thesteeler from "../../assets/nature/jpeg-optimizer_DSC_6236.jpg";
import snake from "../../assets/nature/jpeg-optimizer_DSC_6427.jpg";
import rabbitcolor from "../../assets/nature/jpeg-optimizer_DSC_6650-2.jpg";
import rabbitbw from "../../assets/nature/jpeg-optimizer_DSC_6650-3.jpg";
import screame from "../../assets/portrait/jpeg-optimizer_DSC_1634.jpg";
import box from "../../assets/portrait/jpeg-optimizer_DSC_6122-2.jpg";
import reflection from "../../assets/portrait/jpeg-optimizer_DSC_6182.jpg";
import letgo from "../../assets/portrait/jpeg-optimizer_tryhard portrait.jpg";
import whatdid from "../../assets/street/jpeg-optimizer_DSC_4242.jpg";
import pick from "../../assets/street/jpeg-optimizer_DSC_5244.jpg";
import music from "../../assets/street/jpeg-optimizer_DSC_5591.jpg";
import cat from "../../assets/street/jpeg-optimizer_DSC_6470.jpg";
import kids from "../../assets/street/jpeg-optimizer_DSC_6782.jpg";
import waiting from "../../assets/street/jpeg-optimizer_DSC_7611.jpg";
import walking from "../../assets/street/jpeg-optimizer_DSC_8384.jpg";
import shifting from "../../assets/street/jpeg-optimizer_DSC_9218.jpg";
import taxi from "../../assets/street/jpeg-optimizer_DSC_9507.jpg";
import cross from "../../assets/street/jpeg-optimizer_DSC_9533.jpg";
import jordan from "../../assets/travel/jpeg-optimizer_DSC_3652.jpg";
import caution from "../../assets/travel/jpeg-optimizer_DSC_3682.jpg";
import guidingtower from "../../assets/travel/jpeg-optimizer_DSC_4381.jpg";
import monks from "../../assets/travel/jpeg-optimizer_DSC_7642.jpg";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = useMemo(
    () => [
      { src: lonelyTree, alt: "Lonely Tree" },
      { src: skiathos, alt: "A greek morning" },
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
      { src: plane, alt: "American sandwitch" },
      { src: somlo, alt: "Somlo sunset" },
      { src: face, alt: "The face behind all" },
      { src: morocco, alt: "Morning in the labirinth" },
      { src: ferrari, alt: "Ferrari" },
      { src: bpb, alt: "Clouds over the citadell" },
      { src: lightt, alt: "The guiding light" },
      { src: rainw, alt: "A rainy day" },
      { src: foggydome, alt: "Foggy dome" },
      { src: godzilla, alt: "Godzilla is back" },
      { src: threetower, alt: "Three tower" },
      { src: cloudcatching, alt: "Cloud catching" },
      { src: muskateers, alt: "The three musketeers" },
      { src: longwalk, alt: "Sunrise at the shores" },
      { src: birds, alt: "Pair" },
      { src: sahara, alt: "At the end of the world in the Sahara" },
      { src: bird, alt: "The poser" },
      { src: fish, alt: "Fish warmup" },
      { src: otthon, alt: "Otthon" },
      { src: longbird, alt: "Lookout" },
      { src: flyingbird, alt: "I sea my lunch there!" },
      { src: bee, alt: "I can't Beelieve it!" },
      { src: thesteeler, alt: "An attempt to steal" },
      { src: snake, alt: "Snake the game" },
      { src: rabbitcolor, alt: "Rabbit land" },
      { src: rabbitbw, alt: "Rabbit land" },
      { src: screame, alt: "I scream inside" },
      { src: box, alt: "Look! Someone is coming!" },
      { src: reflection, alt: "Reflection of knowledge" },
      { src: letgo, alt: "Sometimes you just need to let it go" },
      { src: whatdid, alt: "What did she say I should buy?" },
      { src: pick, alt: "Which flower should I pick for mommy?" },
      { src: music, alt: "The song of the long night" },
      { src: cat, alt: "Leave me alone" },
      { src: kids, alt: "Kids on the way to school" },
      { src: waiting, alt: "Waiting" },
      { src: walking, alt: "Walking" },
      { src: shifting, alt: "Shifting reality" },
      { src: taxi, alt: "Taxi!" },
      { src: cross, alt: "Crossing minimalism" },
      { src: jordan, alt: "Petra" },
      { src: caution, alt: "Fence of the nightlife" },
      { src: guidingtower, alt: "Guiding tower" },
      { src: monks, alt: "Monk ceremony" },
      { src: tokio, alt: "Tokio sunset over the city" },
      { src: past, alt: "Reflection of the past" },
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
