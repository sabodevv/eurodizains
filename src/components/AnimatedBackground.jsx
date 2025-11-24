import { motion } from "framer-motion";

export default function AnimatedBackground() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* BASE GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#eef1f4] via-[#e5e7eb] to-white" />

      {/* === SAME LOOK ON MOBILE AS DESKTOP (But optimized) === */}
      <>
        <motion.div
          className={`absolute top-0 -left-40 ${
            isMobile
              ? "w-72 h-72 blur-xl bg-blue-300/20"
              : "w-96 h-96 blur-3xl bg-blue-300/30"
          } rounded-full`}
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className={`absolute bottom-0 right-0 ${
            isMobile
              ? "w-72 h-72 blur-xl bg-green-300/15"
              : "w-96 h-96 blur-3xl bg-green-300/20"
          } rounded-full`}
          animate={{ x: [0, -50, 0], y: [0, -70, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className={`absolute top-1/2 left-1/2 ${
            isMobile
              ? "w-72 h-72 blur-xl bg-pink-300/15"
              : "w-96 h-96 blur-3xl bg-pink-300/20"
          } rounded-full`}
          animate={{ x: [0, -90, 0], y: [0, 70, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* GRID overlay — можно оставить, он лёгкий */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000,transparent)]" />
      </>
    </div>
  );
}
