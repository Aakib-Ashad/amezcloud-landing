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

// WhatsApp icon as a custom SVG component (lucide doesn't have WhatsApp)
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.967-.94 1.165-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.892.512 3.667 1.405 5.2L2.036 21.21a.75.75 0 0 0 .915.915l4.01-1.369A9.958 9.958 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.63 0-3.14-.478-4.416-1.303l-.285-.175-2.854.974.975-2.853-.175-.285A7.962 7.962 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
  </svg>
);

const socials = [
  // WhatsApp — before LinkedIn
  {
    icon: WhatsAppIcon,
    href: "https://wa.me/94777599590", // ← replace with your number
    label: "WhatsApp",
    grad: "linear-gradient(135deg, #25d366, #128c7e)",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/amezcloud/",
    label: "LinkedIn",
    grad: "linear-gradient(135deg, #2563eb, #6366f1)",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/amezcloud/",
    label: "Instagram",
    grad: "linear-gradient(135deg, #ec4899, #f97316)",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/amezcloud",
    label: "Facebook",
    grad: "linear-gradient(135deg, #3b82f6, #6366f1)",
  },
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
                className="relative w-70 h-10"
              >
                <Image
                  src="/amezcloud-light.svg"
                  alt="Amez Cloud"
                  fill
                  className="object-contain"
                />
              </motion.div>
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
                  target="_blank"
                  rel="noopener noreferrer"
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
            &copy; {new Date().getFullYear()} Amez Cloud - DigitalNexus Technologies. All rights reserved. Est. 2016.
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