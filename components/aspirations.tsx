"use client";

import { motion } from "framer-motion";
import { Eye, Rocket, Star, Quote, Sparkles } from "lucide-react";
import Image from "next/image";

/* ── Data ─────────────────────────────────────────────── */
const aspirations = [
  {
    icon: Eye,
    label: "Vision",
    color: "from-blue-500 to-cyan-400",
    lightBg: "from-blue-50 to-cyan-50",
    border: "border-blue-100",
    iconColor: "text-blue-600",
    accentBar: "from-blue-500 to-cyan-400",
    number: "01",
    text: "Aspire to be a Nationally Recognized, Premier Provider of Innovative Products and Services as a Catalyst for Personal and Global Economic Growth.",
  },
  {
    icon: Rocket,
    label: "Mission",
    color: "from-violet-500 to-purple-500",
    lightBg: "from-violet-50 to-purple-50",
    border: "border-violet-100",
    iconColor: "text-violet-600",
    accentBar: "from-violet-500 to-purple-500",
    number: "02",
    text: "Provide E-Commerce and Internet Services to Enhance the Business of our Customers and Giving World's most Advanced and Quality Products and Services with Poise, Strength and Authority. Whilst Providing Better Technologies that Benefit both the Customer and the Environment.",
  },
];

const reviews = [
  {
    stars: 5,
    text: " Incredible software solutions that have transformed our operations! The team's expertise streamlined our processes, boosting efficiency and productivity beyond measure. A game-changer for our business!",
    name: "Smith Morgan",
    location: "Toronto, Canada",
    avatar: "/testi/smith_testi.png",
    accentColor: "from-blue-500 to-cyan-400",
  },
  {
    stars: 5,
    text: "Revolutionized our business with top-notch software solutions. The custom tools they developed streamlined our workflow, saving time and costs. An investment we're grateful for!",
    name: "Ben Khatou Faycal",
    location: "Paris, France",
    avatar: "/testi/ben_testi.png",
    accentColor: "from-violet-500 to-purple-500",
  },
  {
    stars: 5,
    text: "Unmatched online marketing strategies! Our online presence skyrocketed, thanks to their innovative techniques. Witnessing a substantial increase in leads and conversions. Highly recommended!",
    name: "Natalie",
    location: "Melbourne, Australia",
    avatar: "/testi/natalie_testi.png",
    accentColor: "from-pink-500 to-rose-400",
  },
];

/* ── Animation variants ───────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};
const fadeRight = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

/* ── Stars ────────────────────────────────────────────── */
function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < count
              ? "fill-amber-400 text-amber-400"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

/* ── Section Badge ────────────────────────────────────── */
function SectionBadge({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <motion.span
      initial={{ scale: 0.85, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5 text-white shadow-lg"
      style={{ background: "linear-gradient(135deg, #2563eb, #8b5cf6)" }}
    >
      <Icon className="w-3.5 h-3.5" />
      {label}
    </motion.span>
  );
}

/* ── Main Component ───────────────────────────────────── */
export default function Aspirations() {
  return (
    <section className="py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">

        {/* ══ ASPIRATIONS HEADER ══ */}
        <motion.div
          className="text-center mb-14 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <SectionBadge icon={Sparkles} label="Who We Are" />
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Our{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                Aspirations
              </span>
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{ originX: 0 }}
              />
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Driving innovation, growth, and global impact through technology.
          </p>
        </motion.div>

        {/* ══ VISION + MISSION + IMAGE ══ */}
        <div className="relative rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
          {/* Background decoration */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-gradient-to-br from-blue-100/60 via-violet-100/30 to-transparent blur-3xl" />
            <div className="absolute top-1/2 -right-32 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-violet-100/40 to-transparent blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[350px] rounded-full bg-gradient-to-tr from-cyan-100/40 to-transparent blur-3xl" />
            <svg className="absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.5" fill="#6366f1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>

          <div className="relative z-10 p-6 sm:p-8 lg:p-10">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
              {/* Cards — left 3 cols */}
              <motion.div
                className="lg:col-span-3 flex flex-col gap-5"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {aspirations.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      variants={fadeLeft}
                      whileHover={{ y: -5, scale: 1.012 }}
                      transition={{ type: "spring", stiffness: 300, damping: 24 }}
                      className={`group relative bg-white rounded-3xl p-6 sm:p-8 border ${item.border} shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.lightBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
                      <div className={`absolute left-0 top-0 bottom-0 w-1.5 rounded-r-full bg-gradient-to-b ${item.accentBar} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                      <div className="relative z-10 flex items-start gap-5">
                        <div className="flex-shrink-0 flex flex-col items-center gap-2">
                          <span className="text-[10px] font-black tracking-widest text-gray-300">
                            {item.number}
                          </span>
                          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className={`font-extrabold text-xl mb-2 ${item.iconColor} tracking-tight`}>
                            {item.label}
                          </h3>
                          <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Image — right 2 cols */}
              <motion.div
                className="lg:col-span-2 flex items-center justify-center order-first lg:order-last"
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="relative w-full max-w-xs sm:max-w-sm mx-auto">
                  <div className="absolute inset-6 rounded-full bg-gradient-to-br from-blue-200 to-violet-200 blur-3xl opacity-60" />
                  <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-4 border border-gray-100 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 to-violet-50/60 rounded-3xl" />
                    <Image
                      src="/testi/goals_testi.png"
                      alt="Our Goals"
                      width={420}
                      height={380}
                      className="relative z-10 w-full h-auto drop-shadow-lg rounded-2xl"
                    />
                  </div>
                  <motion.div
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-4 -left-4 z-20 bg-white rounded-2xl px-3 py-2 shadow-xl border border-blue-100 flex items-center gap-2"
                  >
                    <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                      <Eye className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-xs font-bold text-gray-700">Vision</span>
                  </motion.div>
                  <motion.div
                    animate={{ y: [5, -5, 5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                    className="absolute -bottom-4 -right-4 z-20 bg-white rounded-2xl px-3 py-2 shadow-xl border border-violet-100 flex items-center gap-2"
                  >
                    <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
                      <Rocket className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-xs font-bold text-gray-700">Mission</span>
                  </motion.div>
                  <div className="absolute top-6 -right-2 w-3 h-3 rounded-full bg-cyan-400 shadow-md opacity-80" />
                  <div className="absolute bottom-10 -left-2 w-2.5 h-2.5 rounded-full bg-violet-400 shadow-md opacity-80" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ══ REVIEWS ══ */}
        <div className="relative rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
          <div className="relative z-10 p-6 sm:p-8 lg:p-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
                <div>
                  <SectionBadge icon={Star} label="Testimonials" />
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
                    Trusted by{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                      50,000+
                    </span>{" "}
                    Clients
                    <br className="hidden sm:block" />
                    Around The World.
                  </h2>
                </div>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.2 }}
                  className="flex-shrink-0 bg-white rounded-2xl px-6 py-5 shadow-lg border border-gray-100 text-center min-w-[160px]"
                >
                  <div className="flex items-center justify-center gap-0.5 mb-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < 5
                            ? "fill-amber-400 text-amber-400"
                            : "fill-amber-200 text-amber-200"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-2xl font-extrabold text-gray-900">4.7</p>
                  <p className="text-[11px] text-gray-400 font-medium">out of 5 based on</p>
                  <p className="text-sm font-bold text-blue-600 mt-0.5">286 reviews</p>
                </motion.div>
              </div>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {reviews.map((review, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeUp}
                    whileHover={{ y: -8, scale: 1.015 }}
                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                    className="group relative bg-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden"
                  >
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${review.accentColor} rounded-t-3xl`} />
                    <div className={`absolute inset-0 bg-gradient-to-br ${review.accentColor} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 rounded-3xl`} />
                    <div className="relative z-10 mb-5">
                      <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${review.accentColor} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                        <Quote className="w-4 h-4 text-white fill-white" />
                      </div>
                    </div>
                    <div className="relative z-10 mb-4">
                      <Stars count={review.stars} />
                    </div>
                    <p className="relative z-10 text-gray-500 text-sm leading-relaxed flex-1 mb-6 italic">
                      "{review.text}"
                    </p>
                    <div className="relative z-10 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-5" />
                    <div className="relative z-10 flex items-center gap-3">
                      <div className="relative flex-shrink-0">
                        <Image
                          src={review.avatar}
                          alt={review.name}
                          width={44}
                          height={44}
                          className="w-11 h-11 rounded-full object-cover ring-2 ring-white shadow-md"
                        />
                        <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-white" />
                      </div>
                      <div>
                        <p className={`text-sm font-extrabold bg-gradient-to-r ${review.accentColor} bg-clip-text text-transparent`}>
                          {review.name}
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5">{review.location}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}