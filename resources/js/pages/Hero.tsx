// Hero.tsx
import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-[#0A1326] text-white overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div className="text-center md:text-left">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 text-cyan-400 text-xs mb-4"
            >
              <Sparkles size={14} />
              Nouveau projet
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-5xl font-semibold leading-tight mb-6"
            >
              Transformez vos idées en un projet clair et structuré
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm md:text-base text-gray-300 leading-relaxed mb-8"
            >
              Cette plateforme vous permet d’exprimer précisément vos besoins,
              vos objectifs et vos attentes. En quelques minutes, vous partagez
              les détails essentiels de votre futur site afin d’obtenir une
              proposition adaptée et professionnelle.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center md:justify-start"
            >
              <Link prefetch href='/commencer' className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-[#0A1326] px-6 py-3 text-sm font-medium transition-all duration-300 shadow-lg shadow-cyan-500/20">
                Commencer maintenant
                <ArrowRight size={16} />
              </Link>
            </motion.div>

          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl">
              <img
                src="/ccharge.png"
                alt="Project planning"
                className="w-full h-[320px] md:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1326]/60 to-transparent" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
