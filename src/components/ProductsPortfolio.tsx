import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export interface ProjectCardData {
  id: string;
  category: string;
  name: string;
  images: {
    leftTop: string;
    leftBottom: string;
    rightHero: string;
  };
  liveUrl?: string;
}

interface ProductsPortfolioProps {
  projects: ProjectCardData[];
}

const ProjectCard: React.FC<{
  project: ProjectCardData;
  index: number;
  totalCards: number;
  scrollYProgress: any;
}> = ({ project, index, totalCards, scrollYProgress }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const start = index / totalCards;
  const end = 1;
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  
  const scale = useTransform(scrollYProgress, [start, end], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="sticky top-24 mb-16 md:mb-24 flex justify-center items-center h-[70vh] md:h-[80vh] w-full"
    >
      <motion.div
        style={{ scale }}
        className="w-full h-full bg-[#FFFFFF] border-2 border-black/[0.08] rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden"
      >
        {/* Card Header Row */}
        <div className="flex flex-row justify-between items-center border-b border-black/[0.08] pb-4">
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm text-[#6F6F6F]/60 uppercase tracking-widest">
              {project.id}
            </span>
            <span className="h-1 w-1 rounded-full bg-zinc-200" />
            <span className="text-xs uppercase tracking-widest text-[#6F6F6F] font-medium font-sans">
              {project.category}
            </span>
            <span className="h-1 w-1 rounded-full bg-zinc-200" />
            <h3 className="text-lg md:text-xl font-bold tracking-tight text-[#000000] font-sans">
              {project.name}
            </h3>
          </div>
          
          <a
            href={project.liveUrl || "#"}
            className="border-2 border-black text-black text-sm uppercase tracking-widest rounded-full px-6 py-2.5 hover:bg-black/5 transition-all duration-300 select-none cursor-pointer font-sans"
          >
            LiveProjectButton
          </a>
        </div>

        {/* Card Body - Asymmetrical Grid */}
        <div className="flex-1 grid grid-cols-12 gap-4 mt-6 overflow-hidden min-h-0">
          {/* Left Side: 40% Width (Col Span 5) */}
          <div className="col-span-12 md:col-span-5 flex flex-col gap-4 h-full min-h-0">
            <div className="flex-1 rounded-2xl overflow-hidden bg-zinc-50 border border-black/[0.08] relative group">
              <img
                src={project.images.leftTop}
                alt="Feature detail top"
                className="w-full h-full object-cover mix-blend-multiply grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
            </div>
            <div className="flex-1 rounded-2xl overflow-hidden bg-zinc-50 border border-black/[0.08] relative group">
              <img
                src={project.images.leftBottom}
                alt="Feature detail bottom"
                className="w-full h-full object-cover mix-blend-multiply grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
            </div>
          </div>

          {/* Right Side: 60% Width (Col Span 7) */}
          <div className="col-span-12 md:col-span-7 rounded-2xl overflow-hidden bg-zinc-50 border border-black/[0.08] relative group h-full min-h-0">
            <img
              src={project.images.rightHero}
              alt="Project Hero layout"
              className="w-full h-full object-cover mix-blend-multiply grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProductsPortfolio: React.FC<ProductsPortfolioProps> = ({ projects }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      id="products"
      className="relative bg-[#FFFFFF] px-4 md:px-8 lg:px-16 pb-12 -mt-12 z-10 rounded-t-[40px] sm:rounded-t-[60px]"
    >
      <div className="max-w-6xl mx-auto py-16">
        {/* Title details */}
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <h2 className="font-sans text-xs uppercase tracking-widest text-[#6F6F6F] mb-4 font-semibold">
            Product catalog
          </h2>
          <h3 className="font-serif-editorial text-4xl md:text-6xl italic text-[#000000] lowercase select-none">
            enterprise showcases
          </h3>
        </div>

        {/* Stack deck */}
        <div className="flex flex-col gap-0 relative">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              totalCards={projects.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPortfolio;
