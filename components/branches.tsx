"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Building2, Globe, AlertCircle } from "lucide-react";
import Image from "next/image";

const branches = [
  {
    city: "New York, USA",
    address: "169 Madison Ave STE 2617\nNew York, NY 10016",
    status: "active",
    gradient: "linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)",
    iconBg: "from-blue-500 to-blue-600",
    image: "/newyork.svg",
    mapLink: "https://maps.google.com/?q=169+Madison+Ave+STE+2617+New+York+NY+10016",
  },
  {
    city: "Kandy, Sri Lanka",
    address: "Jaffna Main Road\nKandy, 20000",
    status: "active",
    gradient: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
    iconBg: "from-emerald-500 to-emerald-600",
    image: "/kandy.svg",
    mapLink: "https://maps.google.com/?q=Jaffna+Main+Road+Kandy+20000+Sri+Lanka",
  },
  {
    city: "Dubai, UAE",
    address: "Dubai World Trade Centre\nAbout to Open...",
    status: "coming-soon",
    gradient: "linear-gradient(135deg, #d97706 0%, #f59e0b 100%)",
    iconBg: "from-amber-500 to-amber-600",
    image: "/dubai.svg",
    mapLink: "https://maps.google.com/?q=Dubai+World+Trade+Centre+Dubai+UAE",
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

        {/* Alert Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="max-w-4xl mx-auto mb-12"
        >
          {/* <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-5 flex gap-4 shadow-sm">
            <AlertCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-amber-800 leading-relaxed">
                <span className="font-semibold">📞 High Volume Alert:</span> Currently, we are experiencing a high volume of calls and message requests, which may cause a delay in our response time.
                <br />
                <span className="text-amber-700 text-sm block mt-2">
                  ⏰ Please be assured that we value your inquiry, and we commit to reaching out to you within 24 hours upon receiving your request. We appreciate your understanding and patience.
                </span>
              </p>
            </div>
          </div> */}
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto"
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
                <div
                  className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl blur"
                  style={{ background: branch.gradient }}
                />
                <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 overflow-hidden">
                  {branch.status === "coming-soon" && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
                        Coming Soon
                      </span>
                    </div>
                  )}
                  
                  {/* SVG Image */}
                  <div className="flex justify-center mb-4">
                    <div className="relative w-24 h-24">
                      <Image
                        src={branch.image}
                        alt={`${branch.city} office`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">{branch.city}</h4>
                    <p className="text-sm text-gray-500 whitespace-pre-line leading-relaxed">
                      {branch.address}
                    </p>
                    {branch.status === "active" && (
                      <div className="mt-3 inline-flex items-center gap-1 text-xs text-blue-500 group-hover:text-blue-600 transition-colors">
                        <MapPin className="w-3 h-3" />
                        <span>View on Map</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Map Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden relative"
        >
          <div
            className="absolute inset-0"
            style={{
              background: "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1600&h=400&fit=crop')",
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
          <div className="relative z-10 p-10 md:p-14 text-center text-white">
            <Globe className="w-12 h-12 mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Global Reach, Local Expertise
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto text-base leading-relaxed">
              With offices in USA, Sri Lanka, and soon in UAE, we serve clients worldwide
              with cutting-edge technology solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}