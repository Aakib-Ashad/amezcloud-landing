"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  {
    label: "Products",
    href: "#software",
    children: [
      { label: "Pre-built Software", href: "#software" },
      { label: "Subscriptions", href: "#software" },
      { label: "Demo & Pricing", href: "#software" },
    ],
  },
  {
    label: "Subsidiaries",
    href: "#subsidiaries",
    children: [
      { label: "Amez Prime", href: "#subsidiaries" },
      { label: "Amez Visuals", href: "#subsidiaries" },
      { label: "Amez University", href: "#subsidiaries" },
      { label: "Amez Wallet", href: "#subsidiaries" },
    ],
  },
  { label: "Metaverse", href: "#metaverse" },
  { label: "About", href: "#about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "#contact" },
];

// Social media URLs (Replace with your actual URLs)
const socialLinks = {
  whatsapp: "https://wa.me/94777599590", // Replace with your WhatsApp number
  instagram: "https://www.instagram.com/amezcloud/", // Replace with your Instagram
  linkedin: "https://www.linkedin.com/company/amezcloud/", // Replace with your LinkedIn
  facebook: "https://www.facebook.com/amezcloud", // Replace with your Facebook
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-white/80 backdrop-blur-sm"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0  gap-2.5">
            <motion.div
              whileHover={{ scale: 1.08, rotate: 3}}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src="/logo_main.png"
                alt="Amez Cloud"
                className="h-10 w-auto object-contain"
              />
            </motion.div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-gray-900 text-base tracking-tight">
                Amez Cloud
              </span>
              <span className="text-[10px] text-gray-400 font-medium tracking-wide">
                DigitalNexus Technologies
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 rounded-lg transition-colors"
                >
                  {link.label}
                  {link.children && (
                    <motion.span
                      animate={{ rotate: openDropdown === link.label ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                    </motion.span>
                  )}
                </a>
                <AnimatePresence>
                  {link.children && openDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -6, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.97 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50 origin-top"
                    >
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                        >
                          {child.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Social Media Icons & CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Social Media Icons */}
            <div className="flex items-center gap-2 pr-3">
              <motion.a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg text-gray-500 hover:text-green-500 hover:bg-green-100 transition-all"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.967-.94 1.165-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 1.892.512 3.667 1.405 5.2L2.036 21.21a.75.75 0 0 0 .915.915l4.01-1.369A9.958 9.958 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.63 0-3.14-.478-4.416-1.303l-.285-.175-2.854.974.975-2.853-.175-.285A7.962 7.962 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
                </svg>
              </motion.a>

              <motion.a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg text-gray-500 hover:text-pink-500 hover:bg-pink-100 transition-all"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.74 2 7.7 2.04 6.28 2.52 4.86 3 3.93 3.77 3.18 4.63 2.43 5.49 2.04 6.59 2.01 8.06 2 8.57 2 9.45 2 12c0 2.55 0 3.43.02 3.94.03 1.47.42 2.57 1.17 3.43.75.86 1.68 1.63 3.1 2.11 1.42.48 2.54.52 5.71.52 3.17 0 4.29-.04 5.71-.52 1.42-.48 2.35-1.25 3.1-2.11.75-.86 1.14-1.96 1.17-3.43.02-.51.02-1.39.02-3.94 0-2.55 0-3.43-.02-3.94-.03-1.47-.42-2.57-1.17-3.43-.75-.86-1.68-1.63-3.1-2.11C16.3 2.04 15.26 2 12 2zm0 3.5c2.48 0 2.77.01 3.75.05.9.04 1.39.19 1.71.32.43.17.73.38 1.05.7.32.32.53.62.7 1.05.13.32.28.81.32 1.71.04.98.05 1.27.05 3.75s-.01 2.77-.05 3.75c-.04.9-.19 1.39-.32 1.71-.17.43-.38.73-.7 1.05-.32.32-.62.53-1.05.7-.32.13-.81.28-1.71.32-.98.04-1.27.05-3.75.05s-2.77-.01-3.75-.05c-.9-.04-1.39-.19-1.71-.32-.43-.17-.73-.38-1.05-.7-.32-.32-.53-.62-.7-1.05-.13-.32-.28-.81-.32-1.71-.04-.98-.05-1.27-.05-3.75s.01-2.77.05-3.75c.04-.9.19-1.39.32-1.71.17-.43.38-.73.7-1.05.32-.32.62-.53 1.05-.7.32-.13.81-.28 1.71-.32.98-.04 1.27-.05 3.75-.05zM9.5 12c0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4-4 1.79-4 4zm4 2.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zm3.5-5.5c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1z" />
                </svg>
              </motion.a>

              <motion.a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-blue-100 transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.207 0 22.225 0z" />
                </svg>
              </motion.a>

              <motion.a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg text-gray-500 hover:text-blue-500 hover:bg-blue-100 transition-all"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </motion.a>
            </div>

            {/* Get Started Button */}
            {/* <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, opacity: 0.92 }}
              whileTap={{ scale: 0.96 }}
              className="text-sm font-semibold text-white px-4 py-2 rounded-lg"
              style={{ background: "var(--brand-gradient)" }}
            >
              Get Started
            </motion.a> */}
          </div>

          {/* Mobile Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="w-5 h-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.04, duration: 0.2 }}
                  className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}

              {/* Mobile Social Media Icons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.18 }}
                className="flex items-center justify-center gap-3 py-3 border-t border-gray-100 mt-2"
              >
                <motion.a
                  href={socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg text-gray-500 hover:text-green-500"
                  aria-label="WhatsApp"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.967-.94 1.165-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.892.512 3.667 1.405 5.2L2.036 21.21a.75.75 0 0 0 .915.915l4.01-1.369A9.958 9.958 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.63 0-3.14-.478-4.416-1.303l-.285-.175-2.854.974.975-2.853-.175-.285A7.962 7.962 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
                  </svg>
                </motion.a>
                <motion.a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg text-gray-500 hover:text-pink-500"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.74 2 7.7 2.04 6.28 2.52 4.86 3 3.93 3.77 3.18 4.63 2.43 5.49 2.04 6.59 2.01 8.06 2 8.57 2 9.45 2 12c0 2.55 0 3.43.02 3.94.03 1.47.42 2.57 1.17 3.43.75.86 1.68 1.63 3.1 2.11 1.42.48 2.54.52 5.71.52 3.17 0 4.29-.04 5.71-.52 1.42-.48 2.35-1.25 3.1-2.11.75-.86 1.14-1.96 1.17-3.43.02-.51.02-1.39.02-3.94 0-2.55 0-3.43-.02-3.94-.03-1.47-.42-2.57-1.17-3.43-.75-.86-1.68-1.63-3.1-2.11C16.3 2.04 15.26 2 12 2z" />
                  </svg>
                </motion.a>
                <motion.a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg text-gray-500 hover:text-blue-600"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065z" />
                  </svg>
                </motion.a>
                <motion.a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg text-gray-500 hover:text-blue-500"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.22 }}
                className="pt-2 flex flex-col gap-2"
              >
                <a
                  href="#contact"
                  className="text-center text-sm font-semibold text-white py-2.5 rounded-lg"
                  style={{ background: "var(--brand-gradient)" }}
                >
                  Get Started
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}