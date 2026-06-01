import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Phone, Mail, Compass } from "lucide-react";
import VideoBackground from "../components/VideoBackground";
import WordsPullUp from "../components/WordsPullUp";
import WordsPullUpMultiStyle from "../components/WordsPullUpMultiStyle";
import ProgressiveText from "../components/AnimatedLetter";
import TeamCard from "../components/TeamCard";

// Team Data mapping roster matching exact PRD requirements
const teamData = [
  {
    name: "Rayyan Naqeeb",
    role: "Founder & Strategy Anchor",
    avatarUrl: "/assets/tech_comp.png"
  },
  {
    name: "Salik Farooq",
    role: "Co-Founder & Operations",
    avatarUrl: "/assets/moon_device.png"
  },
  {
    name: "Aahil Faraash",
    role: "Senior System Architect",
    avatarUrl: "/assets/geom_mesh.png"
  },
  {
    name: "Mohammad Gyasudin",
    role: "Junior Engineering Officer",
    avatarUrl: "/assets/assembly.png"
  },
  {
    name: "Huzaib Sajad Khan",
    role: "Sales Integration Support",
    avatarUrl: "/assets/hero_branding.png"
  },
  {
    name: "Basit Showkat",
    role: "Market Operations Outpost",
    avatarUrl: "/assets/moon_device.png"
  }
];

export const IndexPage: React.FC = () => {
  // Staggered cards viewport entry variants
  const cardGridVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const singleCardVariants = {
    hidden: {
      scale: 0.95,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="bg-black text-[#E1E0CC] selection:bg-[#DEDBC8] selection:text-black min-h-screen relative overflow-x-hidden">
      
      {/* SECTION 1: INSET CINEMATIC HERO */}
      <section className="h-screen w-full p-4 md:p-6 relative select-none">
        <div className="w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden relative bg-[#050505]">
          
          {/* Cinematic Background Video */}
          <VideoBackground />

          {/* Hanging Navigation Pillar */}
          <div className="absolute top-0 left-0 right-0 z-30 flex justify-center">
            <nav className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 flex items-center justify-center gap-3 sm:gap-6 md:gap-12 lg:gap-14 shadow-2xl">
              <a href="#" className="text-[10px] sm:text-xs md:text-sm font-bold text-[#DEDBC8] uppercase tracking-wider">
                A-ONE®
              </a>
              {["Services", "Products", "Team", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-[10px] sm:text-xs md:text-sm tracking-wider uppercase font-semibold text-[#E1E0CC]/80 hover:text-[#E1E0CC] transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Grid Anchor Mechanics */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 z-20 flex flex-col justify-end h-full">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-6 md:gap-y-0 md:gap-6 items-center md:items-end">
              
              {/* Left Track (7 Columns) - Giant display header */}
              <div className="col-span-12 md:col-span-7 flex items-baseline justify-center md:justify-start relative">
                <WordsPullUp
                  text="A-ONE"
                  className="font-serif font-bold uppercase text-[16vw] sm:text-[15vw] md:text-[13vw] lg:text-[11vw] leading-[0.85] tracking-[-0.05em] text-[#E1E0CC] relative"
                />
                <sup className="absolute top-[0.65em] -right-[0.3em] text-[0.31em] font-serif font-medium tracking-normal text-[#E1E0CC] select-none">
                  *
                </sup>
              </div>

              {/* Right Track (5 Columns) - Company positioning & CTA */}
              <div className="col-span-12 md:col-span-5 flex flex-col items-center md:items-start gap-4 md:gap-6 md:pl-4">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                  className="text-center md:text-left text-[#DEDBC8]/70 text-xs sm:text-sm md:text-base leading-[1.2] font-light max-w-sm"
                >
                  A-ONE is a premium system engineering and website design collective. We construct low-latency digital pipelines, custom automations, and cinematic user interfaces for visionary makers.
                </motion.p>

                {/* Main CTA Button control element */}
                <motion.a
                  href="#contact"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex items-center justify-between bg-[#DEDBC8] text-black rounded-full pl-6 pr-2 py-2 max-w-xs transition-all duration-300 hover:gap-3"
                >
                  <span className="font-semibold text-sm sm:text-base tracking-wide uppercase select-none mr-4">
                    Begin Journey
                  </span>
                  
                  <motion.div
                    variants={{
                      initial: { scale: 1 },
                      hover: { scale: 1.1, transition: { duration: 0.3, ease: "easeOut" } },
                    }}
                    initial="initial"
                    whileHover="hover"
                    className="bg-black text-[#DEDBC8] rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  >
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.div>
                </motion.a>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: ABOUT & STRATEGIC INTENT NARRATIVE */}
      <section id="services" className="py-24 md:py-36 px-4 md:px-8 bg-black">
        <div className="max-w-6xl mx-auto rounded-[2rem] bg-[#101010] p-8 sm:p-16 md:p-24 relative overflow-hidden flex flex-col gap-8">
          
          {/* Visual Indicator */}
          <div>
            <span className="text-[#DEDBC8] text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold block">
              Strategic Intent
            </span>
          </div>

          {/* Multi-Style Header */}
          <WordsPullUpMultiStyle
            segments={[
              { text: "We are A-ONE, ", className: "font-sans font-normal text-[#E1E0CC]" },
              { text: "a production-grade studio. ", className: "font-serif italic text-[#DEDBC8] font-normal" },
              { text: "We have skills in core system engineering, website design, and custom automation.", className: "font-sans font-light text-[#E1E0CC]/80" },
            ]}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.95] max-w-3xl"
          />

          {/* Progressive Letter Reveal Engine */}
          <div className="max-w-3xl mt-6 border-t border-zinc-900 pt-8">
            <ProgressiveText
              text="A-ONE Systems & Technologies builds premium digital experiences by aligning enterprise systems with high-fidelity, interactive UI/UX designs. We drive code quality, robust architecture, and visual aesthetics to achieve seamless production execution."
              className="text-base sm:text-lg md:text-xl font-light leading-relaxed tracking-wide text-[#808080]"
            />
          </div>

        </div>
      </section>

      {/* SECTION 3: DIGITAL PRODUCTS SHOWCASE MATRIX (FEATURES) */}
      <section id="products" className="min-h-screen bg-black py-24 md:py-36 px-4 md:px-8 relative overflow-hidden">
        
        {/* Procedural SVG grain texture backdrop */}
        <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none z-0" />
        
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col gap-16">
          
          {/* Feature Header Block */}
          <div className="border-b border-zinc-900 pb-10 flex flex-col gap-3">
            <WordsPullUp
              text="Studio-grade workflows for visionary creators."
              className="text-[#DEDBC8] font-sans font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl"
            />
            <WordsPullUp
              text="Built for pure vision. Powered by art."
              className="text-gray-500 font-sans font-light text-xl sm:text-2xl md:text-3xl lg:text-4xl"
            />
          </div>

          {/* 4-Column Asymmetrical Grid */}
          <motion.div
            variants={cardGridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:h-[480px] gap-3 sm:gap-2 md:gap-1 select-none"
          >
            
            {/* Card Cell 1 (Video Frame) */}
            <motion.div
              variants={singleCardVariants}
              className="col-span-1 md:col-span-2 rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-900 min-h-[300px] lg:h-full relative group"
            >
              <video
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-45 group-hover:opacity-75 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 z-10">
                <span className="font-serif italic text-lg sm:text-xl text-[#E1E0CC]">
                  A-ONE Platform Engine.
                </span>
              </div>
            </motion.div>

            {/* Card Cell 2 (Study Lounge OS - Index 01) */}
            <motion.div
              variants={singleCardVariants}
              className="rounded-2xl bg-[#212121] border border-zinc-900 p-6 flex flex-col justify-between lg:h-full shadow-lg group relative"
            >
              <div>
                <div className="w-12 h-12 mb-6 rounded-xl overflow-hidden border border-zinc-800">
                  <img
                    src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85"
                    alt="Study Lounge OS icon"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h4 className="text-lg font-bold tracking-tight text-white mb-2 font-sans">Study Lounge OS</h4>
                <p className="text-zinc-500 text-xs font-mono mb-6 uppercase tracking-wider">Index 01</p>
                
                <div className="flex flex-col gap-3">
                  {[
                    "Interactive learning dashboard",
                    "Real-time collaboration spaces",
                    "Automated session trackers",
                    "Integrated resource libraries"
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <Check className="w-3.5 h-3.5 text-[#DEDBC8] flex-shrink-0" />
                      <span className="text-gray-400 text-xs tracking-wide">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button className="w-10 h-10 rounded-full border border-zinc-800 hover:border-[#DEDBC8] hover:bg-[#DEDBC8] flex items-center justify-center transition-all duration-300 group">
                  <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-black transform -rotate-45" />
                </button>
              </div>
            </motion.div>

            {/* Card Cell 3 (Business Billing Systems - Index 02) */}
            <motion.div
              variants={singleCardVariants}
              className="rounded-2xl bg-[#212121] border border-zinc-900 p-6 flex flex-col justify-between lg:h-full shadow-lg group relative"
            >
              <div>
                <div className="w-12 h-12 mb-6 rounded-xl overflow-hidden border border-zinc-800">
                  <img
                    src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85"
                    alt="Business Billing Systems icon"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h4 className="text-lg font-bold tracking-tight text-white mb-2 font-sans">Business Billing Systems</h4>
                <p className="text-zinc-500 text-xs font-mono mb-6 uppercase tracking-wider">Index 02</p>
                
                <div className="flex flex-col gap-3">
                  {[
                    "Financial automation parameters",
                    "Real-time ledger audit trails",
                    "Multi-currency gateway sync",
                    "Instant payment systems"
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <Check className="w-3.5 h-3.5 text-[#DEDBC8] flex-shrink-0" />
                      <span className="text-gray-400 text-xs tracking-wide">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button className="w-10 h-10 rounded-full border border-zinc-800 hover:border-[#DEDBC8] hover:bg-[#DEDBC8] flex items-center justify-center transition-all duration-300 group">
                  <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-black transform -rotate-45" />
                </button>
              </div>
            </motion.div>

            {/* Card Cell 4 (Client Management Portals - Index 03) */}
            <motion.div
              variants={singleCardVariants}
              className="rounded-2xl bg-[#212121] border border-zinc-900 p-6 flex flex-col justify-between lg:h-full shadow-lg group relative col-span-1 md:col-span-2 lg:col-span-1"
            >
              <div>
                <div className="w-12 h-12 mb-6 rounded-xl overflow-hidden border border-zinc-800">
                  <img
                    src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85"
                    alt="Client Management Portals icon"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h4 className="text-lg font-bold tracking-tight text-white mb-2 font-sans">Client Management Portals</h4>
                <p className="text-zinc-500 text-xs font-mono mb-6 uppercase tracking-wider">Index 03</p>
                
                <div className="flex flex-col gap-3">
                  {[
                    "Dedicated security channels",
                    "Milestone tracking systems",
                    "Team communication matrices",
                    "Encrypted credential vaults"
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <Check className="w-3.5 h-3.5 text-[#DEDBC8] flex-shrink-0" />
                      <span className="text-gray-400 text-xs tracking-wide">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button className="w-10 h-10 rounded-full border border-zinc-800 hover:border-[#DEDBC8] hover:bg-[#DEDBC8] flex items-center justify-center transition-all duration-300 group">
                  <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-black transform -rotate-45" />
                </button>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </section>

      {/* SECTION 4: CORPORATE TEAM ROSTER SYSTEM */}
      <section id="team" className="py-24 bg-black px-6 md:px-12 lg:px-24 border-t border-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          
          <div className="mb-16 text-center md:text-left">
            <h2 className="font-sans text-[#DEDBC8] text-xs font-semibold uppercase tracking-[0.25em] mb-4">
              Our Core Brain
            </h2>
            <h3 className="font-serif italic text-4xl md:text-6xl text-[#E1E0CC] lowercase select-none">
              leadership & engineering
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.map((member) => (
              <TeamCard
                key={member.name}
                name={member.name}
                role={member.role}
                avatarUrl={member.avatarUrl}
              />
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5: SYSTEM COMMUNICATION CENTER (CONTACT FOOTER) */}
      <footer id="contact" className="bg-[#050505] border-t border-white/[0.03] py-24 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-8 relative z-10">
          
          {/* Core Call-To-Action Heading */}
          <h2 className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-[#E1E0CC] lowercase select-none">
            Let's build the eternal.
          </h2>
          
          {/* Hardcoded Communication Protocol Targets */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mt-6">
            
            <a
              href="tel:+919596860563"
              className="flex items-center gap-3 text-[#DEDBC8]/80 hover:text-[#DEDBC8] transition-colors duration-300 group text-sm font-medium"
            >
              <div className="w-10 h-10 rounded-full bg-white/[0.02] border border-white/[0.05] group-hover:border-[#DEDBC8]/40 flex items-center justify-center transition-all duration-300">
                <Phone className="w-4 h-4 text-[#DEDBC8]" />
              </div>
              <span>+91 9596860563</span>
            </a>

            <a
              href="mailto:aonesysntech@gmail.com"
              className="flex items-center gap-3 text-[#DEDBC8]/80 hover:text-[#DEDBC8] transition-colors duration-300 group text-sm font-medium"
            >
              <div className="w-10 h-10 rounded-full bg-white/[0.02] border border-white/[0.05] group-hover:border-[#DEDBC8]/40 flex items-center justify-center transition-all duration-300">
                <Mail className="w-4 h-4 text-[#DEDBC8]" />
              </div>
              <span>aonesysntech@gmail.com</span>
            </a>

            <a
              href="https://instagram.com/a1.systm.tech"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-[#DEDBC8]/80 hover:text-[#DEDBC8] transition-colors duration-300 group text-sm font-medium"
            >
              <div className="w-10 h-10 rounded-full bg-white/[0.02] border border-white/[0.05] group-hover:border-[#DEDBC8]/40 flex items-center justify-center transition-all duration-300">
                <Compass className="w-4 h-4 text-[#DEDBC8]" />
              </div>
              <span>@a1.systm.tech</span>
            </a>

          </div>

          {/* Footer Base Legal details */}
          <div className="border-t border-white/[0.03] w-full mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-gray-500">
            <div>
              &copy; {new Date().getFullYear()} A-ONE Systems & Technologies. All rights reserved.
            </div>
            <div className="flex gap-6">
              <span className="hover:text-[#E1E0CC] cursor-pointer transition-colors">Protocol Standard</span>
              <span className="h-4 w-[1px] bg-white/[0.05]" />
              <span className="hover:text-[#E1E0CC] cursor-pointer transition-colors">Privacy Encrypted</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
};

export default IndexPage;
