import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface CharacterProps {
  char: string;
  index: number;
  totalChars: number;
  scrollYProgress: MotionValue<number>;
}

const Character: React.FC<CharacterProps> = ({ char, index, totalChars, scrollYProgress }) => {
  const charProgress = index / totalChars;
  
  // Calculate relative stagger boundaries using the PRD formula
  const start = Math.max(0, charProgress - 0.1);
  const end = Math.min(1, charProgress + 0.05);

  // Map progress to opacity limits 0.2 to 1.0
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1.0]);

  return (
    <motion.span
      style={{ opacity }}
      className="inline-block transition-colors duration-100 will-change-transform text-[#E1E0CC]"
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
};

interface ProgressiveTextProps {
  text: string;
  className?: string;
}

export const ProgressiveText: React.FC<ProgressiveTextProps> = ({ text, className = "" }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  // Scroll target tracks container entry and exit in viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const chars = text.split("");

  return (
    <p ref={containerRef} className={className}>
      {chars.map((char, index) => (
        <Character
          key={index}
          char={char}
          index={index}
          totalChars={chars.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </p>
  );
};

export default ProgressiveText;
