"use client";

import { Rocket, HeartHandshake, Code2, TrendingUp, Clock, Star } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: Code2,
    title: "Latest Technology Stack",
    description:
      "We build with the most current, battle-tested technologies to ensure your software is fast, secure, and future-proof.",
    grad: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
  },
  {
    icon: Rocket,
    title: "Rapid Deployment",
    description:
      "Our pre-built systems drastically reduce time-to-market. Go live in days, not months, with our proven software catalog.",
    grad: "linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support",
    description:
      "Every client gets a dedicated success team. We are partners in your growth, not just service providers.",
    grad: "linear-gradient(135deg, #ec4899 0%, #f97316 100%)",
  },
  {
    icon: TrendingUp,
    title: "Scalable Architecture",
    description:
      "From startup to enterprise, our solutions scale with your business. No re-platforming as you grow.",
    grad: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
  },
  {
    icon: Clock,
    title: "8+ Years of Experience",
    description:
      "Founded in 2016, Amez Cloud brings nearly a decade of domain expertise across technology, finance, education, and more.",
    grad: "linear-gradient(135deg, #f59e0b 0%, #f97316 100%)",
  },
  {
    icon: Star,
    title: "One-Stop Ecosystem",
    description:
      "From software to marketing, finance to fashion — access the entire Amez ecosystem under one unified umbrella.",
    grad: "linear-gradient(135deg, #06b6d4 0%, #6366f1 100%)",
  },
];

const services = [
  { label: "Software Development", grad: "linear-gradient(135deg, #3b82f6, #8b5cf6)" },
  { label: "Digital Marketing", grad: "linear-gradient(135deg, #8b5cf6, #d946ef)" },
  { label: "E-Commerce", grad: "linear-gradient(135deg, #f97316, #ef4444)" },
  { label: "Networking", grad: "linear-gradient(135deg, #06b6d4, #3b82f6)" },
  { label: "Hosting & Cloud", grad: "linear-gradient(135deg, #10b981, #06b6d4)" },
  { label: "Photography", grad: "linear-gradient(135deg, #ec4899, #f43f5e)" },
  { label: "Graphic Design", grad: "linear-gradient(135deg, #d946ef, #8b5cf6)" },
  { label: "Real Estate", grad: "linear-gradient(135deg, #f59e0b, #f97316)" },
  { label: "Construction", grad: "linear-gradient(135deg, #84cc16, #10b981)" },
  { label: "E-Trading", grad: "linear-gradient(135deg, #6366f1, #2563eb)" },
  { label: "Education", grad: "linear-gradient(135deg, #10b981, #06b6d4)" },
  { label: "Fintech", grad: "linear-gradient(135deg, #0ea5e9, #6366f1)" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.07 },
  }),
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, delay: i * 0.05, ease: "easeOut" },
  }),
};

export default function WhyAmez() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-4 text-white"
            style={{ background: "var(--grad-emerald-cyan)" }}
          >
            Why Amez Cloud
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-balance">
            Built for the{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--brand-gradient)" }}
            >
              Modern Enterprise
            </span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed text-pretty">
            We are not just a software company. We are a full-spectrum digital
            partner committed to accelerating your business at every stage.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {reasons.map(({ icon: Icon, title, description, grad }, i) => (
            <motion.div
              key={title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260 }}
              className="rounded-2xl overflow-hidden relative cursor-default backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl"
              style={{ background: grad }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/15 to-transparent" />
              <div className="relative z-10 p-5">
                <motion.div
                  whileHover={{ rotate: -8, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 280 }}
                  className="w-10 h-10 bg-white/30 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 shadow-lg border border-white/30"
                >
                  <Icon className="w-5 h-5 text-white drop-shadow-md" />
                </motion.div>
                <h3 className="font-bold text-white text-sm mb-1.5 drop-shadow-md">{title}</h3>
                <p className="text-xs text-white/85 leading-relaxed drop-shadow-sm">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Services Tags */}
        <motion.div
          className="rounded-2xl p-6 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #f8faff 0%, #fdf4ff 100%)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center mb-5">
            Our Service Areas
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {services.map(({ label, grad }, i) => (
              <motion.span
                key={label}
                custom={i}
                variants={tagVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-1.5 rounded-full text-xs font-bold cursor-default text-white backdrop-blur-sm border border-white/20 shadow-md relative overflow-hidden"
                style={{ background: grad }}
              >
                <span className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
                <span className="relative z-10 drop-shadow-sm">{label}</span>
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
