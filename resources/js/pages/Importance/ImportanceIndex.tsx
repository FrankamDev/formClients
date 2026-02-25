import { motion } from "framer-motion";
import {
  MessageSquare,
  AlertTriangle,
  Clock,
  DollarSign,
  CheckCircle,
} from "lucide-react";

export default function ImportanceIndex() {
  return (
    <section className="relative bg-[#0A1326] text-white py-24 px-6 overflow-hidden">

      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* TEXT CONTENT */}
        <div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-4xl font-semibold leading-tight mb-8"
          >
            Pourquoi un cahier des charges est indispensable ?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-sm md:text-base leading-relaxed mb-10"
          >
            Ici j’explique pourquoi il est essentiel de rédiger un cahier des charges
            avant de lancer un projet web. Cela permet de mieux communiquer avec les
            prestataires, d’éviter les malentendus et d’obtenir un résultat conforme
            aux attentes. Un projet sans cadre clair peut rapidement devenir coûteux
            en temps et en argent. Ce document n’est pas une formalité, mais une
            étape stratégique pour réussir.
          </motion.p>

          <div className="space-y-6">

            <Feature
              icon={<MessageSquare size={18} />}
              title="Meilleure communication"
              text="Un cadre clair facilite les échanges avec les développeurs et designers."
            />

            <Feature
              icon={<AlertTriangle size={18} />}
              title="Éviter les malentendus"
              text="Réduit les erreurs dues aux interprétations différentes."
            />

            <Feature
              icon={<Clock size={18} />}
              title="Gain de temps"
              text="Moins de corrections tardives = développement plus rapide."
            />

            <Feature
              icon={<DollarSign size={18} />}
              title="Réduction des coûts"
              text="Limiter les modifications imprévues évite des dépenses supplémentaires."
            />

            <Feature
              icon={<CheckCircle size={18} />}
              title="Résultat conforme aux attentes"
              text="Le projet final correspond exactement aux objectifs définis."
            />

          </div>
        </div>

        {/* VISUAL SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >

          <div className="rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
              alt="Planning"
              className="w-full h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1326]/80 to-transparent" />
          </div>

          {/* Infinite floating badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-6 left-6 bg-cyan-500 text-[#0A1326] px-4 py-2 rounded-full text-xs font-medium shadow-lg"
          >
            Étape essentielle d’un projet réussi
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex gap-4"
    >
      <div className="text-cyan-400 mt-1">{icon}</div>
      <div>
        <h3 className="text-sm md:text-base font-medium mb-1">
          {title}
        </h3>
        <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
          {text}
        </p>
      </div>
    </motion.div>
  );
}