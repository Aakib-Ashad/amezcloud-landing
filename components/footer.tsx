"use client";

import { Twitter, Linkedin, Instagram, Facebook, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  Products: [
    { label: "Software Catalog", href: "#software" },
    { label: "ERP System", href: "#software" },
    { label: "LMS Platform", href: "#software" },
    { label: "E-Commerce", href: "#software" },
    { label: "Flight Booking", href: "#software" },
  ],
  Subsidiaries: [
    { label: "Amez Prime", href: "https://www.amezprime.com/" },
    { label: "Amez University", href: "https://www.amezuniversity.com/" },
    { label: "Amez Wallet", href: "https://www.amezwallet.com/" },
    { label: "Amez Club", href: "https://www.amezclub.com/" },
    { label: "Firebowl", href: "https://www.firebowl.lk/" },
  ],
  Services: [
    { label: "Digital Marketing", href: "#about" },
    { label: "Web Development", href: "#about" },
    { label: "Metaverse / Web3", href: "#metaverse" },
    { label: "AR/VR Solutions", href: "#metaverse" },
    { label: "Cloud Hosting", href: "#about" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Careers", href: "#contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

const socials = [
  { icon: Twitter, href: "#", label: "Twitter", grad: "linear-gradient(135deg, #0ea5e9, #3b82f6)" },
  { icon: Linkedin, href: "#", label: "LinkedIn", grad: "linear-gradient(135deg, #2563eb, #6366f1)" },
  { icon: Instagram, href: "#", label: "Instagram", grad: "linear-gradient(135deg, #ec4899, #f97316)" },
  { icon: Facebook, href: "#", label: "Facebook", grad: "linear-gradient(135deg, #3b82f6, #6366f1)" },
  { icon: Youtube, href: "#", label: "YouTube", grad: "linear-gradient(135deg, #ef4444, #f97316)" },
];

const columnVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.08 },
  }),
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <motion.div
            className="col-span-2 md:col-span-3 lg:col-span-1"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-9 h-9"
              >
                <Image
                  src="/logo_main.png"
                  alt="Amez Cloud"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-white text-base tracking-tight">
                  Amez Cloud
                </span>
                <span className="text-[10px] text-gray-500 font-medium">
                  DigitalNexus Technologies
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-5 max-w-xs">
              The centralized hub for all types of digital services. Since 2016,
              powering businesses globally.
            </p>
            <div className="flex gap-2.5">
              {socials.map(({ icon: Icon, href, label, grad }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  whileHover={{ y: -3, scale: 1.18 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: grad }}
                >
                  <Icon className="w-4 h-4 text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links], colIdx) => (
            <motion.div
              key={title}
              custom={colIdx + 1}
              variants={columnVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
                {title}
              </p>
              <ul className="flex flex-col gap-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <motion.a
                      href={href}
                      whileHover={{ x: 3 }}
                      className="text-sm text-gray-400 hover:text-white transition-colors inline-block"
                    >
                      {label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <motion.div
          className="border-t border-gray-800 py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Amez Cloud — DigitalNexus Technologies. All rights reserved. Est. 2016.
          </p>
          <div className="flex items-center gap-1.5">
            <motion.span
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-2 h-2 rounded-full"
              style={{ background: "linear-gradient(135deg, #10b981, #06b6d4)" }}
            />
            <span className="text-xs text-gray-500">All systems operational</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}