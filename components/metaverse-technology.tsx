"use client";

import { motion } from "framer-motion";
import {
  Headphones,
  Layers,
  Building2,
  Users,
  Sparkles,
  Shield,
  Palette,
  Gamepad2,
  ShoppingBag,
  GraduationCap,
  Home,
  Briefcase,
} from "lucide-react";
import Image from "next/image";

const categories = [
  {
    title: "VR & AR Development",
    icon: Headphones,
    description:
      "Full-service VR and AR application development for training, entertainment, retail, and enterprise solutions.",
    image: "/images/vr-headset.jpg",
    grad: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
    examples: [
      "VR Training Simulations",
      "AR Product Visualization",
      "Virtual Showrooms",
      "Immersive Brand Experiences",
    ],
  },
  {
    title: "Virtual World Creation",
    icon: Building2,
    description:
      "Design and build immersive 3D virtual worlds, social spaces, and metaverse platforms from the ground up.",
    image: "/images/virtual-world.jpg",
    grad: "linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)",
    examples: [
      "Social VR Platforms",
      "Virtual Event Spaces",
      "3D Game Environments",
      "Digital Twin Cities",
    ],
  },
  {
    title: "NFT & Digital Assets",
    icon: Layers,
    description:
      "Create, mint, and manage NFT collections, digital art, in-game assets, and blockchain-based collectibles.",
    image: "/images/nft-art.jpg",
    grad: "linear-gradient(135deg, #d946ef 0%, #ec4899 100%)",
    examples: [
      "NFT Marketplace Development",
      "Digital Art Collections",
      "In-Game Asset Creation",
      "Collectible Card Systems",
    ],
  },
  {
    title: "Avatar & Character Design",
    icon: Users,
    description:
      "Custom 3D avatar creation, character modeling, and identity systems for metaverse platforms and games.",
    image: "/images/avatar-world.jpg",
    grad: "linear-gradient(135deg, #ec4899 0%, #f97316 100%)",
    examples: [
      "Photorealistic Avatars",
      "Cartoon Character Design",
      "Customization Systems",
      "Motion Capture Integration",
    ],
  },
  {
    title: "Web3 Integration",
    icon: Sparkles,
    description:
      "Integrate blockchain, smart contracts, crypto wallets, and decentralized technologies into your products.",
    image: "/images/blockchain.jpg",
    grad: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
    examples: [
      "Wallet Integration",
      "Smart Contract Development",
      "DeFi Protocol Integration",
      "DAO Governance Systems",
    ],
  },
  {
    title: "XR Enterprise Solutions",
    icon: Shield,
    description:
      "Enterprise-grade extended reality solutions for training, collaboration, data visualization, and remote work.",
    image: "/images/ar-experience.jpg",
    grad: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
    examples: [
      "Remote Collaboration Tools",
      "Data Visualization Platforms",
      "Industrial Training Systems",
      "Virtual Meeting Rooms",
    ],
  },
];

const useCases = [
  { icon: ShoppingBag, label: "E-Commerce & Retail", grad: "var(--grad-blue-violet)" },
  { icon: GraduationCap, label: "Education & Training", grad: "var(--grad-emerald-cyan)" },
  { icon: Gamepad2, label: "Gaming & Entertainment", grad: "var(--grad-violet-pink)" },
  { icon: Home, label: "Real Estate & Architecture", grad: "var(--grad-cyan-blue)" },
  { icon: Briefcase, label: "Corporate & Enterprise", grad: "var(--grad-orange-amber)" },
  { icon: Palette, label: "Art & Culture", grad: "var(--grad-fuchsia-violet)" },
];

const projectExamples = [
  {
    title: "Virtual Shopping Mall",
    type: "E-Commerce VR",
    description: "Full 3D shopping experience with AI product recommendations",
    tech: ["Unity", "WebXR", "Blockchain"],
  },
  {
    title: "Medical Training VR",
    type: "Healthcare Education",
    description: "Realistic surgical simulation for medical students",
    tech: ["Unreal Engine", "Haptic Feedback", "AI"],
  },
  {
    title: "NFT Art Gallery",
    type: "Digital Art Platform",
    description: "Curated metaverse gallery with live auction system",
    tech: ["Three.js", "Smart Contracts", "IPFS"],
  },
  {
    title: "Virtual Concert Hall",
    type: "Entertainment Venue",
    description: "Live music performances in immersive 3D environment",
    tech: ["Spatial Audio", "Motion Capture", "Live Streaming"],
  },
  {
    title: "Real Estate Walkthrough",
    type: "Property Visualization",
    description: "Interactive VR tours for luxury properties worldwide",
    tech: ["Matterport", "WebVR", "360° Video"],
  },
  {
    title: "Corporate Metaverse HQ",
    type: "Remote Collaboration",
    description: "Virtual office space with meeting rooms and co-working areas",
    tech: ["Meta Horizon", "Spatial.io", "Custom Backend"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function MetaverseTechnology() {
  return (
    <section
      id="metaverse-tech"
      className="py-24"
      style={{
        background:
          "linear-gradient(180deg, #f0f4ff 0%, #fdf4ff 50%, #fff7ed 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-5 py-2 rounded-full text-sm font-bold mb-5 text-white"
            style={{ background: "var(--grad-blue-violet)" }}
          >
            🚀 Metaverse Technology Solutions
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5 text-balance">
            Build{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--grad-violet-pink)" }}
            >
              Any Kind
            </span>{" "}
            of Meta VR Project
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed text-pretty">
            From virtual reality experiences to NFT marketplaces, AR applications
            to full metaverse platforms — Amez Cloud delivers cutting-edge
            solutions for every immersive technology need.
          </p>
        </motion.div>

        {/* Categories Grid with Images */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {categories.map(({ title, icon: Icon, description, image, grad, examples }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260 }}
              className="group rounded-2xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-shadow border border-gray-100"
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: `${grad}`, opacity: 0.75 }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-16 h-16 bg-white/35 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl border border-white/30"
                  >
                    <Icon className="w-8 h-8 text-white drop-shadow-lg" />
                  </motion.div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {description}
                </p>

                {/* Examples */}
                <div className="space-y-1.5">
                  {examples.map((example, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-gray-500"
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: grad }}
                      />
                      <span>{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Use Cases */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
            Industries We Serve
          </h3>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {useCases.map(({ icon: Icon, label, grad }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                whileHover={{ y: -4, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 280 }}
                className="rounded-xl p-5 text-center cursor-default backdrop-blur-sm border border-white/20 shadow-lg relative overflow-hidden"
                style={{ background: grad }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                <div className="w-12 h-12 bg-white/30 backdrop-blur-md rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg border border-white/30 relative z-10">
                  <Icon className="w-6 h-6 text-white drop-shadow-md" />
                </div>
                <p className="text-xs font-bold text-white leading-tight drop-shadow-md relative z-10">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Project Examples */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-3">
            Example Projects We Can Build
          </h3>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10 text-sm">
            These are just a few examples. We can build any metaverse, VR, AR, or
            Web3 project you envision.
          </p>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {projectExamples.map((project, idx) => (
              <motion.div
                key={project.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260 }}
                className="rounded-xl bg-white p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-bold text-gray-900 text-base mb-1">
                      {project.title}
                    </h4>
                    <p
                      className="text-xs font-semibold"
                      style={{
                        background: [
                          "var(--grad-blue-violet)",
                          "var(--grad-emerald-cyan)",
                          "var(--grad-violet-pink)",
                          "var(--grad-cyan-blue)",
                          "var(--grad-orange-amber)",
                          "var(--grad-fuchsia-violet)",
                        ][idx % 6],
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {project.type}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-3xl p-10 md:p-14 text-center text-white overflow-hidden relative"
          style={{
            background:
              "linear-gradient(135deg, #2563eb 0%, #8b5cf6 33%, #d946ef 66%, #ec4899 100%)",
          }}
        >
          <motion.div
            className="absolute inset-0 bg-white/10 pointer-events-none"
            animate={{ x: ["100%", "-100%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
            style={{ skewX: -20, width: "40%" }}
          />
          <div className="relative z-10">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
              Ready to Build Your Metaverse Vision?
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto mb-8 text-base leading-relaxed">
              Whether you need a simple AR filter or a full-scale metaverse
              platform, our team of VR/AR developers, 3D artists, and blockchain
              engineers can bring any idea to life. Let&apos;s discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white font-bold text-base rounded-xl transition-colors shadow-lg"
                style={{ color: "#7c3aed" }}
              >
                Start Your Project
              </motion.a>
              <motion.a
                href="#software"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white/50 text-white font-bold text-base rounded-xl transition-colors"
              >
                View Our Tech Stack
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
