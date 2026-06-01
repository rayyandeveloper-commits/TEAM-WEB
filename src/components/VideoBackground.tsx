import React from "react";

export const VideoBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      {/* Background Video */}
      <video
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
      {/* Procedural SVG Noise Overlay Layer */}
      <div className="absolute inset-0 noise-overlay opacity-70 mix-blend-overlay pointer-events-none z-10" />
      {/* Linear Darkening Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none z-10" />
    </div>
  );
};

export default VideoBackground;
