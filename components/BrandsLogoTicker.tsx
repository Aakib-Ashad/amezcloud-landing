"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const brandLogos = [
  { name: "Amez Cards",        src: "/logo/amez_cards.jpg" },
  { name: "Amez Cloud",        src: "/logo/amez_cloud.jpg" },
  { name: "Amez Club",         src: "/logo/amez_club.jpg" },
  { name: "Amez Express",      src: "/logo/amez_express.jpg" },
  { name: "Amez Freelance",    src: "/logo/amez_freelance.jpg" },
  { name: "Amez Furns",        src: "/logo/amez_furns.jpg" },
  { name: "Amez Health",       src: "/logo/amez_health.jpg" },
  { name: "Amez Hub",          src: "/logo/amez_hub.jpg" },
  { name: "Amez Line",         src: "/logo/amez_line.jpg" },
  { name: "Amez Organic",      src: "/logo/amez_organic.jpg" },
  { name: "Amez Prime",        src: "/logo/amez_prime.jpg" },
  { name: "Amez Tower",        src: "/logo/amez_tower.svg" },
  { name: "Amez University",   src: "/logo/amez_university.jpg" },
  { name: "Amez Visuals",      src: "/logo/amez-visuals.jpg" },
  { name: "Amez Wallet",       src: "/logo/amez_wallet.jpg" },
  { name: "Firebowl",          src: "/logo/firebowl.jpg" },
  { name: "AVOQS",             src: "/logo/avoqs.jpg" },
  { name: "Hi-tech Marketing", src: "/logo/height_tech_marketing.jpg" },
];

const INTERVAL = 1000; // 10 seconds per logo

export default function BrandsLogoTicker() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % brandLogos.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 40 : -40,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -40 : 40,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <div className="flex items-center gap-3">
      {/* Single logo carousel */}
      <div className="relative w-9 h-9 shrink-0">
        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 rounded-lg overflow-hidden shadow-md border border-white/20"
            title={brandLogos[current].name}
          >
            <Image
              src={brandLogos[current].src}
              alt={brandLogos[current].name}
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Brand name sliding in alongside the logo */}
      <div className="overflow-hidden flex-1 min-w-0">
        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.p
            key={current}
            custom={direction}
            variants={{
              enter: (dir: number) => ({ x: dir > 0 ? 20 : -20, opacity: 0 }),
              center: { x: 0, opacity: 1 },
              exit: (dir: number) => ({ x: dir > 0 ? -20 : 20, opacity: 0 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="text-[10px] font-semibold text-white/80 truncate"
          >
            {brandLogos[current].name}
          </motion.p>
        </AnimatePresence>

        {/* Progress dots */}
        <div className="flex gap-1 mt-1 flex-wrap">
          {brandLogos.map((_, i) => (
            <div
              key={i}
              className={`h-0.5 rounded-full transition-all duration-500 ${
                i === current
                  ? "w-3 bg-white"
                  : "w-1 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}