"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const subsidiaries = [
  {
    id: "amez-cloud",
    name: "Amez Cloud",
    tagline: "The Digital Nexus",
    category: "Technology",
    description:
      "We specialize in Software Development, Digital Marketing & Advertising, E-Commerce, Networking, Hosting, Photography, Construction Services, E-Trading & Contracting, Graphic Designing, Real Estate and many more.",
    grad: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
    emoji: "☁️",
    logo: "/logo/amez_cloud.jpg",
    highlight: true,
  },
  {
    id: "amez-prime",
    name: "Amez Prime",
    tagline: "Smart Investments & Growth",
    category: "Marketplace",
    description:
      "Explore handpicked opportunities in properties, vehicles, marketplace, and career listings. All curated by Amez Prime, your trusted partner for smart investments and growth.",
    grad: "linear-gradient(135deg, #f97316 0%, #f59e0b 100%)",
    emoji: "⭐",
    logo: "/logo/amez_prime.jpg",
  },
  {
    id: "amez-visuals",
    name: "Amez Visuals",
    tagline: "Capture Life's Best Moments",
    category: "Photography & Print",
    description:
      "Capture life's best moments with Amez Visuals. Your reliable partner for professional photography and printing services.",
    grad: "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)",
    emoji: "📸",
    logo: "/logo/amez-visuals.jpg",
  },
  {
    id: "amez-university",
    name: "Amez University",
    tagline: "Gateway to World-Class Education",
    category: "Education",
    description:
      "Your gateway to world class education. A comprehensive institution offering online education, on-site learning, and immersive virtual classrooms, along with valuable internship opportunities.",
    grad: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
    emoji: "🎓",
    logo: "/logo/amez_university.jpg",
  },
  {
    id: "amez-club",
    name: "Amez Club",
    tagline: "Startups, Investors & Change Makers",
    category: "Community",
    description:
      "Our club connects startups, enterprises, global investors, and change makers, fostering collaboration, mentorship, and investment opportunities. We create an ecosystem where innovative ideas thrive.",
    grad: "linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)",
    emoji: "🤝",
    logo: "/logo/amez_club.jpg",
  },
  {
    id: "amez-wallet",
    name: "Amez Wallet",
    tagline: "Future of Finance",
    category: "Fintech",
    description:
      "Unlock the future of finance with Amez Wallet. A secure and empowering solution that puts you in charge of your financial journey. With Amez, you gain control over your financial future.",
    grad: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
    emoji: "💳",
    logo: "/logo/amez_wallet.jpg",
  },
  {
    id: "amez-hub",
    name: "Amez Hub",
    tagline: "Smarter Saving & Investing",
    category: "Finance",
    description:
      "Unlock your route to financial prosperity by exploring the smarter approach to saving and investing. Secure your future with ease and intelligence.",
    grad: "linear-gradient(135deg, #6366f1 0%, #2563eb 100%)",
    emoji: "📊",
    logo: "/logo/amez_hub.jpg",
  },
  {
    id: "amezcare",
    name: "AmezCare Plus",
    tagline: "Asset Protection & Priority Support",
    category: "Insurance & Care",
   description:
  "Comprehensive Pharmacy & Healthcare Support with Trusted Medical Services. Choose the ideal AmezCare Plus package tailored to your wellness and healthcare needs.",    grad: "linear-gradient(135deg, #ef4444 0%, #f97316 100%)",
    emoji: "🛡️",
    logo: "/logo/amez_health.jpg", // No logo available
  },
  {
    id: "amez-cards",
    name: "Amez Cards",
    tagline: "Seamless Financial Control",
    category: "Banking",
    description:
      "Explore our diverse range of debit cards designed for seamless transactions and enhanced financial control. From everyday purchases to secure online transactions, find the perfect card.",
    grad: "linear-gradient(135deg, #374151 0%, #111827 100%)",
    emoji: "🃏",
    logo: "/logo/amez_cards.jpg",
  },
  {
    id: "amez-express",
    name: "Amez Express",
    tagline: "Fast, Reliable Logistics",
    category: "Logistics",
    description:
      "Explore our diverse range of express delivery and logistics solutions designed for seamless operations and enhanced control over your shipments and deliveries.",
    grad: "linear-gradient(135deg, #f97316 0%, #ef4444 100%)",
    emoji: "🚚",
    logo: "/logo/amez_express.jpg",
  },
  {
    id: "amez-organic",
    name: "Amez Organic",
    tagline: "Exotic Spices & Organic Foods",
    category: "Food & Wellness",
    description:
      "Your online source for exotic and hard to find Spices, Herbals & Organic Foods for Cooking, Baking & Daily Use.",
    grad: "linear-gradient(135deg, #84cc16 0%, #10b981 100%)",
    emoji: "🌿",
    logo: "/logo/amez_organic.jpg",
  },
  {
    id: "amez-line",
    name: "Amez Line",
    tagline: "Fashion Forward Design",
    category: "Fashion",
    description:
      "Discover fashion that blends quality, comfort, and trend-forward design. Amez Line offers a curated collection of clothing and accessories.",
    grad: "linear-gradient(135deg, #d946ef 0%, #ec4899 100%)",
    emoji: "👗",
    logo: "/logo/amez_line.jpg",
  },
  {
    id: "hitech",
    name: "Hi-tech Marketing",
    tagline: "Leading Source for Products & Services",
    category: "Distribution",
    description:
      "The Leading Source for All Types of Products and Services. Importers and Distributors of All Kinds of Mobile phones, Accessories, Computer Accessories and CCTV & Camera Accessories.",
    grad: "linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)",
    emoji: "📱",
    logo: "/logo/height_tech_marketing.jpg",
  },
  {
    id: "avoqs",
    name: "AVOQS",
    tagline: "Street Meets Luxury",
    category: "Apparel",
    description:
      "Built for daily movement and effortless style, AVOQS premium tees combine clean aesthetics with superior comfort — the perfect balance between street and luxury.",
    grad: "linear-gradient(135deg, #44403c 0%, #1c1917 100%)",
    emoji: "👕",
    logo: "/logo/avoqs.jpg",
  },
  {
    id: "amez-furns",
    name: "Amez Furns",
    tagline: "Bespoke Furniture Design",
    category: "Furniture",
    description:
      "We specialize in designing and manufacturing bespoke furniture that combines style, functionality, and quality craftsmanship. From concept to creation, our pieces are tailored to bring your vision to life.",
    grad: "linear-gradient(135deg, #ca8a04 0%, #b45309 100%)",
    emoji: "🛋️",
    logo: "/logo/amez_furns.jpg",
  },
  {
    id: "firebowl",
    name: "Firebowl",
    tagline: "Unforgettable Dining Experiences",
    category: "Hospitality",
    description:
      "From luxurious hotels and fine dining restaurants to vibrant street food stalls, we offer unforgettable experiences for every taste and occasion.",
    grad: "linear-gradient(135deg, #dc2626 0%, #ea580c 100%)",
    emoji: "🔥",
    logo: "/logo/firebowl.jpg",
  },
  {
    id: "vhenever",
    name: "Vhenever",
    tagline: "Perfect Gift Delivery",
    category: "Gifts & Celebrations",
    description:
      "Making special moments unforgettable with perfectly timed gift delivery for birthdays, anniversaries, and all your celebrations.",
    grad: "linear-gradient(135deg, #ec4899 0%, #d946ef 100%)",
    emoji: "🎁",
    logo: "images/vhenever.svg",   
  },
  {
    id: "amez-books",
    name: "Amez Books",
    tagline: "Fully Functional ERP",
    category: "Enterprise Software",
    description:
      "A fully functional ERP system designed for businesses of all sizes. Manage your finances, operations, and reporting in one comprehensive platform.",
    grad: "linear-gradient(135deg, #475569 0%, #1e293b 100%)",
    emoji: "📚",
    logo: "images/amezbooks.svg", 
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.04 },
  }),
};

export default function Subsidiaries() {
  return (
    <section id="subsidiaries" className="py-20" style={{ background: "linear-gradient(180deg, #f8faff 0%, #fdf4ff 100%)" }}>
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
            style={{ background: "var(--grad-fuchsia-violet)" }}
          >
            Amez &amp; Its Subsidiaries
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-balance">
            One Group,{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--grad-blue-violet)" }}
            >
              Infinite Possibilities
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed text-pretty">
            Amez Cloud is the parent of a growing family of specialized brands
            spanning technology, finance, education, fashion, food, logistics, and beyond.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {subsidiaries.map((sub, i) => (
            <motion.div
              key={sub.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260 }}
              className="relative group rounded-2xl overflow-hidden cursor-pointer flex flex-col backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl"
              style={{ background: sub.grad }}
            >
              {/* Glass morphism layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/15 to-transparent" />

              <div className="relative z-10 p-5 flex flex-col gap-3 h-full">
                {/* Top row */}
                <div className="flex items-start gap-3">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-11 h-11 rounded-xl bg-white/25 backdrop-blur-md flex items-center justify-center shrink-0 shadow-lg border border-white/30 overflow-hidden"
                  >
                    {sub.logo ? (
                      <div className="relative w-8 h-8">
                        <Image
                          src={sub.logo}
                          alt={sub.name}
                          fill
                          className="object-cover rounded-lg drop-shadow-md"
                        />
                      </div>
                    ) : (
                      <span className="text-2xl drop-shadow-md">{sub.emoji}</span>
                    )}
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-bold text-white text-sm">{sub.name}</p>
                      <span className="text-[10px] font-semibold text-white/70 shrink-0 bg-white/15 px-2 py-0.5 rounded-full">
                        {sub.category}
                      </span>
                    </div>
                    <p className="text-xs font-medium mt-0.5 text-white/90">
                      {sub.tagline}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-white/75 leading-relaxed flex-1 line-clamp-3">
                  {sub.description}
                </p>

                {/* Learn more */}
                <div className="flex items-center gap-1 text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}