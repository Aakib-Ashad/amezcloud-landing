'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const ventures = [
  {
    name: 'Amez Cloud',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-w6mDaMBgvXUddHhnvc0HlcMIz49IUk.jpg',
    category: 'Cloud Services',
    gradient: 'from-cyan-500 to-blue-500'
  },
    {
    name: 'Amez City',
    logo: 'images/amezcity.svg',
    category: 'Amez Downtown City',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    name: 'Amez Tower',
    logo: '/images/ameztower_logo.svg',
    category: 'Amez Horizon Tower Mall',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    name: 'Amez Prime',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-tIBoXKs1Y48aDMGF8cHPjbCBFNzMO7.jpg',
    category: 'Real Estate Hub',
    gradient: 'from-blue-500 to-violet-500'
  },
  {
    name: 'Amez Visuals',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-mJaVhq66WcaGrgJiEivWAQfEpR405B.jpg',
    category: 'Media & Entertainment',
    gradient: 'from-orange-400 to-pink-500'
  },
  {
    name: 'Amez Freelance',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-YtJyeEOQiyNqAgX7hWBVzXKufCOAhF.jpg',
    category: 'Freelancers Hub',
    gradient: 'from-cyan-400 to-pink-500'
  },
  {
    name: 'Amez University',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-OStqXzgzAAxndeon7RdixTzEyY0V3K.jpg',
    category: 'Education',
    gradient: 'from-red-500 to-orange-500'
  },
  {
    name: 'Amez Club',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-b1Y2o5ijo1lRDTdvZx119tAohDt9m0.jpg',
    category: 'Membership & Loyalty',
    gradient: 'from-amber-500 to-yellow-600'
  },
  {
    name: 'Amez Wallet',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-iyKdxeYL9T4d6XuQsxUL39WyPYxs2J.jpg',
    category: 'FinTech',
    gradient: 'from-violet-500 to-fuchsia-500'
  },
  {
    name: 'Amez Hub',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-kZvmNtukMR0KraaLcyxPTm4cjRp2E3.jpg',
    category: 'Investment & Finance',
    gradient: 'from-emerald-500 to-cyan-500'
  },
  {
    name: 'Amez Health',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-rlo3BXE7s7PcN4bI09dxs3rgaW7XQ8.jpg',
    category: 'Healthcare',
    gradient: 'from-pink-500 to-orange-500'
  },
  {
    name: 'Amez Cards',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-BVNpE11ISs2S4MQOAAx0sSLF7Oj9eu.jpg',
    category: 'Payment Solutions',
    gradient: 'from-indigo-500 to-purple-600'
  },
  {
    name: 'Amez Express',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-MmtovOM2Hx2FdWsYdrmyIphlN3tPml.jpg',
    category: 'E-Commerce',
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    name: 'Amez Organic',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12-tXwRKpfxykUzoqlFZbs4XCKMj4LI1C.jpg',
    category: 'Organic Products',
    gradient: 'from-green-600 to-lime-500'
  },
  {
    name: 'Amez Line',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13-NliIzllaOXqfV2ZMAh8s1yjOQLOO0N.jpg',
    category: 'Crafts & Design',
    gradient: 'from-indigo-600 to-violet-500'
  },
  {
    name: 'Hight-Tech Marketing',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14-VYGDI334gu78VxCZoLNpfCjDiY7Wjc.jpg',
    category: 'Electrical & Electronics',
    gradient: 'from-blue-600 to-red-500'
  },
  {
    name: 'Avoqs',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15-ZFkUDPs83bmOQVzeXMzNS1VqJqT4kY.jpg',
    category: 'Fashion & Lifestyle',
    gradient: 'from-gray-800 to-gray-600'
  },
  {
    name: 'Amez Furns',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/16-6QPTlxMMmVDVkWRvxR2V7sy5CiTddO.jpg',
    category: 'Furnitures Hub',
    gradient: 'from-rose-600 to-purple-600'
  },
  {
    name: 'Firebowl',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/17-DP8pRKf93FBmFoBgCiSSxaCMu0x7JM.jpg',
    category: 'Food & Culinary',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    name: 'iLUSTRA',
    logo: 'images/ilustra.svg',
    category: 'Tech that fits your life',
    gradient: 'from-rose-600 to-purple-600'
  },
  {
    name: 'Vhenever',
    logo: 'images/vhenever.svg',
    category: 'Making special moments unforgettable',
    gradient: 'from-orange-500 to-red-500'
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function VenturesShowcase() {
  return (
    <section className="py-24 bg-linear-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 rounded-full bg-linear-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold tracking-wide uppercase shadow-lg">
              Our Ventures
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-purple-600 to-pink-600">
              17+ Innovative
            </span>{' '}
            Subsidiaries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-pretty">
            A diverse portfolio of ventures spanning technology, finance, healthcare, education, and lifestyle services — all under the Amez Cloud ecosystem.
          </p>
        </motion.div>

        {/* Ventures Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {ventures.map((venture, index) => (
            <motion.div
              key={venture.name}
              variants={item}
              whileHover={{ 
                y: -8, 
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-linear-to-br ${venture.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Logo container */}
                <div className="aspect-square p-6 flex items-center justify-center relative">
                  <div className="relative w-full h-full">
                    <Image
                      src={venture.logo}
                      alt={venture.name}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Info overlay - appears on hover */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute inset-x-0 bottom-0 bg-linear-to-t from-gray-900 via-gray-900/95 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <h3 className="text-white font-semibold text-sm mb-1 line-clamp-1">
                    {venture.name}
                  </h3>
                  <p className="text-gray-300 text-xs line-clamp-1">
                    {venture.category}
                  </p>
                </motion.div>

                {/* Corner gradient accent */}
                <div className={`absolute top-0 right-0 w-16 h-16 bg-linear-to-br ${venture.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />
              </div>

              {/* Index number badge */}
              <div className="absolute -top-2 -left-2 w-7 h-7 bg-linear-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {String(index + 1).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '17+', label: 'Active Ventures' },
            { number: '12', label: 'Industries' },
            { number: '100K+', label: 'Customers Served' },
            { number: '2016', label: 'Established' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-600 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            Explore All Ventures
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
