import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { IKImage } from "imagekitio-next";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import ScrollDownIcon from "../../ui/ScrolldownIcon";

const Slider = () => {
  const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const [images, setImages] = useState([
    "https://ik.imagekit.io/xgjpkseg3/BarCocktail/medeService.jpeg?updatedAt=1724603760219",
    "https://ik.imagekit.io/xgjpkseg3/BarCocktail/medeService.jpeg?updatedAt=1724603760219",
    "https://ik.imagekit.io/xgjpkseg3/BarCocktail/medeService.jpeg?updatedAt=1724603760219",
  ]);

  const controls = useAnimation();

  const incrementIndex = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 2) {
        setDirection(-1);
        return prevIndex - 1;
      } else if (prevIndex === 0 && direction === -1) {
        setDirection(1);
        return prevIndex + 1;
      } else {
        return prevIndex + direction;
      }
    });
  };

  useEffect(() => {
    const interval = setInterval(incrementIndex, 4000);
    return () => clearInterval(interval);
  }, [direction]);

  return (
    <div className="overflow-hidden  flex-shrink-0 h-screen w-screen relative">
      <motion.div
        className="flex flex-shrink-0"
        animate={{ x: `-${currentIndex * 100}%` }}
        transition={{ duration: 1, ease: "linear" }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 h-screen relative  overflow-hidden"
          >
            <motion.div
              className="w-full h-screen relative"
              initial={{ scale: 1 }}
              animate={{ scale: 1.15 }}
              transition={{ duration: 10, ease: "linear", repeat: Infinity }}
            >
              <IKImage
               urlEndpoint={urlEndpoint}
                src={src}
                alt={`Image ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
                priority
                quality={100}
              />
            </motion.div>
          </div>
        ))}
      </motion.div>

      <ScrollDownIcon />
    
    </div>
  );
};

export default Slider;
