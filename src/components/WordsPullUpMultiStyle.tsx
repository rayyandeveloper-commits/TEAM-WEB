import React from "react";
import { motion } from "framer-motion";

export interface TextSegment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: TextSegment[];
  className?: string;
  delay?: number;
}

export const WordsPullUpMultiStyle: React.FC<WordsPullUpMultiStyleProps> = ({
  segments,
  className = "",
  delay = 0,
}) => {
  // Flatten words to execute a single, unified stagger chain across segments
  const allWords = segments.flatMap((segment) => {
    // Split text by space but filter out empty splits
    const words = segment.text.split(/\s+/).filter(Boolean);
    return words.map((word) => ({
      word,
      className: segment.className,
    }));
  });

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
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
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-150px" }}
      className={`flex flex-wrap items-baseline select-none overflow-hidden ${className}`}
    >
      {allWords.map((item, idx) => (
        <span
          key={idx}
          className={`inline-block overflow-hidden mr-[0.22em] pb-[0.05em] ${item.className || ""}`}
        >
          <motion.span variants={child} className="inline-block will-change-transform">
            {item.word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
};

export default WordsPullUpMultiStyle;
