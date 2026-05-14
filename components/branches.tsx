"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Building2, Globe, AlertCircle, Star, ExternalLink } from "lucide-react";
import Image from "next/image";

const branches = [
  {
    city: "Amez Cloud L.L.C",
    subCity: "New York, USA",
    address: "169 Madison Ave STE 2617\nNew York, NY 10016",
    status: "active",
    gradient: "linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)",
    iconBg: "from-blue-500 to-blue-600",
    image: "/newyork.svg",
    mapLink: "https://maps.google.com/?q=169+Madison+Ave+STE+2617+New+York+NY+10016",
    isMainOffice: false,
    hoverColor: "from-blue-500/40 to-blue-600/40",
    borderHover: "group-hover:border-blue-500",
    glowIntensity: "group-hover:shadow-blue-500/30",
  },
  {
    city: "Amez Cloud",
    subCity: "Kandy, Sri Lanka",
    address: "Jaffna Main Road\nKandy, 20000",
    status: "active",
    gradient: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
    iconBg: "from-emerald-500 to-emerald-600",
    image: "/kandy.svg",
    mapLink: "https://maps.google.com/?q=Jaffna+Main+Road+Kandy+20000+Sri+Lanka",
    isMainOffice: true,
    hoverColor: "from-emerald-500/40 to-emerald-600/40",
    borderHover: "group-hover:border-emerald-500",
    glowIntensity: "group-hover:shadow-emerald-500/30",
  },
  {
    city: "Amez Tower",
    subCity: "Katugasthota, Sri Lanka",
    address: "Katugasthota\nSri Lanka",
    status: "coming-soon",
    gradient: "linear-gradient(135deg, #d97706 0%, #f59e0b 100%)",
    iconBg: "from-amber-500 to-amber-600",
    image: "/dubai.svg",
    mapLink: "https://maps.google.com/?q=Katugasthota+Sri+Lanka",
    isMainOffice: false,
    hoverColor: "from-amber-500/40 to-amber-600/40",
    borderHover: "group-hover:border-amber-500",
    glowIntensity: "group-hover:shadow-amber-500/30",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Branches() {
  const handleRedirect = () => {
    window.open("https://amezcloud.com/", "_blank");
  };

  return (
    <section id="branches" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
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
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold mb-5 text-white"
            style={{ background: "linear-gradient(135deg, #2563eb, #8b5cf6)" }}
          >
            <Building2 className="w-4 h-4" />
            Our Global Presence
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6" />
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-16 max-w-7xl mx-auto"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Email */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6, scale: 1.02 }}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 text-center"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-3">Email Us</h3>
            <div className="space-y-2">
              <a href="mailto:info@amezcloud.com" className="block text-sm text-blue-600 hover:text-blue-700 font-medium">
                info@amezcloud.com
              </a>
              <a href="mailto:support@amezcloud.com" className="block text-sm text-gray-600 hover:text-blue-600">
                support@amezcloud.com
              </a>
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6, scale: 1.02 }}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 text-center"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-3">Call Us</h3>
            <a href="tel:+94777599590" className="text-xl font-semibold text-gray-800 hover:text-green-600 transition-colors">
              +94 (77) 759 9590
            </a>
            <p className="text-xs text-gray-400 mt-2">Mon-Fri, 9AM - 6PM</p>
          </motion.div>

          {/* Support Hours */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6, scale: 1.02 }}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 text-center"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
              <Clock className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-3">Support Hours</h3>
            <p className="text-sm text-gray-600">
              <span className="font-medium">24/7 Emergency Support</span>
              <br />
              Response within 24 hours
            </p>
          </motion.div>
        </motion.div>

        {/* Branches Grid */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Offices</span>
          </h3>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {branches.map((branch, idx) => (
              <motion.div
                key={branch.city}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260 }}
                className="relative group cursor-pointer"
                onClick={() => branch.status === "active" && window.open(branch.mapLink, "_blank")}
              >
                {/* Hover gradient effect with increased intensity */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${branch.hoverColor} rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500`}
                />

                <div className={`relative bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 overflow-hidden transition-all duration-300 group-hover:shadow-2xl ${branch.borderHover} ${branch.glowIntensity}`}>
                  {/* Badges Container */}
                  <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 items-end">
                    {branch.status === "coming-soon" && (
                      <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full shadow-sm">
                        Coming Soon
                      </span>
                    )}
                    {branch.isMainOffice && (
                      <span className="px-2 py-1 bg-gradient-to-r from-amber-400 to-amber-500 text-white text-xs font-semibold rounded-full flex items-center gap-1 shadow-md">
                        <Star className="w-3 h-3 fill-current" />
                        Main Office
                      </span>
                    )}
                  </div>

                  {/* SVG Image with brand-specific glow on hover */}
                  <div className="flex justify-center mb-5">
                    <div className="relative w-36 h-36 transition-all duration-300 group-hover:scale-110">
                      <Image
                        src={branch.image}
                        alt={`${branch.city} office`}
                        fill
                        className="object-contain transition-opacity duration-300"
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <h4 className={`font-bold text-gray-900 text-lg mb-1 transition-all duration-300 ${branch.city === "Amez Cloud L.L.C" ? "group-hover:text-blue-600 group-hover:scale-105" :
                      branch.city === "Amez Cloud" ? "group-hover:text-emerald-600 group-hover:scale-105" :
                        "group-hover:text-amber-600 group-hover:scale-105"
                      }`}>
                      {branch.city}
                    </h4>
                    <p className={`text-sm font-semibold mb-2 transition-all duration-300 ${branch.city === "Amez Cloud L.L.C" ? "text-blue-600 group-hover:text-blue-700" :
                      branch.city === "Amez Cloud" ? "text-emerald-600 group-hover:text-emerald-700" :
                        "text-amber-600 group-hover:text-amber-700"
                      }`}>
                      {branch.subCity}
                    </p>
                    <p className="text-sm text-gray-500 whitespace-pre-line leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {branch.address}
                    </p>
                    {branch.status === "active" ? (
                      <div className="mt-3 inline-flex items-center gap-1 text-xs text-blue-500 group-hover:text-blue-600 transition-colors">
                        {/* <MapPin className="w-3 h-3" />
                        <span>View on Map</span> */}
                      </div>
                    ) : (
                      <div className="mt-3 inline-flex items-center gap-1 text-xs text-amber-600">
                        {/* <Clock className="w-3 h-3" />
                        <span>Opening Soon</span> */}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Map Banner with Button - Reduced Height */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden relative mb-6"
        >
          <div
            className="absolute inset-0"
            style={{
              background: "url('/bground.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.7)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, rgba(37,99,235,0.85) 0%, rgba(139,92,246,0.85) 50%, rgba(217,70,239,0.85) 100%)",
            }}
          />
          <div className="relative z-10 p-6 md:p-10 text-center text-white">
            <Globe className="w-10 h-10 mx-auto mb-3 opacity-80" />
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              Global Reach, Local Expertise
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-6">
              With offices in USA, Sri Lanka, we serve clients worldwide
              with cutting-edge technology solutions.
            </p>

            {/* Go to Old Website Button - Inside Banner */}
            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleRedirect}
                className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                  border: "1px solid rgba(59, 130, 246, 0.2)"
                }}
              >
                {/* Animated gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="absolute inset-[2px] bg-white rounded-2xl group-hover:bg-gradient-to-r group-hover:from-blue-50 group-hover:to-purple-50 transition-all duration-300" />

                {/* Rotating icon background */}
                <div className="relative z-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                  <div className="relative w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <ExternalLink className="w-4 h-4 text-white group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                </div>

                {/* Text content */}
                <div className="relative z-10 text-left">
                  <p className="text-[10px] text-gray-400 font-medium tracking-wide uppercase">
                    Explore Our Legacy
                  </p>
                  <p className="text-base font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    Old Website
                  </p>
                </div>

                {/* Arrow animation */}
                <div className="relative z-10 ml-1">
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </motion.div>
                </div>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Venturing Text - Alternative Elegant Design - Reduced Height */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-3xl overflow-hidden relative"
        >
          <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 py-6 md:py-8 px-4 md:px-10 text-center">
            {/* Decorative dots pattern */}
            <div className="flex justify-center gap-1 mb-3">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                />
              ))}
            </div>

            <p className="text-lg md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Venturing into the world of financial technology
            </p>
          </div>
        </motion.div>


      </div>
    </section>
  );
}