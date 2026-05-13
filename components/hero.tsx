"use client";

import { ArrowRight, Play, Shield, Globe, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import BrandsLogoTicker from "./BrandsLogoTicker"; // adjust path if needed

const stats = [
  { value: "20+", label: "Subsidiaries", grad: "var(--grad-blue-violet)" },
  { value: "25+", label: "Pre-built Systems", grad: "var(--grad-violet-pink)" },
  { value: "2016", label: "Since", grad: "var(--grad-emerald-cyan)" },
  { value: "3987+", label: "Projects Delivered", grad: "var(--grad-orange-amber)" },
];

const trustBadges = [
  { icon: Shield, text: "Enterprise-grade Security", color: "#2563eb" },
  { icon: Globe, text: "Global Reach", color: "#8b5cf6" },
  { icon: Zap, text: "Lightning-fast Delivery", color: "#f97316" },
];

// 5 regular cards — 18+ Brands handled separately below
const featureCards = [
  {
    title: "Software Hub",
    desc: "11 pre-built systems ready to deploy",
    icon: "🗂️",
    iconImage: "/logo/amez_cloud.jpg",
    grad: "var(--grad-blue-violet)",
  },
  {
    title: "Amez University",
    desc: "World-class online & on-site education",
    icon: "🎓",
    iconImage: "/logo/amez_university.jpg",
    grad: "var(--grad-emerald-cyan)",
  },
  {
    title: "Amez Wallet",
    desc: "Secure fintech for your financial future",
    icon: "💳",
    iconImage: "/logo/amez_wallet.jpg",
    grad: "var(--grad-cyan-blue)",
  },
  {
    title: "Amez Club",
    desc: "Global startup & investor ecosystem",
    icon: "🌐",
    iconImage: "/logo/amez_club.jpg",
    grad: "var(--grad-violet-pink)",
  },
  {
    title: "Avoqs",
    desc: "Street Meets Luxury & Comfort",
    icon: "📈",
    iconImage: "/logo/avoqs.jpg",
    grad: "var(--grad-orange-amber)",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
      style={{ background: "var(--hero-bg)" }}
    >
      {/* Animated background orbs */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
      >
        <div
          className="absolute -top-24 -right-24 w-[700px] h-[700px] rounded-full opacity-[0.13] blur-3xl"
          style={{ background: "var(--grad-blue-violet)" }}
        />
        <div
          className="absolute top-1/2 -left-32 w-[400px] h-[400px] rounded-full opacity-[0.10] blur-3xl"
          style={{ background: "var(--grad-emerald-cyan)" }}
        />
        <div
          className="absolute bottom-0 right-1/3 w-[350px] h-[350px] rounded-full opacity-[0.08] blur-3xl"
          style={{ background: "var(--grad-pink-orange)" }}
        />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left Content ── */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={fadeUp}>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 text-white"
                style={{ background: "var(--grad-blue-violet)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
                Since 2016 — DigitalNexus Technologies
              </div>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight text-balance mb-6"
            >
              The Centralized Hub{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--brand-gradient)" }}
              >
                for All Services
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg text-gray-600 leading-relaxed mb-8 text-pretty max-w-xl"
            >
              Amez Cloud unifies software, digital marketing, e-commerce,
              networking, hosting, and dozens more services under one powerful
              platform. Everything your business needs, in one place.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-10">
              {trustBadges.map(({ icon: Icon, text, color }) => (
                <div key={text} className="flex items-center gap-1.5 text-sm text-gray-600 font-medium">
                  <Icon className="w-4 h-4" style={{ color }} />
                  {text}
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <motion.a
                href="#software"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm shadow-lg"
                style={{ background: "var(--brand-gradient)" }}
              >
                Explore Software
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#subsidiaries"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-violet-200 text-violet-700 font-semibold text-sm hover:border-violet-400 transition-colors bg-white/70"
              >
                <Play className="w-4 h-4" />
                Our Subsidiaries
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ── Right — Feature Card Grid ── */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* 5 regular cards */}
            {featureCards.map(({ title, desc, icon, iconImage, grad }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="rounded-2xl p-5 flex flex-col gap-2.5 cursor-default relative overflow-hidden backdrop-blur-sm border border-white/20 shadow-xl"
                style={{ background: grad }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/5 to-transparent rounded-2xl" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/10 to-transparent rounded-b-2xl" />

                <div className="relative z-10">
                  {iconImage ? (
                    <div className="relative w-9 h-9 rounded-lg overflow-hidden shadow-md">
                      <Image src={iconImage} alt={title} fill className="object-cover" />
                    </div>
                  ) : (
                    <span className="text-2xl drop-shadow-md">{icon}</span>
                  )}
                </div>

                <p className="text-sm font-bold text-white relative z-10 text-balance drop-shadow-md">{title}</p>
                <p className="text-xs text-white/90 leading-relaxed relative z-10 drop-shadow-sm">{desc}</p>
              </motion.div>
            ))}

            {/* ── 18+ Brands card — carousel, 1 logo at a time, every 10s ── */}
            <motion.div
              variants={fadeUp}
              custom={5}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-2xl p-5 flex flex-col gap-2.5 cursor-default relative overflow-hidden backdrop-blur-sm border border-white/20 shadow-xl"
              style={{ background: "var(--grad-fuchsia-violet)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/5 to-transparent rounded-2xl" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/10 to-transparent rounded-b-2xl" />

              {/* Carousel ticker */}
              <div className="relative z-10">
                <BrandsLogoTicker />
              </div>

              <p className="text-sm font-bold text-white relative z-10 drop-shadow-md">18+ Brands</p>
              <p className="text-xs text-white/90 leading-relaxed relative z-10 drop-shadow-sm">
                Subsidiaries across every industry
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          className="mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {stats.map(({ value, label, grad }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.04 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-2xl p-5 text-center relative overflow-hidden backdrop-blur-sm border border-white/20 shadow-xl"
              style={{ background: grad }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/5 to-transparent rounded-2xl" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/10 to-transparent rounded-b-2xl" />
              <p className="text-3xl font-bold text-white relative z-10 drop-shadow-lg">{value}</p>
              <p className="text-sm text-white/90 mt-1 font-medium relative z-10 drop-shadow-sm">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}