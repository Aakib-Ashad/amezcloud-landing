import Image from "next/image";

export default function Career() {
  return (
    <section className="py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">

        {/* ── Section 1: Connect with us effortlessly ── */}
        <div className="relative flex items-center justify-between gap-6 rounded-2xl border border-gray-200 bg-white shadow-sm px-10 py-8 overflow-hidden">
          {/* Left: text */}
          <div className="flex-1 max-w-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Connect with us effortlessly
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              We&apos;re here to listen, assist, and collaborate. Reach out to our
              dedicated team for any inquiries, support, or partnerships.
            </p>
          </div>

          {/* Center: illustration */}
          <div className="flex-shrink-0 w-40 h-40 relative">
            <Image
              src="/support.png"
              alt="Support illustration"
              fill
              className="object-contain"
            />
          </div>

          {/* Right: CTA button */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold text-sm px-6 py-3 rounded-full"
            >
              Get Expert Support
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/20">
                →
              </span>
            </a>
          </div>
        </div>

        {/* ── Section 2: Empower Your Dream Career ── */}
        <div className="relative rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden min-h-[600px]">
          {/* Background image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[150%] h-[150%]" style={{ animation: "floatUpDown 4s ease-in-out infinite" }}>
              <Image
                src="/contact_14_back.png"
                alt="Background"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Content – centered */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-8 py-16 min-h-[600px]">
            <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">
              YOU CAN DO ANYTHING IN THIS WORLD, AS LONG AS YOU CAN NAVIGATE IT.
            </p>

            <h2 className="text-4xl font-bold text-blue-600 leading-tight mb-4">
              Empower Your Dream Career With
              <br />
              Amez Team
            </h2>

            <p className="text-gray-700 font-medium text-base max-w-xl mb-8">
              Join our innovative team, where opportunities for growth and
              excellence abound.
            </p>

            <a
              href="/careers"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold text-sm px-8 py-3 rounded-full"
            >
              Access Job Opportunities
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/20">
                →
              </span>
            </a>
          </div>
        </div>

        <style>{`
          @keyframes floatUpDown {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
        `}</style>

      </div>
    </section>
  );
}