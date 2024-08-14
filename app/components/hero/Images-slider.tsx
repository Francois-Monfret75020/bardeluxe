import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import old from "../../../public/old.jpg";
import Trois from "../../../public/3cocktail.jpg";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([old, Trois, old]);
  const [loadedImages, setLoadedImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

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
    <div className="overflow-hidden  flex-shrink-0 h-screen w-screen relative gap-4">
    
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
              className="w-full h-full relative"
              initial={{ scale: 1 }}
              animate={{ scale: 1.15 }}
              transition={{ duration: 10, ease: "linear", repeat: Infinity }}
            >
              <Image
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
    </div>
  );
};

export default Slider;
