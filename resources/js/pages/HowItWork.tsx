import { motion } from "framer-motion";
import { ClipboardList, Send, Rocket } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="relative bg-[#0A1326] text-white py-24 px-6 overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">
            Comment ça fonctionne ?
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
            Un processus simple, structuré et efficace pour transformer vos idées
            en un projet clair et exploitable.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-10">

          <Step
            icon={<ClipboardList size={22} />}
            number="01"
            title="Décrivez votre besoin"
            text="Remplissez le formulaire en expliquant votre projet, vos objectifs et vos attentes."
          />

          <Step
            icon={<Send size={22} />}
            number="02"
            title="Analyse structurée"
            text="Les informations sont centralisées et organisées pour éviter toute confusion."
          />

          <Step
            icon={<Rocket size={22} />}
            number="03"
            title="Lancement du projet"
            text="Avec un cahier des charges clair, le développement démarre sur des bases solides."
          />

        </div>

        {/* Floating line animation */}
        <motion.div
          animate={{ x: [0, 20, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mt-20 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
        />

      </div>
    </section>
  );
}

function Step({
  icon,
  number,
  title,
  text,
}: {
  icon: React.ReactNode;
  number: string;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="relative bg-[#112240] p-6 rounded-2xl border border-cyan-500/10 hover:border-cyan-500/30 transition"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="text-cyan-400">{icon}</div>
        <span className="text-xs text-cyan-500 font-semibold">
          {number}
        </span>
      </div>

      <h3 className="text-base font-medium mb-3">
        {title}
      </h3>

      <p className="text-xs text-gray-400 leading-relaxed">
        {text}
      </p>
    </motion.div>
  );
}