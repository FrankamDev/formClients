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
    phone: "",
    company: "",
    city: "",
    website_type: "",
    budget: "",
    deadline: "",
    features: [] as string[],
    message: "",
  });

  const toggleFeature = (feature: string) => {
    if (data.features.includes(feature)) {
      setData(
        "features",
        data.features.filter((f) => f !== feature)
      );
    } else {
      setData("features", [...data.features, feature]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    post("/lead", {
      onSuccess: () => {
        reset();
        setOpen(false);
      },
    });
  };

  const websiteTypes = [
    "E-commerce",
    "Site vitrine",
    "E-learning",
    "Application web SaaS",
    "Blog professionnel",
    "Marketplace",
    "Portfolio",
  ];

  const featureOptions = [
    "Paiement en ligne",
    "Espace membre",
    "Dashboard admin",
    "Chat en ligne",
    "Multi-langue",
  ];

  return (
    <>
      <section className="bg-[#0A1326] text-white min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">

          <div>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-6">
              Structurons votre projet sérieusement
            </h1>

            <p className="text-gray-300 mb-8 text-sm md:text-base">
              Donnez toutes les informations nécessaires pour éviter
              les erreurs, pertes de temps et incompréhensions.
            </p>

            <button
              onClick={() => setOpen(true)}
              className="bg-cyan-500 hover:bg-cyan-400 text-[#0A1326] px-6 py-3 rounded-full text-sm font-medium transition"
            >
              Commencer
            </button>
          </div>

          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
              alt="Project"
              className="rounded-2xl w-full h-[500px] object-cover shadow-2xl"
            />
          </div>

        </div>
      </section>

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
                Informations du projet
              </h2>

              {processing ? (
                <div className="space-y-4">
                  <Skeleton height={40} baseColor="#112240" highlightColor="#1b2f4d" />
                  <Skeleton height={40} baseColor="#112240" highlightColor="#1b2f4d" />
                  <Skeleton height={200} baseColor="#112240" highlightColor="#1b2f4d" />
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* Identité */}
                  <input
                    type="text"
                    placeholder="Nom complet"
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                    className="input-style"
                    required
                  />

                  <input
                    type="email"
                    placeholder="Email"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                    className="input-style"
                    required
                  />

                  <input
                    type="tel"
                    placeholder="Téléphone"
                    value={data.phone}
                    onChange={(e) => setData("phone", e.target.value)}
                    className="input-style"
                  />

                  <input
                    type="text"
                    placeholder="Nom de l'entreprise"
                    value={data.company}
                    onChange={(e) => setData("company", e.target.value)}
                    className="input-style"
                  />

                  <input
                    type="text"
                    placeholder="Ville"
                    value={data.city}
                    onChange={(e) => setData("city", e.target.value)}
                    className="input-style"
                  />

                  {/* Select */}
                  <select
                    value={data.website_type}
                    onChange={(e) => setData("website_type", e.target.value)}
                    className="input-style"
                    required
                  >
                    <option value="">Type de site</option>
                    {websiteTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>

                  {/* Budget radio */}
                  <div>
                    <p className="text-xs text-gray-400 mb-2">Budget estimatif</p>
                    <div className="flex gap-3 flex-wrap">
                      {["<1000€", "1000€-5000€", "5000€+"].map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setData("budget", b)}
                          className={`px-3 py-2 rounded-full text-xs border ${
                            data.budget === b
                              ? "bg-cyan-500 text-[#0A1326] border-cyan-500"
                              : "border-cyan-500/30 text-gray-300"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <p className="text-xs text-gray-400 mb-2">
                      Fonctionnalités souhaitées
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {featureOptions.map((feature) => (
                        <button
                          type="button"
                          key={feature}
                          onClick={() => toggleFeature(feature)}
                          className={`text-xs px-3 py-2 rounded-lg border ${
                            data.features.includes(feature)
                              ? "bg-cyan-500 text-[#0A1326] border-cyan-500"
                              : "border-cyan-500/20 text-gray-300"
                          }`}
                        >
                          {feature}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Deadline */}
                  <input
                    type="date"
                    value={data.deadline}
                    onChange={(e) => setData("deadline", e.target.value)}
                    className="input-style"
                  />

                  {/* Message */}
                  <textarea
                    placeholder="Décrivez votre projet en détail..."
                    value={data.message}
                    onChange={(e) => setData("message", e.target.value)}
                    className="input-style h-32 resize-none"
                    required
                  />

                  <button
                    type="submit"
                    disabled={processing}
                    className="w-full bg-cyan-500 text-[#0A1326] py-3 rounded-lg text-sm font-medium"
                  >
                    Envoyer le cahier des charges
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

      <style jsx>{`
        .input-style {
          width: 100%;
          padding: 12px;
          border-radius: 10px;
          background: #112240;
          color: white;
          font-size: 14px;
          outline: none;
          border: 1px solid rgba(6, 182, 212, 0.2);
        }

        .input-style:focus {
          border-color: #06b6d4;
        }
      `}</style>
    </>
  );
}