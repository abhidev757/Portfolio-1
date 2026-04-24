"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  progress: MotionValue<number>;
}

export default function Overlay({ progress }: OverlayProps) {
  // Section 1: 0% to 15%
  const opacity1 = useTransform(progress, [0, 0.1, 0.15, 1], [1, 1, 0, 0]);
  const y1 = useTransform(progress, [0, 0.15, 1], [0, -100, -100]);

  // Section 2: 25% to 55%
  const opacity2 = useTransform(progress, [0, 0.2, 0.3, 0.45, 0.55, 1], [0, 0, 1, 1, 0, 0]);
  const y2 = useTransform(progress, [0, 0.2, 0.55, 1], [100, 100, -100, -100]);

  // Section 3: 60% to 90%
  const opacity3 = useTransform(progress, [0, 0.55, 0.65, 0.8, 0.9, 1], [0, 0, 1, 1, 0, 0]);
  const y3 = useTransform(progress, [0, 0.55, 0.9, 1], [100, 100, -100, -100]);

  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center p-8 z-10">
      
      {/* SECTION 1 - Center */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4 drop-shadow-2xl">
          ABHISHEK S
        </h1>
        <p className="text-xl md:text-2xl text-white/80 font-light tracking-wide drop-shadow-lg">
          MERN Stack Developer | Full Stack Engineer
        </p>
      </motion.div>

      {/* SECTION 2 - Left */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col items-start justify-center max-w-7xl mx-auto px-6 md:px-12 w-full"
      >
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4 drop-shadow-xl max-w-2xl">
          I build scalable web apps.
        </h2>
        <div className="h-1 w-24 bg-white/50 mb-6" />
        <p className="text-lg md:text-xl text-white/70 font-light max-w-md drop-shadow-md">
          Transitioned from Electrical Engineering to software development, architecting complex platforms with real-time capabilities.
        </p>
      </motion.div>

      {/* SECTION 3 - Right */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col items-end justify-center max-w-7xl mx-auto px-6 md:px-12 w-full text-right"
      >
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4 drop-shadow-xl max-w-2xl">
          Mastering modern tech.
        </h2>
        <div className="h-1 w-24 bg-white/50 mb-6 ml-auto" />
        <p className="text-lg md:text-xl text-white/70 font-light max-w-md drop-shadow-md">
          Expertise in React, Node.js, WebRTC video conferencing, and Socket.io real-time communication.
        </p>
      </motion.div>

    </div>
  );
}
