"use client";
import { motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
    },
  },
};

const AnimatedText = ({
  text,
  className = "",
}: {
  text: string;
  className: string;
}) => {
  return (
    <div
      className="w-full mx-auto flex items-center justify-center text-center
    overflow-hidden 
    py-0 sm:py-2"
    >
      <motion.h1
        className={`inline-block 
        w-full
         text-dark 
         dark:text-light
        font-bold 
        text-8xl  
         ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            className="inline-block"
            key={word + "-" + index}
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
