import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface TeamCardProps {
  name: string;
  role: string;
  avatarUrl: string;
}

export const TeamCard: React.FC<TeamCardProps> = ({ name, role, avatarUrl }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { damping: 25, stiffness: 200 });
  const springY = useSpring(y, { damping: 25, stiffness: 200 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    const maxDrift = 15;
    const driftX = (mouseX / (width / 2)) * maxDrift;
    const driftY = (mouseY / (height / 2)) * maxDrift;

    x.set(driftX);
    y.set(driftY);
  };

  const handleMouseEnter = () => {
    // No-op hover start
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative p-[1px] rounded-2xl bg-[#101010] border border-white/[0.02] transition-all duration-300 overflow-hidden cursor-pointer group hover:border-[#DEDBC8]/30 hover:shadow-[0_10px_30px_rgba(222,219,200,0.02)]"
    >
      {/* Background Gradient Hover Trail */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/10 via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <motion.div
        style={{ x: springX, y: springY }}
        className="p-8 flex flex-col items-center text-center relative z-10 select-none will-change-transform"
      >
        {/* Profile Image Border Halo */}
        <div className="w-24 h-24 rounded-full p-[2px] bg-gradient-to-b from-white/[0.08] to-transparent group-hover:from-zinc-600 group-hover:to-black transition-all duration-500 mb-6">
          <div className="w-full h-full rounded-full overflow-hidden bg-[#101010]">
            <img
              src={avatarUrl}
              alt={name}
              className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 scale-105 group-hover:scale-110"
            />
          </div>
        </div>
        
        <h3 className="font-sans text-lg font-bold text-[#E1E0CC] tracking-tight mb-1">
          {name}
        </h3>
        
        <p className="font-sans text-zinc-400 text-xs font-light tracking-widest uppercase mt-1">
          {role}
        </p>
      </motion.div>

      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-zinc-800 pointer-events-none group-hover:border-zinc-700 transition-colors" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-zinc-800 pointer-events-none group-hover:border-zinc-700 transition-colors" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-zinc-800 pointer-events-none group-hover:border-zinc-700 transition-colors" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-zinc-800 pointer-events-none group-hover:border-zinc-700 transition-colors" />
    </div>
  );
};

export default TeamCard;
