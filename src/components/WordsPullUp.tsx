import React from "react";
import { motion } from "framer-motion";

interface WordsPullUpProps {
  text: string;
  className?: string;
  delay?: number;
}

export const WordsPullUp: React.FC<WordsPullUpProps> = ({ text, className = "", delay = 0 }) => {
  const letters = Array.from(text);

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      y: "110%",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      className={`inline-block overflow-hidden select-none ${className}`}
    >
      {letters.map((char, idx) => (
        <span key={idx} className="inline-block overflow-hidden relative">
          <motion.span variants={child} className="inline-block will-change-transform">
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

export default WordsPullUp;
