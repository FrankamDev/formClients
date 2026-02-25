import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="bg-[#0A1326] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-semibold mb-6"
        >
          Prêt à structurer votre projet correctement ?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 text-sm md:text-base mb-8"
        >
          Remplissez le formulaire maintenant et démarrez sur des bases solides.
        </motion.p>
 
        <Link  href='/commencer' prefetch
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-cyan-500 text-[#0A1326] px-8 py-3 rounded-full text-sm font-medium shadow-lg shadow-cyan-500/20"
        >
          Commencer
        </Link>

      </div>
    </section>
  );
}