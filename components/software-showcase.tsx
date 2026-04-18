"use client";

import { useState } from "react";
import {
  ShoppingCart,
  Store,
  BarChart3,
  GraduationCap,
  Plane,
  Users,
  Utensils,
  ChefHat,
  ShoppingBasket,
  Package,
  ExternalLink,
  CheckCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const software = [
  {
    id: "single-ecommerce",
    name: "Single Vendor E-Commerce",
    category: "E-Commerce",
    icon: ShoppingCart,
    grad: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
    iconColor: "#fff",
    tagGrad: "linear-gradient(135deg, #eff6ff, #f5f3ff)",
    tagText: "#2563eb",
    activeListBg: "linear-gradient(135deg, #eff6ff 0%, #f5f3ff 100%)",
    description:
      "A fully featured online store platform built for individual businesses. Manage products, orders, payments, and customers with ease.",
    features: [
      "Product catalog management",
      "Secure payment gateway",
      "Order tracking & fulfillment",
      "Customer accounts & loyalty",
      "Analytics dashboard",
      "Mobile responsive storefront",
    ],
    pricing: "One-time license or monthly subscription",
    badge: "Most Popular",
  },
  {
    id: "multi-ecommerce",
    name: "Multi Vendor E-Commerce",
    category: "E-Commerce",
    icon: Store,
    grad: "linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)",
    iconColor: "#fff",
    tagGrad: "linear-gradient(135deg, #f5f3ff, #fdf4ff)",
    tagText: "#7c3aed",
    activeListBg: "linear-gradient(135deg, #f5f3ff 0%, #fdf4ff 100%)",
    description:
      "A marketplace platform supporting multiple vendors under one roof. Ideal for aggregators, mall-style portals, and digital bazaars.",
    features: [
      "Vendor onboarding & management",
      "Commission & revenue split",
      "Multi-store product listings",
      "Vendor analytics portal",
      "Dispute & review system",
      "Unified checkout experience",
    ],
    pricing: "One-time license or monthly subscription",
    badge: "Enterprise Ready",
  },
  {
    id: "erp",
    name: "ERP System",
    category: "Enterprise",
    icon: BarChart3,
    grad: "linear-gradient(135deg, #6366f1 0%, #2563eb 100%)",
    iconColor: "#fff",
    tagGrad: "linear-gradient(135deg, #eef2ff, #eff6ff)",
    tagText: "#4f46e5",
    activeListBg: "linear-gradient(135deg, #eef2ff 0%, #eff6ff 100%)",
    description:
      "Comprehensive enterprise resource planning covering finance, HR, inventory, procurement, and more in a single integrated system.",
    features: [
      "Finance & accounting modules",
      "HR & payroll management",
      "Inventory & warehouse control",
      "Procurement & supply chain",
      "CRM integration",
      "Real-time reporting",
    ],
    pricing: "Custom enterprise pricing",
    badge: "Full Suite",
  },
  {
    id: "lms",
    name: "University LMS",
    category: "Education",
    icon: GraduationCap,
    grad: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
    iconColor: "#fff",
    tagGrad: "linear-gradient(135deg, #ecfdf5, #ecfeff)",
    tagText: "#059669",
    activeListBg: "linear-gradient(135deg, #ecfdf5 0%, #ecfeff 100%)",
    description:
      "A powerful learning management system tailored for universities. Supports online education, virtual classrooms, and course management.",
    features: [
      "Course creation & management",
      "Live virtual classrooms",
      "Student progress tracking",
      "Assignment & grading tools",
      "Certificate generation",
      "Mobile learning app",
    ],
    pricing: "Per-institution licensing",
    badge: "Education Focused",
  },
  {
    id: "flight",
    name: "Flight Booking System",
    category: "Travel",
    icon: Plane,
    grad: "linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)",
    iconColor: "#fff",
    tagGrad: "linear-gradient(135deg, #f0f9ff, #eef2ff)",
    tagText: "#0284c7",
    activeListBg: "linear-gradient(135deg, #f0f9ff 0%, #eef2ff 100%)",
    description:
      "A complete flight booking platform with real-time seat selection, fare comparison, booking management, and integrated payments.",
    features: [
      "Real-time flight search",
      "Seat selection & upgrades",
      "Multi-airline integration",
      "Booking & e-ticket generation",
      "Cancellation & refund flow",
      "Travel agent portal",
    ],
    pricing: "Transaction-based or subscription",
    badge: "Travel Tech",
  },
  {
    id: "uni-leads",
    name: "University Leads Management",
    category: "Education",
    icon: Users,
    grad: "linear-gradient(135deg, #f59e0b 0%, #f97316 100%)",
    iconColor: "#fff",
    tagGrad: "linear-gradient(135deg, #fffbeb, #fff7ed)",
    tagText: "#d97706",
    activeListBg: "linear-gradient(135deg, #fffbeb 0%, #fff7ed 100%)",
    description:
      "A CRM-powered leads management system specifically for universities to track, nurture, and convert prospective students.",
    features: [
      "Lead capture & tracking",
      "Automated follow-up emails",
      "Application pipeline view",
      "Counselor assignment",
      "Conversion analytics",
      "Integration with LMS",
    ],
    pricing: "Monthly subscription",
    badge: "CRM Powered",
  },
  {
    id: "food-delivery",
    name: "Food Delivery App",
    category: "Food & Beverage",
    icon: Utensils,
    grad: "linear-gradient(135deg, #f97316 0%, #ef4444 100%)",
    iconColor: "#fff",
    tagGrad: "linear-gradient(135deg, #fff7ed, #fef2f2)",
    tagText: "#ea580c",
    activeListBg: "linear-gradient(135deg, #fff7ed 0%, #fef2f2 100%)",
    description:
      "End-to-end food delivery platform with customer app, restaurant portal, and delivery driver management all in one.",
    features: [
      "Customer-facing mobile app",
      "Restaurant management portal",
      "Real-time order tracking",
      "Driver assignment & routing",
      "Payment & tip management",
      "Rating & review system",
    ],
    pricing: "Commission or subscription model",
    badge: "Full Stack",
  },
  {
    id: "restaurant",
    name: "Restaurant System",
    category: "Food & Beverage",
    icon: ChefHat,
    grad: "linear-gradient(135deg, #ef4444 0%, #ec4899 100%)",
    iconColor: "#fff",
    tagGrad: "linear-gradient(135deg, #fef2f2, #fdf2f8)",
    tagText: "#dc2626",
    activeListBg: "linear-gradient(135deg, #fef2f2 0%, #fdf2f8 100%)",
    description:
      "A complete point-of-sale and restaurant management system covering dine-in, takeaway, reservations, and kitchen operations.",
    features: [
      "Point-of-sale terminal",
      "Table reservation system",
      "Kitchen display system",
      "Menu & recipe management",
      "Staff scheduling",
      "Revenue reporting",
    ],
    pricing: "One-time or subscription",
    badge: "POS Included",
  },
  {
    id: "supermarket",
    name: "Supermarket System",
    category: "Retail",
    icon: ShoppingBasket,
    grad: "linear-gradient(135deg, #14b8a6 0%, #10b981 100%)",
    iconColor: "#fff",
    tagGrad: "linear-gradient(135deg, #f0fdfa, #ecfdf5)",
    tagText: "#0d9488",
    activeListBg: "linear-gradient(135deg, #f0fdfa 0%, #ecfdf5 100%)",
    description:
      "Full-featured retail management for supermarkets — inventory, POS, supplier management, loyalty programs, and reporting.",
    features: [
      "Barcode scanning POS",
      "Inventory & expiry tracking",
      "Supplier purchase orders",
      "Customer loyalty program",
      "Multi-branch support",
      "Sales & profit analytics",
    ],
    pricing: "Per-branch or enterprise",
    badge: "Retail Ready",
  },
  {
    id: "courier",
    name: "Courier Tracking System",
    category: "Logistics",
    icon: Package,
    grad: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)",
    iconColor: "#fff",
    tagGrad: "linear-gradient(135deg, #f5f3ff, #eef2ff)",
    tagText: "#7c3aed",
    activeListBg: "linear-gradient(135deg, #f5f3ff 0%, #eef2ff 100%)",
    description:
      "A logistics and parcel tracking platform for courier companies — from pickup to delivery with real-time GPS tracking.",
    features: [
      "Real-time GPS parcel tracking",
      "Driver mobile application",
      "Automated dispatch system",
      "Proof of delivery (POD)",
      "Customer notification alerts",
      "Analytics & route optimization",
    ],
    pricing: "Transaction-based or monthly",
    badge: "GPS Enabled",
  },
];

const categories = [
  "All",
  "E-Commerce",
  "Enterprise",
  "Education",
  "Travel",
  "Food & Beverage",
  "Retail",
  "Logistics",
];

const categoryGrads: Record<string, string> = {
  All: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
  "E-Commerce": "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
  Enterprise: "linear-gradient(135deg, #6366f1 0%, #2563eb 100%)",
  Education: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
  Travel: "linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)",
  "Food & Beverage": "linear-gradient(135deg, #f97316 0%, #ef4444 100%)",
  Retail: "linear-gradient(135deg, #14b8a6 0%, #10b981 100%)",
  Logistics: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)",
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

export default function SoftwareShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState(software[0]);

  const filtered =
    activeCategory === "All"
      ? software
      : software.filter((s) => s.category === activeCategory);

  return (
    <section id="software" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-4 text-white"
            style={{ background: "var(--grad-blue-violet)" }}
          >
            Available Systems
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-balance"
          >
            Pre-Built Software,{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--brand-gradient)" }}
            >
              Ready to Deploy
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed text-pretty"
          >
            Browse our catalog of proven software systems available for direct
            purchase or flexible subscription. Request a live demo instantly.
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                const first =
                  cat === "All"
                    ? software[0]
                    : software.find((s) => s.category === cat) || software[0];
                setSelected(first);
              }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-1.5 rounded-full text-sm font-semibold transition-all"
              style={
                activeCategory === cat
                  ? { background: categoryGrads[cat] || "var(--brand-gradient)", color: "#fff" }
                  : { background: "#f3f4f6", color: "#374151" }
              }
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Software List */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-2 max-h-[600px] overflow-y-auto pr-1"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => {
                const Icon = item.icon;
                const isActive = selected.id === item.id;
                return (
                  <motion.button
                    key={item.id}
                    layout
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.15 } }}
                    onClick={() => setSelected(item)}
                    whileHover={{ x: 3 }}
                    className="w-full text-left flex items-start gap-3 p-3 rounded-xl border transition-all overflow-hidden relative"
                    style={
                      isActive
                        ? { background: item.activeListBg, borderColor: "transparent" }
                        : { background: "#fff", borderColor: "#f3f4f6" }
                    }
                  >
                    {isActive && (
                      <div
                        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl"
                        style={{ background: item.grad }}
                      />
                    )}
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: isActive ? item.grad : "#f9fafb" }}
                    >
                      <Icon
                        className="w-4 h-4"
                        style={{ color: isActive ? "#fff" : "#6b7280" }}
                      />
                    </div>
                    <div className="min-w-0">
                      <p
                        className="text-sm font-semibold"
                        style={{ color: isActive ? "#1e1b4b" : "#1f2937" }}
                      >
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">{item.category}</p>
                    </div>
                    {item.badge && (
                      <span
                        className="ml-auto shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full text-white"
                        style={{ background: item.grad }}
                      >
                        {item.badge}
                      </span>
                    )}
                  </motion.button>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Detail Panel */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -18 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="rounded-2xl overflow-hidden h-full flex flex-col"
              >
                {/* Gradient header */}
                <div
                  className="p-6 relative"
                  style={{ background: selected.grad }}
                >
                  <div className="absolute inset-0 bg-white/10" />
                  <div className="relative z-10 flex items-start gap-4">
                    <motion.div
                      initial={{ scale: 0.7, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.05 }}
                      className="w-12 h-12 rounded-xl bg-white/25 backdrop-blur-sm flex items-center justify-center"
                    >
                      {(() => {
                        const Icon = selected.icon;
                        return <Icon className="w-6 h-6 text-white" />;
                      })()}
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg font-bold text-white">{selected.name}</h3>
                        {selected.badge && (
                          <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-white/25 text-white">
                            {selected.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-white/80 font-medium">{selected.category}</p>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="flex-1 flex flex-col border border-t-0 border-gray-100 rounded-b-2xl p-6 bg-white">
                  <p className="text-sm text-gray-600 leading-relaxed mb-5">
                    {selected.description}
                  </p>

                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                    Key Features
                  </h4>
                  <motion.ul
                    className="grid sm:grid-cols-2 gap-2 mb-6"
                    variants={stagger}
                    initial="hidden"
                    animate="visible"
                  >
                    {selected.features.map((f) => (
                      <motion.li key={f} variants={fadeUp} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#2563eb" }} />
                        <span className="text-sm text-gray-600">{f}</span>
                      </motion.li>
                    ))}
                  </motion.ul>

                  <div className="mt-auto flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
                    <div className="flex-1">
                      <p className="text-xs text-gray-400 mb-1">Pricing</p>
                      <p className="text-sm font-semibold text-gray-700">{selected.pricing}</p>
                    </div>
                    <div className="flex gap-2">
                      <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:border-blue-300 hover:text-blue-600 transition-colors bg-white"
                      >
                        Request Demo
                        <ExternalLink className="w-3.5 h-3.5" />
                      </motion.a>
                      <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-white text-sm font-bold"
                        style={{ background: selected.grad }}
                      >
                        Buy Now
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
