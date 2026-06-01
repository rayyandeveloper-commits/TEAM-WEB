import React, { useRef, useState, useEffect } from "react";

interface ProductMarqueeProps {
  row1Images: string[];
  row2Images: string[];
}

export const ProductMarquee: React.FC<ProductMarqueeProps> = ({ row1Images, row2Images }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      
      // PRD Formula: (window.scrollY - sectionTop + window.innerHeight) * 0.3
      const calculated = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(calculated);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const tripledRow1 = [...row1Images, ...row1Images, ...row1Images];
  const tripledRow2 = [...row2Images, ...row2Images, ...row2Images];

  return (
    <div
      ref={containerRef}
      className="py-16 md:py-24 bg-[#FFFFFF] overflow-hidden flex flex-col gap-6 md:gap-10 relative select-none"
    >
      {/* Track 1: Shift rightwards on scroll */}
      <div className="flex whitespace-nowrap overflow-hidden">
        <div
          style={{
            transform: `translate3d(${offset}px, 0, 0)`,
            willChange: "transform",
          }}
          className="flex gap-4 md:gap-8 px-4 transition-transform duration-75 ease-out"
        >
          {tripledRow1.map((img, idx) => (
            <div
              key={`row1-${idx}`}
              className="flex-shrink-0 flex flex-col"
            >
              <div className="w-64 h-36 md:w-80 md:h-48 rounded-2xl border border-black/[0.08] bg-[#FFFFFF] overflow-hidden relative group">
                <img
                  src={img}
                  alt="Product preview"
                  className="w-full h-full object-cover mix-blend-multiply opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <span className="text-[#6F6F6F] text-xs uppercase tracking-wider mt-2 block font-sans px-1">
                Product Core preview
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Track 2: Shift leftwards on scroll */}
      <div className="flex whitespace-nowrap overflow-hidden">
        <div
          style={{
            transform: `translate3d(${-offset}px, 0, 0)`,
            willChange: "transform",
          }}
          className="flex gap-4 md:gap-8 px-4 transition-transform duration-75 ease-out"
        >
          {tripledRow2.map((img, idx) => (
            <div
              key={`row2-${idx}`}
              className="flex-shrink-0 flex flex-col"
            >
              <div className="w-64 h-36 md:w-80 md:h-48 rounded-2xl border border-black/[0.08] bg-[#FFFFFF] overflow-hidden relative group">
                <img
                  src={img}
                  alt="Product preview"
                  className="w-full h-full object-cover mix-blend-multiply opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <span className="text-[#6F6F6F] text-xs uppercase tracking-wider mt-2 block font-sans px-1">
                System Architecture preview
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductMarquee;
