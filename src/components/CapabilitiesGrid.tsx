import React from "react";
import { ArrowUpRight } from "lucide-react";

export interface ServiceItem {
  code: string;
  title: string;
  description: string;
}

interface CapabilitiesGridProps {
  services: ServiceItem[];
}

export const CapabilitiesGrid: React.FC<CapabilitiesGridProps> = ({ services }) => {
  return (
    <section
      id="services"
      className="bg-[#FFFFFF] text-[#000000] rounded-t-[40px] sm:rounded-t-[60px] relative z-10 px-6 md:px-12 lg:px-24 py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Block */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-[#6F6F6F] mb-4">
              Core Capabilities
            </h2>
            <h3 className="font-serif-editorial text-4xl md:text-6xl italic text-[#000000] lowercase select-none">
              services & engineering
            </h3>
          </div>
          <p className="max-w-md text-[#6F6F6F] font-sans text-sm md:text-base font-light leading-relaxed">
            Structuring modular systems and advanced interfaces to eliminate latency, scale production operations, and drive startup execution speeds.
          </p>
        </div>

        {/* Lanes List */}
        <div className="flex flex-col border-t border-black/[0.08]">
          {services.map((service) => (
            <div
              key={service.code}
              className="group border-b border-black/[0.08] py-10 md:py-14 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 hover:bg-zinc-50/50 transition-colors duration-500 px-4 -mx-4 rounded-xl"
            >
              {/* Left Column: Code & Name */}
              <div className="flex items-start md:items-center gap-8 md:gap-16">
                <span className="font-serif-editorial italic text-4xl md:text-6xl text-zinc-300 group-hover:text-black transition-colors duration-300">
                  {service.code}
                </span>
                
                <h4 className="font-sans text-xl md:text-2xl font-bold tracking-tight text-[#000000]">
                  {service.title}
                </h4>
              </div>

              {/* Right Column: Description & Action */}
              <div className="flex items-center gap-8 md:gap-16 w-full md:w-auto md:max-w-xl justify-between md:justify-end">
                <p className="font-sans text-[#6F6F6F] text-sm md:text-base font-light leading-relaxed md:text-right">
                  {service.description}
                </p>
                
                <div className="w-10 h-10 rounded-full border border-black/[0.08] flex items-center justify-center flex-shrink-0 group-hover:bg-[#000000] group-hover:text-[#FFFFFF] group-hover:border-[#000000] transition-all duration-300 transform group-hover:rotate-45">
                  <ArrowUpRight className="w-4 h-4 text-[#000000] group-hover:text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesGrid;
