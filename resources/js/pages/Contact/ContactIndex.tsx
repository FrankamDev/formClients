import { useForm } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ContactIndex() {
  const [open, setOpen] = useState(false);

  const { data, setData, post, processing, reset } = useForm({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    post("/lead", {
      onSuccess: () => {
        reset();
        setOpen(false);
      },
    });
  };

  return (
    <>
      {/* HERO */}
      <section className="bg-[#0A1326] text-white min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">

          <div>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-6">
              Décrivez votre projet en toute simplicité
            </h1>

            <p className="text-gray-300 mb-8 text-sm md:text-base">
              Partagez vos besoins, vos objectifs et vos attentes.
              Nous transformons vos idées en un projet structuré et professionnel.
            </p>

            <button
              onClick={() => setOpen(true)}
              className="bg-cyan-500 hover:bg-cyan-400 text-[#0A1326] px-6 py-3 rounded-full text-sm font-medium transition"
            >
              Commencer
            </button>
          </div>

          {/* IMAGE DESKTOP */}
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
              alt="Project"
              className="rounded-2xl w-full h-[500px] object-cover shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* MODAL MOBILE STYLE */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 120 }}
            className="fixed inset-0 bg-[#0A1326] z-50 p-6 overflow-y-auto"
          >
            <div className="max-w-md mx-auto">

              <h2 className="text-xl font-semibold mb-6 text-center">
                Vos informations
              </h2>

              {processing ? (
                <div className="space-y-4">
                  <Skeleton height={40} baseColor="#112240" highlightColor="#1b2f4d" />
                  <Skeleton height={40} baseColor="#112240" highlightColor="#1b2f4d" />
                  <Skeleton height={120} baseColor="#112240" highlightColor="#1b2f4d" />
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">

                  <input
                    type="text"
                    placeholder="Nom"
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                    className="w-full p-3 rounded-lg bg-[#112240] text-white text-sm outline-none"
                    required
                  />

                  <input
                    type="email"
                    placeholder="Email"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                    className="w-full p-3 rounded-lg bg-[#112240] text-white text-sm outline-none"
                    required
                  />

                  <textarea
                    placeholder="Décrivez votre besoin..."
                    value={data.message}
                    onChange={(e) => setData("message", e.target.value)}
                    className="w-full p-3 rounded-lg bg-[#112240] text-white text-sm outline-none h-32 resize-none"
                    required
                  />

                  <button
                    type="submit"
                    disabled={processing}
                    className="w-full bg-cyan-500 text-[#0A1326] py-3 rounded-lg text-sm font-medium"
                  >
                    Envoyer
                  </button>

                </form>
              )}

              <button
                onClick={() => setOpen(false)}
                className="mt-6 text-gray-400 text-sm w-full"
              >
                Fermer
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}