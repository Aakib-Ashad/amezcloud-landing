"use client";

import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { createClient } from "@/lib/supabase/client";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const infoCards = [
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@amezcloud.com",
    grad: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+1 (800) AMEZ-HUB",
    grad: "linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "DigitalNexus Tower, Global City",
    grad: "linear-gradient(135deg, #06b6d4 0%, #6366f1 100%)",
  },
];

// All software names from SoftwareShowcase — used as dynamic options
const allSoftwareNames = [
  "Single Vendor E-Commerce",
  "Multi Vendor Marketplace",
  "B2B Wholesale Platform",
  "Dropshipping Store",
  "Freelance Marketplace",
  "Subscription Box Platform",
  "ERP System",
  "CRM & Sales Pipeline",
  "HRMS & Payroll",
  "Project Management Suite",
  "Document Management System",
  "Accounting & Finance",
  "Help Desk & Ticketing",
  "Inventory Management",
  "Construction Project Management",
  "Procurement & Sourcing System",
  "Expense & Travel Management",
  "Recruitment & ATS Platform",
  "University LMS",
  "University Leads CRM",
  "School Management System",
  "Online Examination Platform",
  "E-Learning Marketplace",
  "Nursery & Kindergarten System",
  "Skill & Vocational Training Platform",
  "Hospital Management System",
  "Clinic Management System",
  "Pharmacy POS & Management",
  "Telemedicine Platform",
  "Dental Clinic Management",
  "Health Insurance Management",
  "Flight Booking System",
  "Hotel & Property Management",
  "Tour & Travel Agency System",
  "Hostel & Guesthouse System",
  "Food Delivery App",
  "Restaurant POS & Management",
  "Cloud Kitchen Management",
  "Cafe & Loyalty System",
  "Bakery & Confectionery System",
  "Supermarket System",
  "Retail POS System",
  "Fashion & Apparel Management",
  "Equipment Rental Platform",
  "Optical Store Management",
  "Courier Tracking System",
  "Fleet Management System",
  "Warehouse Management System",
  "Ride-Hailing & Taxi App",
  "Bicycle & Micro-Mobility Rental",
  "Field Service Management",
  "Real Estate Portal",
  "Property Management System",
  "Co-Working Space Management",
  "Digital Wallet & Payments",
  "Microfinance & Loan System",
  "Payment Gateway Platform",
  "Stock Trading & Investment Platform",
  "Subscription Billing Engine",
  "Car Rental System",
  "Auto Garage & Service Center",
  "Used Car Marketplace",
  "Video Streaming Platform",
  "Event Ticketing System",
  "Music Streaming Platform",
  "Social Network Platform",
  "News & Media Portal",
  "Gaming Tournament Platform",
  "Radio & Podcast Platform",
  "Gym & Fitness Management",
  "Spa & Salon Booking",
  "Sports Club Management",
  "Yoga & Wellness Studio",
  "SaaS Admin & Billing Platform",
  "Cybersecurity Dashboard",
  "IT Service Management (ITSM)",
  "IoT Device Management Dashboard",
  "DevOps & CI/CD Platform",
  "Low-Code App Builder",
  "Business Intelligence & Analytics",
  "Push Notification & Messaging Platform",
  "Enterprise Password & Secrets Manager",
  "E-Government Portal",
  "Land Registry System",
  "Visitor Management System",
  "Municipal Tax & Revenue System",
  "School Transport Management",
  "Cemetery & Memorial Management",
  "Marketing Automation Platform",
  "Affiliate Marketing Platform",
  "Survey & Feedback Platform",
  "Influencer Marketing Platform",
  "Agriculture Management System",
  "Agri Produce Marketplace",
  "Legal Practice Management",
  "Accounting Firm Management",
  "Print Studio & Order Management",
];

export default function ContactSection() {
  const [supabase, setSupabase] = useState<any>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isDemoService, setIsDemoService] = useState(false);

  // Initialize Supabase client only on client side
  useEffect(() => {
    try {
      const client = createClient();
      setSupabase(client);
    } catch (err: any) {
      console.error("Failed to initialize Supabase:", err);
      setError(err.message);
    }
  }, []);

  useEffect(() => {
    // Read from sessionStorage on mount (handles page navigation case)
    const stored = sessionStorage.getItem("demoService");
    if (stored) {
      setForm((prev) => ({ ...prev, service: stored }));
      setIsDemoService(true);
      sessionStorage.removeItem("demoService");
    }

    // Listen for same-page CustomEvent (same-page scroll case)
    const handler = (e: Event) => {
      const serviceName = (e as CustomEvent).detail?.service ?? "";
      if (serviceName) {
        setForm((prev) => ({ ...prev, service: serviceName }));
        setIsDemoService(true);
      }
    };

    window.addEventListener("demo-request", handler);
    return () => window.removeEventListener("demo-request", handler);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!supabase) {
      setError("Supabase client not initialized. Please check your configuration.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Validate input
      if (!form.name.trim()) throw new Error("Name is required");
      if (!form.email.trim()) throw new Error("Email is required");
      if (!form.message.trim()) throw new Error("Message is required");

      // Insert data into contact_enquiries table
      const { data, error: insertError } = await supabase
        .from("contact_enquiries")
        .insert([
          {
            name: form.name.trim(),
            email: form.email.trim(),
            service_interest: form.service || null,
            message: form.message.trim(),
          },
        ])
        .select();

      if (insertError) {
        console.error("Supabase insert error:", insertError);
        throw new Error(insertError.message);
      }

      console.log("Enquiry saved:", data);
      setSubmitted(true);
      
      // Reset form after successful submission
      setForm({
        name: "",
        email: "",
        service: "",
        message: "",
      });
      setIsDemoService(false);
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
      
    } catch (err: any) {
      console.error("Form submission error:", err);
      setError(err.message || "Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 scroll-mt-20"
      style={{ background: "linear-gradient(180deg, #f8faff 0%, #fdf4ff 100%)" }}
    >
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
            style={{ background: "var(--grad-cyan-blue)" }}
          >
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-balance">
            Let&apos;s Build Something{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--brand-gradient)" }}
            >
              Great Together
            </span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Ready to get started or have a question? Our team is here to help
            you find the perfect solution for your business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Info */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {infoCards.map(({ icon: Icon, label, value, grad }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                whileHover={{ x: 4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 280 }}
                className="flex items-start gap-3 p-4 rounded-2xl overflow-hidden relative"
                style={{ background: grad }}
              >
                <div className="absolute inset-0 bg-black/5" />
                <div className="w-9 h-9 bg-white/25 rounded-xl flex items-center justify-center shrink-0 relative z-10">
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <div className="relative z-10">
                  <p className="text-xs font-bold text-white/70 uppercase tracking-wider">
                    {label}
                  </p>
                  <p className="text-sm font-semibold text-white mt-0.5">{value}</p>
                </div>
              </motion.div>
            ))}

            {/* Free demo card */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl p-5 text-white mt-1 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #2563eb 0%, #8b5cf6 50%, #d946ef 100%)",
              }}
            >
              <motion.div
                className="absolute inset-0 bg-white/5 pointer-events-none"
                animate={{ x: ["100%", "-120%"] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 4,
                }}
                style={{ skewX: -20, width: "35%" }}
              />
              <p className="font-bold text-base mb-1 relative z-10">
                Free Demo Available
              </p>
              <p className="text-sm text-white/80 leading-relaxed relative z-10">
                Request a free live demo of any of our pre-built software
                systems. No commitment required.
              </p>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="rounded-2xl p-8 text-center flex flex-col items-center gap-3 h-full justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                  }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 250, delay: 0.1 }}
                    className="w-14 h-14 bg-white/25 rounded-full flex items-center justify-center"
                  >
                    <Send className="w-6 h-6 text-white" />
                  </motion.div>
                  <p className="font-bold text-white text-xl">Message Sent!</p>
                  <p className="text-sm text-white/80">
                    Thank you for reaching out. Our team will get back to you
                    within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-gray-100 bg-white p-6 flex flex-col gap-4 shadow-sm"
                >
                  {/* Error message */}
                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                      <p className="text-sm text-red-600">{error}</p>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-gray-600">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className="px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all"
                        disabled={loading}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-gray-600">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className="px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all"
                        disabled={loading}
                      />
                    </div>
                  </div>

                  {/* Service Interest dropdown */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-gray-600">
                      Service Interest
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => {
                        setForm({ ...form, service: e.target.value });
                        setIsDemoService(false);
                      }}
                      className="px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all bg-white"
                      disabled={loading}
                    >
                      <option value="">Select a service...</option>

                      {/* If coming from Request Demo, show the software name as the first selected option */}
                      {isDemoService && form.service && (
                        <option value={form.service}>{form.service} — Demo Request</option>
                      )}

                      {/* Standard service options */}
                      <optgroup label="General Services">
                        <option value="Software Purchase / Licensing">Software Purchase / Licensing</option>
                        <option value="Custom Software Development">Custom Software Development</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="E-Commerce Setup">E-Commerce Setup</option>
                        <option value="Metaverse / Web3">Metaverse / Web3</option>
                        <option value="Education (Amez University)">Education (Amez University)</option>
                        <option value="Fintech (Amez Wallet / Hub)">Fintech (Amez Wallet / Hub)</option>
                        <option value="Other">Other</option>
                      </optgroup>

                      {/* All pre-built software names */}
                      <optgroup label="Pre-Built Software — Demo Request">
                        {allSoftwareNames.map((name) => (
                          <option key={name} value={name}>
                            {name}
                          </option>
                        ))}
                      </optgroup>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-gray-600">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about your project or question..."
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all resize-none"
                      disabled={loading}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, opacity: 0.93 }}
                    whileTap={{ scale: 0.97 }}
                    disabled={loading || !supabase}
                    className="flex items-center justify-center gap-2 py-3 rounded-xl text-white font-bold text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{
                      background:
                        "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
                    }}
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}