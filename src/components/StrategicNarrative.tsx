import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface StrategicNarrativeProps {
  moonAsset: string;
  meshAsset: string;
  techAsset: string;
  assemblyAsset: string;
}

export const StrategicNarrative: React.FC<StrategicNarrativeProps> = ({
  moonAsset,
  meshAsset,
  techAsset,
  assemblyAsset,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const moonY = useTransform(scrollYProgress, [0, 0.4], [-60, 0]);
  const meshY = useTransform(scrollYProgress, [0.2, 0.6], [60, 0]);
  const techY = useTransform(scrollYProgress, [0, 0.4], [-60, 0]);
  const assemblyY = useTransform(scrollYProgress, [0.2, 0.6], [60, 0]);

  const moonOpacity = useTransform(scrollYProgress, [0, 0.35], [0, 1]);
  const meshOpacity = useTransform(scrollYProgress, [0.15, 0.55], [0, 1]);
  const techOpacity = useTransform(scrollYProgress, [0, 0.35], [0, 1]);
  const assemblyOpacity = useTransform(scrollYProgress, [0.15, 0.55], [0, 1]);

  const missionText =
    "A-ONE Systems & Technologies builds premium digital experiences by aligning enterprise systems with high-fidelity, interactive UI/UX designs. We drive code quality, robust architecture, and visual aesthetics to achieve seamless production execution.";
  
  const characters = missionText.split("");

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative py-24 md:py-36 px-6 md:px-12 lg:px-24 bg-[#FFFFFF] min-h-[85vh] flex flex-col justify-center items-center overflow-hidden border-b border-zinc-100"
    >
      {/* 3D Decorative Corner Elements */}
      {/* Top Left: 3D Moon Device */}
      <motion.div
        style={{ y: moonY, opacity: moonOpacity }}
        className="absolute top-6 left-6 md:top-12 md:left-12 w-24 sm:w-32 md:w-40 object-contain pointer-events-none z-10 select-none"
      >
        <img
          src={moonAsset}
          alt="3D Moon Device"
          className="w-full h-full object-contain mix-blend-multiply"
        />
      </motion.div>

      {/* Top Right: 3D Tech Component */}
      <motion.div
        style={{ y: techY, opacity: techOpacity }}
        className="absolute top-6 right-6 md:top-12 md:right-12 w-24 sm:w-32 md:w-40 object-contain pointer-events-none z-10 select-none"
      >
        <img
          src={techAsset}
          alt="3D Tech Component"
          className="w-full h-full object-contain mix-blend-multiply"
        />
      </motion.div>

      {/* Bottom Left: 3D Geometric Mesh */}
      <motion.div
        style={{ y: meshY, opacity: meshOpacity }}
        className="absolute bottom-6 left-6 md:bottom-12 md:left-12 w-24 sm:w-32 md:w-40 object-contain pointer-events-none z-10 select-none"
      >
        <img
          src={meshAsset}
          alt="3D Geometric Mesh"
          className="w-full h-full object-contain mix-blend-multiply"
        />
      </motion.div>

      {/* Bottom Right: 3D Multi-Layered Assembly */}
      <motion.div
        style={{ y: assemblyY, opacity: assemblyOpacity }}
        className="absolute bottom-6 right-6 md:bottom-12 md:right-12 w-24 sm:w-32 md:w-40 object-contain pointer-events-none z-10 select-none"
      >
        <img
          src={assemblyAsset}
          alt="3D Multi-Layered Assembly"
          className="w-full h-full object-contain mix-blend-multiply"
        />
      </motion.div>

      {/* Interactive Text Display Container */}
      <div className="max-w-4xl mx-auto text-center z-20">
        <h2 className="font-serif-editorial text-5xl sm:text-7xl md:text-8xl italic text-[#000000] tracking-[-2.46px] leading-[1.05] mb-12 lowercase select-none">
          strategic intent
        </h2>
        
        <p className="font-sans text-xl md:text-3xl lg:text-4xl font-light leading-relaxed tracking-tight select-none">
          {characters.map((char, index) => {
            const start = 0.22 + (index / characters.length) * 0.38;
            const end = start + 0.04;
            const charOpacity = useTransform(scrollYProgress, [start, end], [0.18, 1]);

            return (
              <motion.span
                key={index}
                style={{ opacity: charOpacity }}
                className="inline-block transition-colors duration-150 text-[#333333]"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            );
          })}
        </p>
      </div>
    </section>
  );
};

export default StrategicNarrative;
