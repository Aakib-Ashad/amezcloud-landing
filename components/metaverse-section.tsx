"use client";

import { Cpu, Globe2, Shield, Layers, Wand2, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const metaverseServices = [
  {
    icon: Globe2,
    title: "Virtual World Development",
    description:
      "Build immersive virtual environments and 3D worlds for business, education, and entertainment using cutting-edge metaverse technology.",
    grad: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
  },
  {
    icon: Building2,
    title: "Digital Real Estate",
    description:
      "Acquire, develop, and monetize virtual land and digital properties within leading metaverse platforms and blockchain ecosystems.",
    grad: "linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)",
  },
  {
    icon: Layers,
    title: "NFT & Digital Assets",
    description:
      "Create, mint, and trade NFTs and digital collectibles. Our team handles everything from smart contracts to marketplace listings.",
    grad: "linear-gradient(135deg, #6366f1 0%, #2563eb 100%)",
  },
  {
    icon: Cpu,
    title: "Web3 Integration",
    description:
      "Integrate blockchain, DeFi, and decentralized protocols into your products and services for a truly Web3-native experience.",
    grad: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
  },
  {
    icon: Wand2,
    title: "AR / VR Experiences",
    description:
      "Develop augmented and virtual reality experiences for training, retail, real estate walkthroughs, and interactive marketing campaigns.",
    grad: "linear-gradient(135deg, #d946ef 0%, #ec4899 100%)",
  },
  {
    icon: Shield,
    title: "Blockchain Security",
    description:
      "Secure your digital assets and transactions with enterprise-grade blockchain security, smart contract audits, and decentralized identity.",
    grad: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
  },
];

const stats = [
  { value: "Web3", label: "Native Solutions", grad: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)" },
  { value: "AR/VR", label: "Immersive Tech", grad: "linear-gradient(135deg, #d946ef 0%, #ec4899 100%)" },
  { value: "NFT", label: "Digital Assets", grad: "linear-gradient(135deg, #6366f1 0%, #2563eb 100%)" },
  { value: "DeFi", label: "Finance Ready", grad: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function MetaverseSection() {
  return (
    <section
      id="metaverse"
      className="py-20"
      style={{ background: "linear-gradient(180deg, #fdf4ff 0%, #f0f4ff 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-14">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              variants={fadeUp}
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-4 text-white"
              style={{ background: "var(--grad-fuchsia-violet)" }}
            >
              Metaverse &amp; Web3
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-balance"
            >
              Step Into the{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--grad-blue-violet)" }}
              >
                Digital Future
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-gray-600 text-base leading-relaxed text-pretty"
            >
              Amez Cloud is pioneering the next wave of digital transformation
              through metaverse technologies, Web3 integrations, AR/VR
              experiences, and blockchain-powered solutions. The future of the
              internet is here — and we are building it.
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {stats.map(({ value, label, grad }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                whileHover={{ scale: 1.06, y: -3 }}
                transition={{ type: "spring", stiffness: 280 }}
                className="rounded-2xl p-5 text-center cursor-default relative overflow-hidden backdrop-blur-sm border border-white/20 shadow-xl"
                style={{ background: grad }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                <p className="text-2xl font-bold text-white relative z-10 drop-shadow-lg">{value}</p>
                <p className="text-sm text-white/90 mt-1 font-medium relative z-10 drop-shadow-sm">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Service Cards */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {metaverseServices.map(({ icon: Icon, title, description, grad }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260 }}
              className="group rounded-2xl overflow-hidden relative backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl"
              style={{ background: grad }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/15 to-transparent" />
              <div className="relative z-10 p-6">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-11 h-11 bg-white/30 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 shadow-lg border border-white/30"
                >
                  <Icon className="w-5 h-5 text-white drop-shadow-md" />
                </motion.div>
                <h3 className="font-bold text-white text-sm mb-2 drop-shadow-md">{title}</h3>
                <p className="text-xs text-white/85 leading-relaxed drop-shadow-sm">{description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-12 rounded-2xl p-8 md:p-10 text-center text-white overflow-hidden relative"
          style={{ background: "linear-gradient(135deg, #2563eb 0%, #8b5cf6 50%, #d946ef 100%)" }}
        >
          <motion.div
            className="absolute inset-0 bg-white/5 pointer-events-none"
            animate={{ x: ["100%", "-100%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
            style={{ skewX: -20, width: "40%" }}
          />
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-balance relative z-10">
            Ready to Enter the Metaverse?
          </h3>
          <p className="text-white/80 max-w-xl mx-auto mb-6 text-sm leading-relaxed relative z-10">
            Let our Web3 and immersive technology experts guide you through
            building your presence in the next generation of the digital economy.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white font-bold text-sm rounded-xl transition-colors relative z-10"
            style={{ color: "#7c3aed" }}
          >
            Talk to an Expert
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
