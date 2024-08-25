import { motion, AnimatePresence } from "framer-motion";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const ScrollDownIcon = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ y: 0 }}
        animate={{ y: 15  }}
        exit={{ x: 0 }}
        transition={{ duration: 1, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
      >
        <MdKeyboardDoubleArrowDown size={60} color="white" />
      </motion.div>
    </AnimatePresence>
  );
};

export default ScrollDownIcon;