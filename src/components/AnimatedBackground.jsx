import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* BASE GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e8edf5] via-[#dde3ec] to-[#f7f8fa]" />

      {/* BIG BLUR LAYER (same look on desktop & mobile) */}
      <div
        className="
          absolute inset-0 
          bg-[radial-gradient(circle_at_30%_20%,rgba(99,179,237,0.25),transparent_60%), 
              radial-gradient(circle_at_80%_70%,rgba(56,189,248,0.25),transparent_60%), 
              radial-gradient(circle_at_50%_50%,rgba(147,197,253,0.2),transparent_60%)]
          blur-3xl
        "
      />

      {/* LIGHT GRID OVERLAY */}
      <div
        className="
        absolute inset-0 
        bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px), 
            linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
        bg-[size:120px_120px]
        opacity-[0.35]
      "
      />
    </div>
  );
}
