"use client";

import { useState, useMemo } from "react";
import {
  ShoppingCart, Store, BarChart3, GraduationCap, Plane, Users, Utensils, ChefHat,
  ShoppingBasket, Package, ExternalLink, CheckCircle, Hospital, Car, Home, Briefcase,
  CreditCard, Globe, Shield, Truck, Building2, Calendar, FileText, Headphones, Hotel,
  Landmark, MapPin, Monitor, Percent, Phone, Settings, Wallet, Wrench, Zap, Activity,
  BookOpen, Camera, Cpu, Database, DollarSign, Dumbbell, Factory, Film, Flower,
  Gamepad2, GitBranch, Heart, Key, Leaf, MessageSquare, Music, Search, TrendingUp,
  Tv, UserCheck, X, PieChart, Radio, Lock, Layers, Coffee, Bus, Bike, Scissors,
  Sun, Wind, Boxes, Receipt, Award, Bell, ClipboardList, ShoppingBag, Server,
  Mic, Ticket, Banknote, HardDrive, Stethoscope, Baby, Book, Brush, Navigation,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Data ─────────────────────────────────────────────────────────────────────
const software = [
  // ── E-Commerce (6) ───────────────────────────────────────────────────────
  {
    id: "single-ecommerce", name: "Single Vendor E-Commerce", category: "E-Commerce",
    icon: ShoppingCart, grad: "linear-gradient(135deg,#3b82f6,#8b5cf6)",
    tagColor: "#2563eb", badge: "Most Popular",
    description: "A fully featured online store for individual businesses. Manage products, orders, payments and customers with a modern storefront.",
    features: ["Product catalog & variants", "Secure payment gateway", "Order tracking & fulfillment", "Customer accounts & loyalty", "Real-time analytics dashboard", "Mobile-responsive storefront"],
    pricing: "One-time license or monthly subscription",
  },
  {
    id: "multi-ecommerce", name: "Multi Vendor Marketplace", category: "E-Commerce",
    icon: Store, grad: "linear-gradient(135deg,#8b5cf6,#d946ef)",
    tagColor: "#7c3aed", badge: "Enterprise Ready",
    description: "A marketplace platform supporting multiple vendors under one roof. Ideal for aggregators, mall-style portals, and digital bazaars.",
    features: ["Vendor onboarding & management", "Commission & revenue split", "Multi-store product listings", "Vendor analytics portal", "Dispute & review system", "Unified checkout experience"],
    pricing: "One-time license or monthly subscription",
  },
  {
    id: "b2b-wholesale", name: "B2B Wholesale Platform", category: "E-Commerce",
    icon: Briefcase, grad: "linear-gradient(135deg,#2563eb,#06b6d4)",
    tagColor: "#1d4ed8", badge: "B2B Focused",
    description: "Dedicated wholesale ordering platform for bulk buyers with tiered pricing, credit limits, purchase orders, and company account management.",
    features: ["Tiered & negotiated pricing", "Purchase order management", "Credit limit & net terms", "Company & buyer accounts", "Bulk order import via CSV", "Custom quote requests"],
    pricing: "Monthly or annual subscription",
  },
  {
    id: "dropshipping", name: "Dropshipping Store", category: "E-Commerce",
    icon: TrendingUp, grad: "linear-gradient(135deg,#ec4899,#f97316)",
    tagColor: "#db2777", badge: "Zero Inventory",
    description: "Automated dropshipping store connected to supplier networks. Sell without inventory — orders route directly to suppliers for fulfillment.",
    features: ["Supplier catalogue sync", "Automated order routing", "Profit margin calculator", "One-click product import", "Inventory & price sync", "Returns management"],
    pricing: "Monthly subscription",
  },
  {
    id: "freelance-marketplace", name: "Freelance Marketplace", category: "E-Commerce",
    icon: Briefcase, grad: "linear-gradient(135deg,#10b981,#2563eb)",
    tagColor: "#059669", badge: "Gig Economy",
    description: "Freelance marketplace platform with bidding, escrow payments, milestones, dispute resolution, and skill-based search.",
    features: ["Freelancer & client profiles", "Project posting & bidding", "Milestone-based escrow", "Video interview tools", "Dispute resolution system", "Review & rating system"],
    pricing: "Commission-based or subscription",
  },
  {
    id: "subscription-box", name: "Subscription Box Platform", category: "E-Commerce",
    icon: ShoppingBag, grad: "linear-gradient(135deg,#f59e0b,#ec4899)",
    tagColor: "#d97706", badge: "Recurring Revenue",
    description: "Subscription commerce platform for curated box businesses with recurring billing, box customisation, churn management, and subscriber analytics.",
    features: ["Recurring billing engine", "Box customisation portal", "Subscriber management", "Churn prediction alerts", "Pause & skip options", "Gifting & referral system"],
    pricing: "Revenue share or monthly",
  },
  // ── Enterprise (10) ───────────────────────────────────────────────────────
  {
    id: "erp", name: "ERP System", category: "Enterprise",
    icon: BarChart3, grad: "linear-gradient(135deg,#6366f1,#2563eb)",
    tagColor: "#4f46e5", badge: "Full Suite",
    description: "Comprehensive enterprise resource planning covering finance, HR, inventory, procurement, and more in a single integrated system.",
    features: ["Finance & accounting modules", "HR & payroll management", "Inventory & warehouse control", "Procurement & supply chain", "CRM integration", "Real-time reporting"],
    pricing: "Custom enterprise pricing",
  },
  {
    id: "crm", name: "CRM & Sales Pipeline", category: "Enterprise",
    icon: UserCheck, grad: "linear-gradient(135deg,#0ea5e9,#6366f1)",
    tagColor: "#0284c7", badge: "Sales Ready",
    description: "End-to-end customer relationship management with visual pipeline, lead scoring, automated follow-ups, and revenue forecasting.",
    features: ["Visual drag-drop sales pipeline", "Lead scoring & assignment", "Automated email sequences", "Deal & opportunity tracking", "Revenue forecasting", "Integration with marketing tools"],
    pricing: "Per-user monthly subscription",
  },
  {
    id: "hrms", name: "HRMS & Payroll", category: "Enterprise",
    icon: Users, grad: "linear-gradient(135deg,#7c3aed,#2563eb)",
    tagColor: "#6d28d9", badge: "HR Automation",
    description: "Complete human resource management system with employee lifecycle, leave management, attendance, payroll automation, and compliance.",
    features: ["Employee records & lifecycle", "Attendance & leave tracking", "Automated payroll & tax", "Performance reviews", "Onboarding workflows", "Compliance & audit reports"],
    pricing: "Per-employee monthly fee",
  },
  {
    id: "project-management", name: "Project Management Suite", category: "Enterprise",
    icon: GitBranch, grad: "linear-gradient(135deg,#14b8a6,#6366f1)",
    tagColor: "#0d9488", badge: "Team Friendly",
    description: "Full-featured project management platform with Gantt charts, Kanban boards, time tracking, and resource allocation.",
    features: ["Gantt & Kanban views", "Milestone & task management", "Time tracking & billing", "Resource allocation", "Client portal & approval", "Budget vs. actual tracking"],
    pricing: "Per-user or team subscription",
  },
  {
    id: "document-management", name: "Document Management System", category: "Enterprise",
    icon: FileText, grad: "linear-gradient(135deg,#64748b,#3b82f6)",
    tagColor: "#475569", badge: "Paperless",
    description: "Centralised document repository with version control, e-signature integration, access permissions, and intelligent search.",
    features: ["Version control & history", "E-signature integration", "Granular access permissions", "OCR & intelligent search", "Workflow approval routing", "Audit trail & compliance"],
    pricing: "Per-user monthly",
  },
  {
    id: "accounting", name: "Accounting & Finance", category: "Enterprise",
    icon: DollarSign, grad: "linear-gradient(135deg,#16a34a,#06b6d4)",
    tagColor: "#15803d", badge: "Finance Suite",
    description: "Professional double-entry accounting system with invoicing, tax management, bank reconciliation, and financial statement generation.",
    features: ["Double-entry bookkeeping", "Invoicing & accounts receivable", "Expense & payables tracking", "Bank reconciliation", "Tax filing & VAT reports", "P&L, balance sheet, cash flow"],
    pricing: "Monthly subscription",
  },
  {
    id: "helpdesk", name: "Help Desk & Ticketing", category: "Enterprise",
    icon: Headphones, grad: "linear-gradient(135deg,#f59e0b,#ef4444)",
    tagColor: "#d97706", badge: "Support Ready",
    description: "Multi-channel customer support platform with ticketing, SLA management, knowledge base, live chat, and CSAT tracking.",
    features: ["Multi-channel inbox (email, chat, social)", "SLA rules & escalations", "Knowledge base builder", "Canned responses", "CSAT & NPS surveys", "Agent performance reports"],
    pricing: "Per-agent monthly",
  },
  {
    id: "inventory", name: "Inventory Management", category: "Enterprise",
    icon: Database, grad: "linear-gradient(135deg,#0f766e,#0ea5e9)",
    tagColor: "#0f766e", badge: "Warehouse Ready",
    description: "Real-time inventory control across multiple warehouses with barcode scanning, reorder automation, and supplier integration.",
    features: ["Multi-warehouse management", "Barcode & QR code scanning", "Automated reorder triggers", "Batch & serial tracking", "Supplier purchase orders", "Stock valuation reports"],
    pricing: "Subscription or one-time",
  },
  {
    id: "construction", name: "Construction Project Management", category: "Enterprise",
    icon: Building2, grad: "linear-gradient(135deg,#f59e0b,#374151)",
    tagColor: "#d97706", badge: "ConTech",
    description: "End-to-end construction management covering budgeting, scheduling, subcontractor management, RFIs, and site progress tracking.",
    features: ["Project budgeting & cost control", "Gantt schedule management", "Subcontractor portal", "RFI & submittal tracking", "Daily progress logs", "BIM & drawing management"],
    pricing: "Per-project or subscription",
  },
  {
    id: "procurement", name: "Procurement & Sourcing System", category: "Enterprise",
    icon: Boxes, grad: "linear-gradient(135deg,#2563eb,#10b981)",
    tagColor: "#1d4ed8", badge: "Supply Chain",
    description: "End-to-end procurement platform with supplier onboarding, RFQ/RFP management, purchase orders, contract tracking, and spend analytics.",
    features: ["Supplier onboarding & rating", "RFQ & RFP management", "Digital purchase orders", "Contract lifecycle management", "Three-way PO matching", "Spend analytics & savings"],
    pricing: "Per-user monthly",
  },
  {
    id: "expense-management", name: "Expense & Travel Management", category: "Enterprise",
    icon: Receipt, grad: "linear-gradient(135deg,#7c3aed,#f97316)",
    tagColor: "#6d28d9", badge: "Finance Control",
    description: "Automated expense reporting with receipt scanning, travel booking, approval workflows, policy enforcement, and ERP sync.",
    features: ["Mobile receipt scanning (OCR)", "Travel booking integration", "Multi-level approval workflows", "Policy & spend limit enforcement", "Corporate card reconciliation", "ERP & accounting sync"],
    pricing: "Per-user monthly",
  },
  // ── Education (7) ─────────────────────────────────────────────────────────
  {
    id: "lms", name: "University LMS", category: "Education",
    icon: GraduationCap, grad: "linear-gradient(135deg,#10b981,#06b6d4)",
    tagColor: "#059669", badge: "Education Focused",
    description: "A powerful learning management system tailored for universities — supports online education, virtual classrooms, and course management.",
    features: ["Course creation & management", "Live virtual classrooms", "Student progress tracking", "Assignment & grading tools", "Certificate generation", "Mobile learning app"],
    pricing: "Per-institution licensing",
  },
  {
    id: "uni-leads", name: "University Leads CRM", category: "Education",
    icon: TrendingUp, grad: "linear-gradient(135deg,#f59e0b,#f97316)",
    tagColor: "#d97706", badge: "Admission Ready",
    description: "CRM-powered leads management system for universities to track, nurture, and convert prospective students into enrolled ones.",
    features: ["Lead capture & tracking", "Automated follow-up emails", "Application pipeline view", "Counselor assignment", "Conversion analytics", "Integration with LMS"],
    pricing: "Monthly subscription",
  },
  {
    id: "school-management", name: "School Management System", category: "Education",
    icon: BookOpen, grad: "linear-gradient(135deg,#7c3aed,#10b981)",
    tagColor: "#6d28d9", badge: "K-12 Ready",
    description: "All-in-one school administration platform covering admissions, timetabling, fee collection, parent communication, and exams.",
    features: ["Student admissions & records", "Timetable & attendance", "Fee collection & receipts", "Parent-teacher communication", "Exam & result management", "Library management"],
    pricing: "Per-school annual license",
  },
  {
    id: "online-exam", name: "Online Examination Platform", category: "Education",
    icon: Monitor, grad: "linear-gradient(135deg,#06b6d4,#6366f1)",
    tagColor: "#0891b2", badge: "AI Proctored",
    description: "Secure online exam platform with AI-powered proctoring, question banks, auto-grading, and detailed performance analytics.",
    features: ["AI proctoring & face detection", "Randomised question banks", "Auto-grading & instant results", "Timer & attempt limits", "Detailed performance analytics", "Certificate generation"],
    pricing: "Per-exam or subscription",
  },
  {
    id: "elearning-marketplace", name: "E-Learning Marketplace", category: "Education",
    icon: Film, grad: "linear-gradient(135deg,#ec4899,#a855f7)",
    tagColor: "#db2777", badge: "Udemy-Style",
    description: "A course marketplace where instructors publish and sell video courses, with student enrollment, progress tracking, and payouts.",
    features: ["Instructor course publishing", "Video hosting & streaming", "Student dashboard & progress", "Ratings & reviews system", "Instructor payout management", "Bundle & coupon pricing"],
    pricing: "Revenue share or subscription",
  },
  {
    id: "kindergarten", name: "Nursery & Kindergarten System", category: "Education",
    icon: Baby, grad: "linear-gradient(135deg,#f472b6,#fbbf24)",
    tagColor: "#ec4899", badge: "Early Learning",
    description: "Child-care and nursery management with enrolment, attendance, daily activity reports, meal tracking, and parent communication.",
    features: ["Child enrolment & profiles", "Attendance & pickup logs", "Daily activity & photo reports", "Meal plan management", "Parent communication portal", "Fee billing & receipts"],
    pricing: "Per-nursery monthly",
  },
  {
    id: "skill-training", name: "Skill & Vocational Training Platform", category: "Education",
    icon: Award, grad: "linear-gradient(135deg,#0ea5e9,#f97316)",
    tagColor: "#0284c7", badge: "SkillTech",
    description: "Vocational training management for bootcamps and institutes with cohort scheduling, assessments, placement tracking, and employer portals.",
    features: ["Cohort & batch scheduling", "Skill assessment builder", "Placement & job board", "Trainer & mentor portal", "Progress & completion reports", "Employer partnership portal"],
    pricing: "Per-cohort or annual",
  },
  // ── Healthcare (6) ────────────────────────────────────────────────────────
  {
    id: "hospital", name: "Hospital Management System", category: "Healthcare",
    icon: Hospital, grad: "linear-gradient(135deg,#10b981,#3b82f6)",
    tagColor: "#059669", badge: "HIPAA Compliant",
    description: "Comprehensive HMS covering patient records, OPD/IPD management, pharmacy, billing, lab results, and appointment scheduling.",
    features: ["Patient records & EMR", "OPD & IPD management", "Pharmacy & drug inventory", "Lab & radiology integration", "Appointment scheduling", "Billing & insurance claims"],
    pricing: "Hospital-scale licensing",
  },
  {
    id: "clinic", name: "Clinic Management System", category: "Healthcare",
    icon: Activity, grad: "linear-gradient(135deg,#06b6d4,#10b981)",
    tagColor: "#0891b2", badge: "Clinic Ready",
    description: "Lightweight clinic software for appointment booking, patient consultations, prescriptions, and billing for single or multi-branch clinics.",
    features: ["Online appointment booking", "Patient consultation notes", "Prescription management", "Billing & receipt generation", "SMS & email reminders", "Multi-branch support"],
    pricing: "Monthly per-clinic fee",
  },
  {
    id: "pharmacy", name: "Pharmacy POS & Management", category: "Healthcare",
    icon: Heart, grad: "linear-gradient(135deg,#ef4444,#f97316)",
    tagColor: "#dc2626", badge: "Rx Management",
    description: "Complete pharmacy point-of-sale with drug inventory, expiry tracking, prescription validation, and supplier order management.",
    features: ["Drug inventory & expiry alerts", "POS with barcode scanning", "Prescription validation", "Supplier purchase orders", "Controlled substance logs", "Sales & profit reports"],
    pricing: "One-time or subscription",
  },
  {
    id: "telemedicine", name: "Telemedicine Platform", category: "Healthcare",
    icon: Phone, grad: "linear-gradient(135deg,#7c3aed,#06b6d4)",
    tagColor: "#6d28d9", badge: "Remote Care",
    description: "Video consultation platform connecting patients with doctors remotely — with scheduling, e-prescriptions, and secure medical records.",
    features: ["Video & audio consultations", "Doctor availability scheduling", "E-prescription generation", "Secure medical record sharing", "In-app chat & follow-up", "Payment & insurance billing"],
    pricing: "Per-consultation or subscription",
  },
  {
    id: "dental-clinic", name: "Dental Clinic Management", category: "Healthcare",
    icon: Stethoscope, grad: "linear-gradient(135deg,#0ea5e9,#a855f7)",
    tagColor: "#0284c7", badge: "Dental Focused",
    description: "Dental practice management with chair scheduling, patient charting, treatment plans, X-ray integration, and insurance claim processing.",
    features: ["Chair & treatment scheduling", "Digital dental charting", "Treatment plan builder", "X-ray & image storage", "Insurance claim submission", "Patient recall reminders"],
    pricing: "Per-clinic monthly",
  },
  {
    id: "health-insurance", name: "Health Insurance Management", category: "Healthcare",
    icon: Shield, grad: "linear-gradient(135deg,#16a34a,#2563eb)",
    tagColor: "#15803d", badge: "InsurTech",
    description: "Insurance administration platform with policy issuance, premium collection, claims processing, provider networks, and actuarial reporting.",
    features: ["Policy issuance & renewal", "Premium billing & collection", "Claims intake & adjudication", "Provider network management", "Pre-authorisation workflows", "Actuarial & risk reports"],
    pricing: "Enterprise licensing",
  },
  // ── Travel (4) ────────────────────────────────────────────────────────────
  {
    id: "flight", name: "Flight Booking System", category: "Travel",
    icon: Plane, grad: "linear-gradient(135deg,#0ea5e9,#6366f1)",
    tagColor: "#0284c7", badge: "Travel Tech",
    description: "Complete flight booking platform with real-time seat selection, fare comparison, booking management, and integrated payments.",
    features: ["Real-time flight search", "Seat selection & upgrades", "Multi-airline integration", "Booking & e-ticket generation", "Cancellation & refund flow", "Travel agent portal"],
    pricing: "Transaction-based or subscription",
  },
  {
    id: "hotel", name: "Hotel & Property Management", category: "Travel",
    icon: Hotel, grad: "linear-gradient(135deg,#f59e0b,#ef4444)",
    tagColor: "#d97706", badge: "PMS Ready",
    description: "Full hotel management system with reservation engine, front desk, housekeeping, channel manager, and revenue management.",
    features: ["Online reservation engine", "Front desk & check-in/out", "Housekeeping management", "Channel manager (OTA sync)", "Revenue & rate management", "Guest CRM & loyalty"],
    pricing: "Per-property subscription",
  },
  {
    id: "tour-travel", name: "Tour & Travel Agency System", category: "Travel",
    icon: MapPin, grad: "linear-gradient(135deg,#10b981,#f59e0b)",
    tagColor: "#059669", badge: "Agency Ready",
    description: "Tour package management platform with itinerary builder, group bookings, visa processing tracker, and agent commission management.",
    features: ["Tour package builder", "Itinerary creation & sharing", "Group & FIT bookings", "Visa processing tracker", "Agent & sub-agent portal", "Revenue & commission reports"],
    pricing: "Monthly or annual",
  },
  {
    id: "hostel-management", name: "Hostel & Guesthouse System", category: "Travel",
    icon: Key, grad: "linear-gradient(135deg,#6366f1,#10b981)",
    tagColor: "#4f46e5", badge: "Budget Stay",
    description: "Lightweight property management for hostels and guesthouses with dorm/room booking, walk-in check-in, and OTA channel sync.",
    features: ["Dorm bed & private room booking", "Walk-in & OTA bookings", "Digital check-in & ID scan", "Housekeeping task board", "Cafe & activity POS", "Occupancy & revenue reports"],
    pricing: "Per-property monthly",
  },
  // ── Food & Beverage (5) ───────────────────────────────────────────────────
  {
    id: "food-delivery", name: "Food Delivery App", category: "Food & Beverage",
    icon: Utensils, grad: "linear-gradient(135deg,#f97316,#ef4444)",
    tagColor: "#ea580c", badge: "Full Stack",
    description: "End-to-end food delivery platform with customer app, restaurant portal, and delivery driver management all in one.",
    features: ["Customer-facing mobile app", "Restaurant management portal", "Real-time order tracking", "Driver assignment & routing", "Payment & tip management", "Rating & review system"],
    pricing: "Commission or subscription model",
  },
  {
    id: "restaurant", name: "Restaurant POS & Management", category: "Food & Beverage",
    icon: ChefHat, grad: "linear-gradient(135deg,#ef4444,#ec4899)",
    tagColor: "#dc2626", badge: "POS Included",
    description: "Complete point-of-sale and restaurant management covering dine-in, takeaway, reservations, and kitchen display operations.",
    features: ["Point-of-sale terminal", "Table reservation system", "Kitchen display system", "Menu & recipe management", "Staff scheduling", "Revenue reporting"],
    pricing: "One-time or subscription",
  },
  {
    id: "cloud-kitchen", name: "Cloud Kitchen Management", category: "Food & Beverage",
    icon: Zap, grad: "linear-gradient(135deg,#f59e0b,#ec4899)",
    tagColor: "#d97706", badge: "Ghost Kitchen",
    description: "Purpose-built platform for ghost kitchens managing multiple virtual brands, aggregator integrations, and order volume analytics.",
    features: ["Multi-brand order management", "Aggregator API integration", "Kitchen capacity planning", "Ingredient cost management", "Brand performance analytics", "Automated order printing"],
    pricing: "Monthly subscription",
  },
  {
    id: "cafe-loyalty", name: "Cafe & Loyalty System", category: "Food & Beverage",
    icon: Coffee, grad: "linear-gradient(135deg,#84cc16,#10b981)",
    tagColor: "#65a30d", badge: "Loyalty Built-in",
    description: "Cafe POS bundled with a digital loyalty program, pre-order app, and gift card system to grow repeat customers.",
    features: ["Quick-serve POS", "Digital loyalty stamp cards", "Pre-order mobile app", "Gift cards & top-up", "Customer spend analytics", "Seasonal promotion builder"],
    pricing: "Monthly subscription",
  },
  {
    id: "bakery-system", name: "Bakery & Confectionery System", category: "Food & Beverage",
    icon: Flower, grad: "linear-gradient(135deg,#f472b6,#fbbf24)",
    tagColor: "#ec4899", badge: "Artisan Ready",
    description: "Production planning and POS for bakeries with batch recipes, custom cake orders, pre-orders, shelf life tracking, and delivery management.",
    features: ["Custom cake & order builder", "Batch recipe & costing", "Pre-order & advance payment", "Shelf life & waste tracking", "Delivery route planner", "Daily production schedule"],
    pricing: "Per-location monthly",
  },
  // ── Retail (5) ────────────────────────────────────────────────────────────
  {
    id: "supermarket", name: "Supermarket System", category: "Retail",
    icon: ShoppingBasket, grad: "linear-gradient(135deg,#14b8a6,#10b981)",
    tagColor: "#0d9488", badge: "Retail Ready",
    description: "Full-featured retail management for supermarkets — inventory, POS, supplier management, loyalty programs, and reporting.",
    features: ["Barcode scanning POS", "Inventory & expiry tracking", "Supplier purchase orders", "Customer loyalty program", "Multi-branch support", "Sales & profit analytics"],
    pricing: "Per-branch or enterprise",
  },
  {
    id: "pos-retail", name: "Retail POS System", category: "Retail",
    icon: Monitor, grad: "linear-gradient(135deg,#6366f1,#ec4899)",
    tagColor: "#4f46e5", badge: "Cloud POS",
    description: "Cloud-based POS for retail stores with offline mode, multi-register support, employee permissions, and real-time sync.",
    features: ["Cloud POS with offline mode", "Multi-register & multi-store", "Employee permissions & shifts", "Customer profiles & history", "Promotions & discount engine", "Real-time cloud sync"],
    pricing: "Monthly per-register",
  },
  {
    id: "fashion-retail", name: "Fashion & Apparel Management", category: "Retail",
    icon: Scissors, grad: "linear-gradient(135deg,#ec4899,#f97316)",
    tagColor: "#db2777", badge: "Fashion First",
    description: "Specialised retail software for fashion brands with size/colour matrix, lookbook builder, seasonal buying, and returns analytics.",
    features: ["Size & colour matrix inventory", "Lookbook & visual merchandising", "Seasonal buy planning", "Fit guide & product pages", "Returns & exchange tracking", "Influencer affiliate codes"],
    pricing: "Monthly subscription",
  },
  {
    id: "rental-platform", name: "Equipment Rental Platform", category: "Retail",
    icon: Wrench, grad: "linear-gradient(135deg,#0f766e,#f97316)",
    tagColor: "#0f766e", badge: "Rental OS",
    description: "Asset and equipment rental management with availability calendars, contract management, damage deposits, and delivery logistics.",
    features: ["Equipment catalogue & availability", "Online booking & contracts", "Damage deposit management", "Delivery & pickup scheduling", "Maintenance & service logs", "Rental income analytics"],
    pricing: "Monthly subscription",
  },
  {
    id: "optical-store", name: "Optical Store Management", category: "Retail",
    icon: Sun, grad: "linear-gradient(135deg,#0ea5e9,#84cc16)",
    tagColor: "#0284c7", badge: "Optical Retail",
    description: "Optometry practice and retail management with prescription records, lens order management, frame inventory, and insurance billing.",
    features: ["Prescription & eye exam records", "Lens & frame inventory", "Lab order management", "Insurance & warranty billing", "Appointment scheduling", "Customer lens history"],
    pricing: "Per-store monthly",
  },
  // ── Logistics (4) ─────────────────────────────────────────────────────────
  {
    id: "courier", name: "Courier Tracking System", category: "Logistics",
    icon: Package, grad: "linear-gradient(135deg,#8b5cf6,#6366f1)",
    tagColor: "#7c3aed", badge: "GPS Enabled",
    description: "Full logistics and parcel tracking platform for courier companies — from pickup to delivery with real-time GPS tracking.",
    features: ["Real-time GPS parcel tracking", "Driver mobile application", "Automated dispatch system", "Proof of delivery (POD)", "Customer notification alerts", "Route optimisation"],
    pricing: "Transaction-based or monthly",
  },
  {
    id: "fleet", name: "Fleet Management System", category: "Logistics",
    icon: Truck, grad: "linear-gradient(135deg,#1e293b,#3b82f6)",
    tagColor: "#1e40af", badge: "GPS Fleet",
    description: "Real-time fleet tracking and management with vehicle maintenance scheduling, driver behaviour monitoring, and fuel cost analytics.",
    features: ["Live GPS vehicle tracking", "Driver behaviour scoring", "Maintenance scheduling", "Fuel consumption analytics", "Route planning & optimisation", "Compliance & safety reports"],
    pricing: "Per-vehicle monthly",
  },
  {
    id: "warehouse", name: "Warehouse Management System", category: "Logistics",
    icon: Factory, grad: "linear-gradient(135deg,#f97316,#6366f1)",
    tagColor: "#ea580c", badge: "WMS",
    description: "Advanced WMS with zone-based putaway, wave picking, bin management, labour tracking, and seamless ERP/e-commerce integration.",
    features: ["Zone & bin management", "Wave & batch picking", "Receiving & putaway", "Labour performance tracking", "ERP & e-commerce integration", "Real-time inventory visibility"],
    pricing: "Enterprise pricing",
  },
  {
    id: "ride-hailing", name: "Ride-Hailing & Taxi App", category: "Logistics",
    icon: Car, grad: "linear-gradient(135deg,#0ea5e9,#f97316)",
    tagColor: "#0284c7", badge: "Mobility",
    description: "White-label ride-hailing platform with driver and passenger apps, dynamic pricing, live tracking, and dispatcher dashboard.",
    features: ["Passenger & driver apps", "Real-time GPS dispatching", "Dynamic surge pricing", "Multiple ride categories", "In-app payments & wallet", "Driver earnings dashboard"],
    pricing: "Commission or subscription",
  },
  // ── Real Estate (3) ───────────────────────────────────────────────────────
  {
    id: "real-estate", name: "Real Estate Portal", category: "Real Estate",
    icon: Home, grad: "linear-gradient(135deg,#2563eb,#10b981)",
    tagColor: "#1d4ed8", badge: "PropTech",
    description: "Full-featured property listing portal with advanced search, virtual tours, mortgage calculator, and agent management.",
    features: ["Property listing & search", "Virtual 3D tours", "Mortgage calculator", "Agent & developer profiles", "Lead capture & CRM", "Map-based property search"],
    pricing: "Subscription or custom",
  },
  {
    id: "property-management", name: "Property Management System", category: "Real Estate",
    icon: Key, grad: "linear-gradient(135deg,#7c3aed,#f59e0b)",
    tagColor: "#6d28d9", badge: "Landlord Ready",
    description: "Landlord and property manager platform with lease management, rent collection, maintenance requests, and tenant portals.",
    features: ["Lease & contract management", "Online rent collection", "Maintenance request portal", "Tenant & owner portals", "Expense & income tracking", "Inspection & document storage"],
    pricing: "Per-unit monthly fee",
  },
  {
    id: "coworking", name: "Co-Working Space Management", category: "Real Estate",
    icon: Building2, grad: "linear-gradient(135deg,#6366f1,#f97316)",
    tagColor: "#4f46e5", badge: "FlexSpace",
    description: "Manage hot desks, private offices, meeting rooms, memberships, and amenities for co-working spaces and serviced offices.",
    features: ["Hot desk & room booking", "Membership plan management", "Access control integration", "Meeting room scheduler", "Visitor & guest passes", "Usage analytics & billing"],
    pricing: "Per-location monthly",
  },
  // ── FinTech (5) ──────────────────────────────────────────────────────────
  {
    id: "digital-wallet", name: "Digital Wallet & Payments", category: "FinTech",
    icon: Wallet, grad: "linear-gradient(135deg,#6366f1,#ec4899)",
    tagColor: "#4f46e5", badge: "FinTech Core",
    description: "White-label digital wallet platform with P2P transfers, bill payments, QR payments, and wallet-as-a-service APIs.",
    features: ["P2P money transfers", "QR code & NFC payments", "Bill payment integrations", "Virtual & physical cards", "Loyalty points engine", "Open banking APIs"],
    pricing: "Transaction-based or licensing",
  },
  {
    id: "microfinance", name: "Microfinance & Loan System", category: "FinTech",
    icon: Landmark, grad: "linear-gradient(135deg,#0f766e,#6366f1)",
    tagColor: "#0f766e", badge: "MFI Ready",
    description: "Lending management system for microfinance institutions with loan origination, repayment schedules, collections, and member management.",
    features: ["Loan origination & approval", "Repayment schedule builder", "Collections & overdue alerts", "Member & guarantor records", "Interest & fee calculation", "Regulatory compliance reports"],
    pricing: "Institution licensing",
  },
  {
    id: "pos-fintech", name: "Payment Gateway Platform", category: "FinTech",
    icon: CreditCard, grad: "linear-gradient(135deg,#2563eb,#0ea5e9)",
    tagColor: "#1d4ed8", badge: "Payment Infra",
    description: "White-label payment gateway supporting multi-currency, card, bank transfer, and crypto payments with fraud detection.",
    features: ["Multi-currency processing", "Card, bank & crypto support", "Fraud detection & 3DS", "Merchant dashboard", "Payout & settlement engine", "Webhook & API integrations"],
    pricing: "Transaction fee model",
  },
  {
    id: "stock-trading", name: "Stock Trading & Investment Platform", category: "FinTech",
    icon: PieChart, grad: "linear-gradient(135deg,#f59e0b,#2563eb)",
    tagColor: "#d97706", badge: "WealthTech",
    description: "Online brokerage and investment platform with real-time market data, portfolio management, order execution, and regulatory reporting.",
    features: ["Real-time market data feeds", "Buy/sell order execution", "Portfolio tracker & analytics", "Watchlist & price alerts", "Regulatory KYC compliance", "Tax report generation"],
    pricing: "Transaction fee or subscription",
  },
  {
    id: "billing-subscription", name: "Subscription Billing Engine", category: "FinTech",
    icon: Banknote, grad: "linear-gradient(135deg,#a855f7,#06b6d4)",
    tagColor: "#9333ea", badge: "Recurring Billing",
    description: "Flexible subscription billing engine with plan management, proration, dunning, multi-currency, and revenue recognition.",
    features: ["Plan & pricing management", "Proration & mid-cycle changes", "Dunning & retry logic", "Multi-currency billing", "Revenue recognition (ASC 606)", "MRR & churn analytics"],
    pricing: "Revenue share or per-user",
  },
  // ── Automotive (3) ────────────────────────────────────────────────────────
  {
    id: "car-rental", name: "Car Rental System", category: "Automotive",
    icon: Car, grad: "linear-gradient(135deg,#f97316,#7c3aed)",
    tagColor: "#ea580c", badge: "Fleet Ready",
    description: "End-to-end car rental management with fleet availability, online booking, damage tracking, chauffeur dispatch, and billing.",
    features: ["Fleet availability calendar", "Online booking & payment", "Digital check-in & agreements", "Damage inspection reports", "Chauffeur dispatch module", "Billing & invoice generation"],
    pricing: "Monthly subscription",
  },
  {
    id: "garage", name: "Auto Garage & Service Center", category: "Automotive",
    icon: Wrench, grad: "linear-gradient(135deg,#374151,#f97316)",
    tagColor: "#374151", badge: "Workshop Ready",
    description: "Workshop management system for auto repair shops with job cards, parts inventory, technician scheduling, and customer communication.",
    features: ["Job card & work order management", "Parts inventory & costing", "Technician scheduling", "Vehicle history records", "Customer SMS & email updates", "Invoice & payment tracking"],
    pricing: "Per-branch monthly",
  },
  {
    id: "used-car-marketplace", name: "Used Car Marketplace", category: "Automotive",
    icon: Navigation, grad: "linear-gradient(135deg,#2563eb,#f59e0b)",
    tagColor: "#1d4ed8", badge: "Auto Market",
    description: "Online marketplace for buying and selling used vehicles with listing management, inspection reports, finance calculators, and dealer portals.",
    features: ["Vehicle listing management", "360-degree photo upload", "Inspection report builder", "Finance & EMI calculator", "Dealer & private seller portals", "Lead & inquiry management"],
    pricing: "Per-listing or subscription",
  },
  // ── Media (6) ─────────────────────────────────────────────────────────────
  {
    id: "streaming", name: "Video Streaming Platform", category: "Media",
    icon: Tv, grad: "linear-gradient(135deg,#1e1b4b,#ec4899)",
    tagColor: "#1e1b4b", badge: "OTT Ready",
    description: "White-label OTT platform with live streaming, VOD library, subscription paywall, and multi-device playback support.",
    features: ["VOD & live streaming", "Subscription & pay-per-view", "Multi-device apps (iOS/Android/Web)", "Content CMS & categories", "Viewer analytics & retention", "CDN-backed video delivery"],
    pricing: "Monthly subscriber-based",
  },
  {
    id: "event-ticketing", name: "Event Ticketing System", category: "Media",
    icon: Ticket, grad: "linear-gradient(135deg,#ec4899,#f97316)",
    tagColor: "#db2777", badge: "Events Ready",
    description: "Online ticketing and event management platform with QR code check-in, seat maps, group bookings, and promoter payouts.",
    features: ["Event creation & management", "Seat map & zone ticketing", "QR code check-in app", "Group & early-bird pricing", "Promoter payout portal", "Real-time attendance reports"],
    pricing: "Per-ticket fee or subscription",
  },
  {
    id: "music-platform", name: "Music Streaming Platform", category: "Media",
    icon: Music, grad: "linear-gradient(135deg,#1db954,#191414)",
    tagColor: "#1db954", badge: "Audio Platform",
    description: "White-label music streaming service with artist uploads, playlist builder, royalty tracking, and subscription tiers.",
    features: ["Artist & label upload portal", "Playlist builder & discovery", "Subscription tier management", "Royalty calculation & payouts", "Offline download support", "Listener analytics"],
    pricing: "Revenue share or licensing",
  },
  {
    id: "social-network", name: "Social Network Platform", category: "Media",
    icon: Users, grad: "linear-gradient(135deg,#2563eb,#10b981)",
    tagColor: "#1d4ed8", badge: "Community Ready",
    description: "White-label social network with profiles, news feeds, groups, direct messaging, media sharing, and community moderation tools.",
    features: ["User profiles & news feeds", "Groups & community pages", "Direct & group messaging", "Photo & video sharing", "Content moderation tools", "Notification & engagement engine"],
    pricing: "Monthly or custom licensing",
  },
  {
    id: "news-portal", name: "News & Media Portal", category: "Media",
    icon: Camera, grad: "linear-gradient(135deg,#1e1b4b,#0ea5e9)",
    tagColor: "#1e1b4b", badge: "Media CMS",
    description: "Digital news platform with CMS, breaking news alerts, subscription paywall, editorial workflows, and multi-author management.",
    features: ["Advanced news CMS", "Breaking news push alerts", "Subscription paywall", "Multi-author workflows", "SEO & AMP optimisation", "Ad placement management"],
    pricing: "Monthly subscription",
  },
  {
    id: "gaming-tournament", name: "Gaming Tournament Platform", category: "Media",
    icon: Gamepad2, grad: "linear-gradient(135deg,#7c3aed,#dc2626)",
    tagColor: "#6d28d9", badge: "eSports Ready",
    description: "eSports tournament organiser with bracket builder, team registration, match scheduling, live score updates, and prize distribution.",
    features: ["Bracket & tournament builder", "Team & player registration", "Match scheduling & scores", "Live streaming integration", "Prize pool management", "Leaderboards & stats"],
    pricing: "Per-tournament or subscription",
  },
  // ── Fitness (4) ───────────────────────────────────────────────────────────
  {
    id: "gym", name: "Gym & Fitness Management", category: "Fitness",
    icon: Dumbbell, grad: "linear-gradient(135deg,#ef4444,#f97316)",
    tagColor: "#dc2626", badge: "Gym OS",
    description: "Complete gym management solution with member check-in, class scheduling, personal trainer booking, and billing automation.",
    features: ["Member check-in via QR / biometric", "Class & trainer scheduling", "Membership plans & renewals", "Automated billing & dunning", "Progress tracking & diet plans", "Mobile app for members"],
    pricing: "Per-location monthly",
  },
  {
    id: "spa-salon", name: "Spa & Salon Booking", category: "Fitness",
    icon: Flower, grad: "linear-gradient(135deg,#f472b6,#a78bfa)",
    tagColor: "#db2777", badge: "Salon Ready",
    description: "Appointment booking and salon management with stylist scheduling, service catalogue, POS, and client history tracking.",
    features: ["Online appointment booking", "Stylist & room scheduling", "Service catalogue & pricing", "POS & tip management", "Client history & preferences", "Loyalty & referral program"],
    pricing: "Monthly subscription",
  },
  {
    id: "sports-club", name: "Sports Club Management", category: "Fitness",
    icon: Award, grad: "linear-gradient(135deg,#0ea5e9,#ef4444)",
    tagColor: "#0284c7", badge: "Club Manager",
    description: "Sports club admin platform for member registration, court/pitch booking, league management, coaching scheduling, and event management.",
    features: ["Member registration & profiles", "Court & facility booking", "League & tournament management", "Coaching session scheduling", "Subscription & fee collection", "Match result tracking"],
    pricing: "Per-club monthly",
  },
  {
    id: "yoga-wellness", name: "Yoga & Wellness Studio", category: "Fitness",
    icon: Sun, grad: "linear-gradient(135deg,#f59e0b,#10b981)",
    tagColor: "#d97706", badge: "Wellness",
    description: "Holistic wellness studio management with class booking, instructor scheduling, membership packs, online classes, and wellness tracking.",
    features: ["Class & workshop booking", "Instructor availability calendar", "Membership & punch cards", "Online live & recorded classes", "Wellness journal & tracking", "Client progress reports"],
    pricing: "Per-studio monthly",
  },
  // ── Technology (6) ────────────────────────────────────────────────────────
  {
    id: "saas-admin", name: "SaaS Admin & Billing Platform", category: "Technology",
    icon: Settings, grad: "linear-gradient(135deg,#2563eb,#7c3aed)",
    tagColor: "#1d4ed8", badge: "Multi-Tenant",
    description: "Complete SaaS admin panel with multi-tenant management, subscription billing, usage metering, and customer success tools.",
    features: ["Multi-tenant account management", "Subscription & billing automation", "Usage metering & overage", "Plan upgrade / downgrade flows", "Customer success dashboard", "API key & webhook management"],
    pricing: "Revenue-based pricing",
  },
  {
    id: "cybersecurity", name: "Cybersecurity Dashboard", category: "Technology",
    icon: Shield, grad: "linear-gradient(135deg,#0f172a,#dc2626)",
    tagColor: "#1e293b", badge: "SecOps",
    description: "Security operations dashboard with vulnerability scanning, threat intelligence feeds, compliance monitoring, and incident response.",
    features: ["Vulnerability scanner", "Threat intelligence feeds", "SIEM log aggregation", "Compliance monitoring (ISO/SOC)", "Incident response playbooks", "Security score & reporting"],
    pricing: "Enterprise licensing",
  },
  {
    id: "it-helpdesk", name: "IT Service Management (ITSM)", category: "Technology",
    icon: Cpu, grad: "linear-gradient(135deg,#0ea5e9,#10b981)",
    tagColor: "#0284c7", badge: "ITIL Aligned",
    description: "ITIL-aligned service management platform with asset inventory, incident management, change control, and service catalogue.",
    features: ["Asset & CMDB management", "Incident & problem management", "Change & release control", "Service request catalogue", "SLA monitoring & escalation", "ITIL process workflows"],
    pricing: "Per-agent monthly",
  },
  {
    id: "iot-dashboard", name: "IoT Device Management Dashboard", category: "Technology",
    icon: Globe, grad: "linear-gradient(135deg,#0ea5e9,#f97316)",
    tagColor: "#0284c7", badge: "IoT Platform",
    description: "Centralised IoT platform for device provisioning, real-time telemetry, over-the-air updates, alerts, and edge analytics.",
    features: ["Device provisioning & registry", "Real-time telemetry streams", "Over-the-air (OTA) updates", "Rule-based alert engine", "Dashboard & data visualisation", "Edge & cloud analytics"],
    pricing: "Per-device monthly",
  },
  {
    id: "devops-platform", name: "DevOps & CI/CD Platform", category: "Technology",
    icon: Server, grad: "linear-gradient(135deg,#374151,#2563eb)",
    tagColor: "#374151", badge: "DevOps",
    description: "Internal developer platform with CI/CD pipelines, container orchestration, infrastructure provisioning, and deployment monitoring.",
    features: ["CI/CD pipeline builder", "Container & Kubernetes management", "Infrastructure as code (IaC)", "Release & environment management", "Deployment health monitoring", "Developer self-service portal"],
    pricing: "Per-seat or enterprise",
  },
  {
    id: "low-code", name: "Low-Code App Builder", category: "Technology",
    icon: Layers, grad: "linear-gradient(135deg,#8b5cf6,#06b6d4)",
    tagColor: "#7c3aed", badge: "No-Code",
    description: "Visual drag-drop application builder for creating internal tools, workflows, and apps without writing code.",
    features: ["Drag-drop UI builder", "Database & API connectors", "Workflow & automation builder", "Role-based access control", "Custom domain publishing", "Version control & rollback"],
    pricing: "Per-workspace monthly",
  },
  // ── Government (4) ───────────────────────────────────────────────────────
  {
    id: "e-government", name: "E-Government Portal", category: "Government",
    icon: Building2, grad: "linear-gradient(135deg,#1e40af,#065f46)",
    tagColor: "#1e40af", badge: "GovTech",
    description: "Digital government services portal with citizen self-service, permit applications, document verification, and payment integration.",
    features: ["Citizen identity & login", "Permit & licence applications", "Document upload & verification", "Online fee payment", "Application status tracking", "Admin processing dashboard"],
    pricing: "Government project pricing",
  },
  {
    id: "land-registry", name: "Land Registry System", category: "Government",
    icon: FileText, grad: "linear-gradient(135deg,#065f46,#1e40af)",
    tagColor: "#065f46", badge: "Land Records",
    description: "Digitalised land and property registry with title deeds, ownership transfers, encumbrance tracking, and public search portal.",
    features: ["Title deed registration", "Ownership transfer workflow", "Encumbrance & charge records", "Public property search portal", "GIS map integration", "Audit trail & legal reports"],
    pricing: "Government project pricing",
  },
  {
    id: "visitor-management", name: "Visitor Management System", category: "Government",
    icon: UserCheck, grad: "linear-gradient(135deg,#1e40af,#7c3aed)",
    tagColor: "#1e40af", badge: "Enterprise Security",
    description: "Digital visitor check-in system with pre-registration, badge printing, host notifications, and compliance audit logs.",
    features: ["Pre-registration & invite links", "Kiosk self check-in", "Photo & ID capture", "Badge printing", "Host SMS/email alerts", "Compliance & visitor logs"],
    pricing: "Per-location monthly",
  },
  {
    id: "municipal-tax", name: "Municipal Tax & Revenue System", category: "Government",
    icon: Landmark, grad: "linear-gradient(135deg,#065f46,#f59e0b)",
    tagColor: "#065f46", badge: "Revenue Mgmt",
    description: "Digital revenue collection for municipalities covering property tax, business licences, utility billing, and fine management.",
    features: ["Property tax calculation & billing", "Business licence management", "Utility billing & collection", "Fine & penalty management", "Citizen payment portal", "Revenue analytics & forecasting"],
    pricing: "Municipal contract pricing",
  },
  // ── Marketing (4) ────────────────────────────────────────────────────────
  {
    id: "marketing-automation", name: "Marketing Automation Platform", category: "Marketing",
    icon: TrendingUp, grad: "linear-gradient(135deg,#f97316,#8b5cf6)",
    tagColor: "#ea580c", badge: "Omnichannel",
    description: "Full-stack marketing automation with email campaigns, SMS, push notifications, audience segmentation, and A/B testing.",
    features: ["Email & SMS campaign builder", "Push notification management", "Audience segmentation", "A/B test framework", "Journey & drip automation", "Campaign ROI analytics"],
    pricing: "Contact-based subscription",
  },
  {
    id: "affiliate", name: "Affiliate Marketing Platform", category: "Marketing",
    icon: Percent, grad: "linear-gradient(135deg,#10b981,#f59e0b)",
    tagColor: "#059669", badge: "Affiliate Network",
    description: "Affiliate network management platform with publisher recruitment, tracking links, commission rules, and automated payouts.",
    features: ["Publisher & affiliate portal", "Deep-link & banner tracking", "Commission & tier rules", "Fraud click detection", "Automated payout processing", "Performance leaderboards"],
    pricing: "Revenue share or subscription",
  },
  {
    id: "survey", name: "Survey & Feedback Platform", category: "Marketing",
    icon: MessageSquare, grad: "linear-gradient(135deg,#a855f7,#06b6d4)",
    tagColor: "#9333ea", badge: "Feedback OS",
    description: "Advanced survey and customer feedback platform with NPS, CSAT, logic branching, and real-time response analytics.",
    features: ["Drag-drop survey builder", "NPS, CSAT & CES metrics", "Logic branching & skip rules", "Multi-channel distribution", "Real-time analytics & heatmaps", "CRM & webhook integrations"],
    pricing: "Response-based pricing",
  },
  {
    id: "influencer-platform", name: "Influencer Marketing Platform", category: "Marketing",
    icon: Mic, grad: "linear-gradient(135deg,#ec4899,#6366f1)",
    tagColor: "#db2777", badge: "Creator Economy",
    description: "Influencer discovery, campaign management, and performance tracking platform for brands and agencies.",
    features: ["Influencer discovery & vetting", "Campaign brief & collaboration", "Content approval workflow", "Performance & ROI tracking", "Automated payment processing", "Brand safety scoring"],
    pricing: "Monthly subscription",
  },
  // ── Agriculture (2) ───────────────────────────────────────────────────────
  {
    id: "agri", name: "Agriculture Management System", category: "Agriculture",
    icon: Leaf, grad: "linear-gradient(135deg,#16a34a,#84cc16)",
    tagColor: "#15803d", badge: "AgriTech",
    description: "Smart agriculture platform covering farm records, crop planning, input inventory, yield tracking, and market price integration.",
    features: ["Farm & field records", "Crop planning & calendar", "Input & chemical inventory", "Yield & harvest tracking", "Weather & IoT sensor data", "Market price integration"],
    pricing: "Per-farm subscription",
  },
  {
    id: "agri-marketplace", name: "Agri Produce Marketplace", category: "Agriculture",
    icon: Wind, grad: "linear-gradient(135deg,#84cc16,#0ea5e9)",
    tagColor: "#65a30d", badge: "Farm to Market",
    description: "Online marketplace connecting farmers directly to buyers, processors, and exporters with price discovery, logistics, and quality grading.",
    features: ["Farmer & buyer profiles", "Live price discovery board", "Quality grading & certification", "Order & contract management", "Cold chain logistics tracking", "Payment & advance financing"],
    pricing: "Commission or subscription",
  },
  // ── New Categories ────────────────────────────────────────────────────────
  {
    id: "legal-practice", name: "Legal Practice Management", category: "Professional Services",
    icon: Book, grad: "linear-gradient(135deg,#1e1b4b,#7c3aed)",
    tagColor: "#1e1b4b", badge: "LegalTech",
    description: "Law firm management software with matter tracking, time billing, document assembly, client portals, and trust accounting.",
    features: ["Matter & case management", "Time & disbursement billing", "Document assembly & templates", "Client secure portal", "Trust & office accounting", "Court deadline reminders"],
    pricing: "Per-fee-earner monthly",
  },
  {
    id: "accounting-firm", name: "Accounting Firm Management", category: "Professional Services",
    icon: PieChart, grad: "linear-gradient(135deg,#0f766e,#2563eb)",
    tagColor: "#0f766e", badge: "Firm Manager",
    description: "Practice management platform for accounting firms with client onboarding, work planning, time tracking, billing, and compliance management.",
    features: ["Client onboarding & KYC", "Work plan & job scheduling", "Time recording & billing", "Deadline & compliance tracker", "Document management", "Partner & staff dashboards"],
    pricing: "Per-user monthly",
  },
  {
    id: "printing-studio", name: "Print Studio & Order Management", category: "Professional Services",
    icon: Brush, grad: "linear-gradient(135deg,#f97316,#ec4899)",
    tagColor: "#ea580c", badge: "Print Shop",
    description: "Web-to-print ordering system for print shops with product configurator, artwork upload, order management, and dispatch tracking.",
    features: ["Product builder & customiser", "Artwork upload & proofing", "Order management & tracking", "Pricing & bulk discount engine", "Vendor & machine scheduling", "Delivery & courier integration"],
    pricing: "Monthly or per-order",
  },
  {
    id: "transport-school", name: "School Transport Management", category: "Government",
    icon: Bus, grad: "linear-gradient(135deg,#f59e0b,#10b981)",
    tagColor: "#d97706", badge: "Student Safety",
    description: "GPS-tracked school bus management with route planning, parent tracking app, attendance on-board, and driver monitoring.",
    features: ["GPS bus tracking", "Route planning & assignment", "Parent real-time tracking app", "Student boarding attendance", "Driver performance monitoring", "Emergency alert system"],
    pricing: "Per-bus monthly",
  },
  {
    id: "bicycle-rental", name: "Bicycle & Micro-Mobility Rental", category: "Logistics",
    icon: Bike, grad: "linear-gradient(135deg,#84cc16,#06b6d4)",
    tagColor: "#65a30d", badge: "Green Mobility",
    description: "Smart bicycle and e-scooter rental platform with IoT lock integration, station management, digital payments, and usage analytics.",
    features: ["IoT smart lock integration", "Station & docking management", "QR code unlock via app", "Per-minute or plan billing", "Maintenance alert system", "Ride analytics & emissions saved"],
    pricing: "Revenue share or monthly",
  },
  {
    id: "radio-station", name: "Radio & Podcast Platform", category: "Media",
    icon: Radio, grad: "linear-gradient(135deg,#f97316,#6366f1)",
    tagColor: "#ea580c", badge: "Audio Broadcast",
    description: "Online radio and podcast management platform with live broadcasting, episode hosting, scheduling, ad insertion, and listener analytics.",
    features: ["Live radio broadcasting", "Podcast hosting & RSS feeds", "Episode scheduling & CMS", "Dynamic ad insertion", "Listener analytics & heatmaps", "Monetisation & subscription tiers"],
    pricing: "Monthly subscription",
  },
  {
    id: "cemetery-management", name: "Cemetery & Memorial Management", category: "Government",
    icon: MapPin, grad: "linear-gradient(135deg,#374151,#6366f1)",
    tagColor: "#374151", badge: "GovTech",
    description: "Digital cemetery records management with plot allocation, interment records, mapping, genealogy portal, and maintenance scheduling.",
    features: ["Plot inventory & allocation", "Interment & burial records", "GIS grave mapping", "Genealogy public search portal", "Maintenance task scheduler", "Memorial tribute pages"],
    pricing: "Municipal licensing",
  },
  {
    id: "data-analytics", name: "Business Intelligence & Analytics", category: "Technology",
    icon: BarChart3, grad: "linear-gradient(135deg,#2563eb,#f59e0b)",
    tagColor: "#1d4ed8", badge: "BI Platform",
    description: "Self-service BI and analytics platform with drag-drop dashboards, multi-source data connectors, predictive models, and scheduled reports.",
    features: ["Drag-drop dashboard builder", "Multi-source data connectors", "Predictive analytics & ML models", "Scheduled report delivery", "Row-level security", "Embedded analytics APIs"],
    pricing: "Per-user monthly",
  },
  {
    id: "notification-platform", name: "Push Notification & Messaging Platform", category: "Technology",
    icon: Bell, grad: "linear-gradient(135deg,#f97316,#2563eb)",
    tagColor: "#ea580c", badge: "Engagement",
    description: "Omnichannel notification infrastructure for sending push, SMS, email, WhatsApp, and in-app messages at scale with segmentation.",
    features: ["Push, SMS & email delivery", "WhatsApp & in-app messaging", "Audience segmentation & targeting", "Template builder & personalisation", "Delivery analytics & open rates", "Automation triggers & drip flows"],
    pricing: "Per-message or subscription",
  },
  {
    id: "hr-recruitment", name: "Recruitment & ATS Platform", category: "Enterprise",
    icon: ClipboardList, grad: "linear-gradient(135deg,#10b981,#6366f1)",
    tagColor: "#059669", badge: "Hiring OS",
    description: "Applicant tracking system with job posting, CV parsing, interview scheduling, assessment tools, and offer management.",
    features: ["Multi-channel job posting", "AI-powered CV parsing & ranking", "Interview scheduling & video calls", "Skill assessment integration", "Offer letter & contract generation", "Onboarding checklist workflow"],
    pricing: "Per-job or subscription",
  },
  {
    id: "field-service", name: "Field Service Management", category: "Logistics",
    icon: HardDrive, grad: "linear-gradient(135deg,#0ea5e9,#374151)",
    tagColor: "#0284c7", badge: "Field Ops",
    description: "Mobile workforce management for field technicians with job dispatching, GPS tracking, digital job cards, parts management, and SLA tracking.",
    features: ["Job dispatching & scheduling", "Technician GPS tracking", "Digital job card & sign-off", "Parts & inventory management", "SLA monitoring & escalation", "Customer satisfaction surveys"],
    pricing: "Per-technician monthly",
  },
  {
    id: "password-manager", name: "Enterprise Password & Secrets Manager", category: "Technology",
    icon: Lock, grad: "linear-gradient(135deg,#1e293b,#8b5cf6)",
    tagColor: "#1e293b", badge: "Zero Trust",
    description: "Centralised credential and secrets management with vault storage, SSO integration, audit trails, and zero-trust access policies.",
    features: ["Encrypted vault storage", "SSO & LDAP integration", "Fine-grained access policies", "Secrets rotation automation", "Breach monitoring alerts", "Full audit trail & SIEM export"],
    pricing: "Per-user monthly",
  },
];

// ─── Category list (derived) ──────────────────────────────────────────────────
const allCategories = ["All", ...Array.from(new Set(software.map((s) => s.category)))];

const categoryGrads: Record<string, string> = {
  All: "linear-gradient(135deg,#2563eb,#7c3aed)",
  "E-Commerce": "linear-gradient(135deg,#3b82f6,#8b5cf6)",
  Enterprise: "linear-gradient(135deg,#6366f1,#2563eb)",
  Education: "linear-gradient(135deg,#10b981,#06b6d4)",
  Healthcare: "linear-gradient(135deg,#10b981,#3b82f6)",
  Travel: "linear-gradient(135deg,#0ea5e9,#6366f1)",
  "Food & Beverage": "linear-gradient(135deg,#f97316,#ef4444)",
  Retail: "linear-gradient(135deg,#14b8a6,#10b981)",
  Logistics: "linear-gradient(135deg,#8b5cf6,#6366f1)",
  "Real Estate": "linear-gradient(135deg,#2563eb,#10b981)",
  FinTech: "linear-gradient(135deg,#6366f1,#ec4899)",
  Automotive: "linear-gradient(135deg,#f97316,#7c3aed)",
  Media: "linear-gradient(135deg,#1e1b4b,#ec4899)",
  Fitness: "linear-gradient(135deg,#ef4444,#f97316)",
  Technology: "linear-gradient(135deg,#2563eb,#7c3aed)",
  Government: "linear-gradient(135deg,#1e40af,#065f46)",
  Marketing: "linear-gradient(135deg,#f97316,#8b5cf6)",
  Agriculture: "linear-gradient(135deg,#16a34a,#84cc16)",
  "Professional Services": "linear-gradient(135deg,#1e1b4b,#7c3aed)",
};

// ─── Animations ───────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } };

// ─── Component ────────────────────────────────────────────────────────────────
export default function SoftwareShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(software[0]);

  const filtered = useMemo(() => {
    let list = activeCategory === "All" ? software : software.filter((s) => s.category === activeCategory);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.category.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q)
      );
    }
    return list;
  }, [activeCategory, search]);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setSearch("");
    const first = cat === "All" ? software[0] : software.find((s) => s.category === cat) ?? software[0];
    setSelected(first);
  };

  return (
    <section id="software" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <motion.div
          className="text-center mb-12"
          variants={stagger} initial="hidden"
          whileInView="visible" viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-4 text-white shadow-lg"
            style={{ background: "linear-gradient(135deg,#2563eb,#7c3aed)" }}
          >
            <Zap className="w-3 h-3" />
            100+ Pre-Built Systems
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4 text-balance leading-tight">
            Pre-Built Software,{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg,#2563eb,#7c3aed)" }}>
              Ready to Deploy
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed text-pretty">
            Enterprise-grade, market-proven systems across 19 industries. Launch faster, scale confidently — backed by Amez Cloud support.
          </motion.p>
        </motion.div>

        {/* ── Stats ── */}
        <motion.div
          className="flex justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          {[
            { value: "100+", label: "Systems" },
            { value: "19", label: "Industries" },
            { value: "500+", label: "Deployments" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="w-28 sm:w-32 rounded-xl py-3 text-center border border-white/20 shadow-md relative overflow-hidden"
              style={{ background: "linear-gradient(135deg,#2563eb,#7c3aed)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/5 to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              <p className="text-xl font-bold text-white relative z-10">{value}</p>
              <p className="text-xs text-white/80 relative z-10">{label}</p>
            </div>
          ))}
        </motion.div>

        {/* ── Category tabs ── */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-5"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {allCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <motion.button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all border relative overflow-hidden"
                style={
                  isActive
                    ? { background: categoryGrads[cat] ?? "linear-gradient(135deg,#2563eb,#7c3aed)", color: "#fff", borderColor: "transparent", boxShadow: "0 2px 12px rgba(37,99,235,0.25)" }
                    : { background: "#fff", color: "#374151", borderColor: "#e5e7eb" }
                }
              >
                {isActive && <span className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent" />}
                <span className="relative z-10">{cat}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* ── Search ── */}
        <motion.div
          className="flex justify-center mb-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search systems, industries..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-9 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all shadow-sm"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </motion.div>

        {/* ── Result count ── */}
        <div className="text-center mb-6">
          <span className="text-xs font-semibold text-gray-400">
            Showing <span className="text-blue-600 font-bold">{filtered.length}</span> of {software.length} systems
          </span>
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid lg:grid-cols-5 gap-6 items-start">

          {/* Left: scrollable list */}
          <div className="lg:col-span-2">
            <div
              className="flex flex-col gap-1.5 overflow-y-auto pr-1"
              style={{ maxHeight: '640' }}
            >
              <AnimatePresence mode="popLayout">
                {filtered.length === 0 ? (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="text-center py-12 text-gray-400 text-sm"
                  >
                    No systems found for &quot;{search}&quot;
                  </motion.div>
                ) : (
                  filtered.map((item, i) => {
                    const Icon = item.icon;
                    const isActive = selected.id === item.id;
                    return (
                      <motion.button
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0, transition: { delay: i * 0.025, duration: 0.25 } }}
                        exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.12 } }}
                        onClick={() => setSelected(item)}
                        whileHover={{ x: 2 }}
                        className="w-full text-left flex items-center gap-3 px-3 py-6 rounded-xl border transition-all relative overflow-hidden"
                        style={
                          isActive
                            ? { background: "#f8fafc", borderColor: "#e2e8f0", boxShadow: "0 2px 8px rgba(37,99,235,0.10)" }
                            : { background: "#fff", borderColor: "#f1f5f9" }
                        }
                      >
                        {/* Active left bar */}
                        {isActive && (
                          <div
                            className="absolute left-0 top-2 bottom-2 w-1 rounded-full"
                            style={{ background: item.grad }}
                          />
                        )}

                        {/* Icon */}
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                          style={{ background: isActive ? item.grad : "#f1f5f9" }}
                        >
                          <Icon className="w-4 h-4" style={{ color: isActive ? "#fff" : "#94a3b8" }} />
                        </div>

                        {/* Text */}
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-semibold leading-snug truncate" style={{ color: "#1e293b" }}>
                            {item.name}
                          </p>
                          <p className="text-[11px] text-gray-400 mt-0.5 truncate">{item.category}</p>
                        </div>

                        {/* Badge — only visible when there's room */}
                        {item.badge && (
                          <span
                            className="hidden sm:inline-flex shrink-0 items-center text-[9px] font-bold px-1.5 py-0.5 rounded-full text-white leading-none relative overflow-hidden whitespace-nowrap"
                            style={{ background: item.grad }}
                          >
                            <span className="absolute inset-0 bg-white/15" />
                            <span className="relative z-10">{item.badge}</span>
                          </span>
                        )}
                      </motion.button>
                    );
                  })
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right: detail panel */}
          <div className="lg:col-span-3 sticky top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, x: 16, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -16, scale: 0.98 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="rounded-2xl overflow-hidden shadow-xl border border-slate-100"
              >
                {/* Gradient header */}
                <div className="p-6 relative overflow-hidden" style={{ background: selected.grad }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent" />
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/15 to-transparent" />

                  <div className="relative z-10 flex items-start gap-4">
                    <motion.div
                      key={selected.id + "-icon"}
                      initial={{ scale: 0.7, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.28, delay: 0.05 }}
                      className="w-14 h-14 rounded-2xl bg-white/30 backdrop-blur-md flex items-center justify-center shadow-xl border border-white/30 shrink-0"
                    >
                      {(() => { const Icon = selected.icon; return <Icon className="w-7 h-7 text-white drop-shadow-md" />; })()}
                    </motion.div>

                    <div className="flex-1 min-w-0 pt-0.5">
                      <div className="flex flex-wrap items-start gap-2 mb-1">
                        <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow-md leading-tight">
                          {selected.name}
                        </h3>
                        {selected.badge && (
                          <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-white/25 backdrop-blur-sm text-white border border-white/30 shrink-0 mt-0.5">
                            {selected.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-white/80 font-medium drop-shadow-sm">{selected.category}</p>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 bg-white">
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 text-pretty">
                    {selected.description}
                  </p>

                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                    Key Features
                  </p>
                  <motion.ul
                    key={selected.id + "-features"}
                    className="grid sm:grid-cols-2 gap-2 mb-6"
                    variants={stagger} initial="hidden" animate="visible"
                  >
                    {selected.features.map((f) => (
                      <motion.li key={f} variants={fadeUp} className="flex items-start gap-2">
                        <div
                          className="w-4 h-4 mt-0.5 shrink-0 rounded-full flex items-center justify-center"
                          style={{ background: selected.grad }}
                        >
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm text-gray-600 leading-relaxed">{f}</span>
                      </motion.li>
                    ))}
                  </motion.ul>

                  {/* Footer */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-5 border-t border-gray-100">
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Pricing</p>
                      <p className="text-sm font-semibold text-gray-700">{selected.pricing}</p>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:border-blue-300 hover:text-blue-600 transition-colors bg-white shadow-sm"
                      >
                        Request Demo
                        <ExternalLink className="w-3.5 h-3.5" />
                      </motion.a>
                      <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-white text-sm font-bold shadow-lg relative overflow-hidden border border-white/20"
                        style={{ background: selected.grad }}
                      >
                        <span className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent" />
                        <span className="relative z-10">Buy Now</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          className="mt-14 rounded-2xl p-8 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ background: "linear-gradient(135deg,#1e1b4b,#2563eb 50%,#7c3aed)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 drop-shadow-md">
              Need a Custom System?
            </h3>
            <p className="text-white/80 text-sm mb-5 max-w-lg mx-auto text-pretty">
              Don&apos;t see exactly what you need? Our team builds fully bespoke software tailored to your exact business workflow and requirements.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-sm font-bold shadow-xl relative overflow-hidden"
              style={{ color: "#2563eb" }}
            >
              <span className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent" />
              <span className="relative z-10">Discuss Custom Development</span>
              <ExternalLink className="w-4 h-4 relative z-10" />
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
