"use client";

import { useState } from "react";

const hodiny = [
  { den: "Pondělí – Pátek", cas: "7:00 – 18:00" },
  { den: "Sobota", cas: "8:00 – 14:00" },
  { den: "Neděle", cas: "8:00 – 12:00" },
];

export default function KontaktPage() {
  const [form, setForm] = useState({ jmeno: "", email: "", zprava: "" });
  const [odeslano, setOdeslano] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOdeslano(true);
    setForm({ jmeno: "", email: "", zprava: "" });
  };

  return (
    <>
      {/* Header */}
      <section className="bg-kava text-krem py-20 px-6 text-center">
        <p className="text-zlata font-medium tracking-widest text-sm uppercase mb-3">Jsme tu pro vás</p>
        <h1 className="font-heading text-5xl font-bold mb-4">Kontakt</h1>
        <p className="text-krem/70 text-lg max-w-xl mx-auto">
          Máte otázku, přání nebo chcete objednat dort na zakázku? Napište nám!
        </p>
      </section>

      <section className="py-20 px-6 bg-krem">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Kontaktní informace */}
          <div className="flex flex-col gap-10">

            {/* Adresa & info */}
            <div>
              <p className="text-zlata font-medium tracking-widest text-sm uppercase mb-5">Kde nás najdete</p>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-1">📍</span>
                  <div>
                    <p className="font-semibold text-kava">Adresa</p>
                    <p className="text-kava/60">Náměstí Míru 12</p>
                    <p className="text-kava/60">120 00 Praha 2</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-1">📞</span>
                  <div>
                    <p className="font-semibold text-kava">Telefon</p>
                    <a href="tel:+420123456789" className="text-zlata hover:text-cihlova transition-colors duration-300">
                      +420 123 456 789
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-1">✉️</span>
                  <div>
                    <p className="font-semibold text-kava">E-mail</p>
                    <a href="mailto:info@zlatyklas.cz" className="text-zlata hover:text-cihlova transition-colors duration-300">
                      info@zlatyklas.cz
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Otevírací doba */}
            <div>
              <p className="text-zlata font-medium tracking-widest text-sm uppercase mb-5">Otevírací doba</p>
              <div className="bg-white rounded-2xl p-6 border border-zlata/10 space-y-3">
                {hodiny.map((h) => (
                  <div key={h.den} className="flex justify-between items-center py-2 border-b border-zlata/10 last:border-0">
                    <span className="text-kava font-medium">{h.den}</span>
                    <span className="text-zlata font-semibold">{h.cas}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mapa placeholder */}
            <div>
              <p className="text-zlata font-medium tracking-widest text-sm uppercase mb-5">Mapa</p>
              <div className="rounded-2xl overflow-hidden border border-zlata/10 h-56 bg-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.748!2d14.4378!3d50.0755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94f0b7b7b7b7%3A0x0!2sN%C3%A1m%C4%9Bst%C3%AD+M%C3%ADru%2C+Praha+2!5e0!3m2!1scs!2scz!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Formulář */}
          <div>
            <p className="text-zlata font-medium tracking-widest text-sm uppercase mb-5">Napište nám</p>
            <div className="bg-white rounded-2xl p-8 border border-zlata/10">
              {odeslano ? (
                <div className="text-center py-12">
                  <span className="text-6xl mb-6 block">✅</span>
                  <h3 className="font-heading text-2xl font-bold text-kava mb-3">Zpráva odeslána!</h3>
                  <p className="text-kava/60 mb-6">Děkujeme za vaši zprávu. Ozveme se vám do 24 hodin.</p>
                  <button
                    onClick={() => setOdeslano(false)}
                    className="text-zlata hover:text-cihlova transition-colors duration-300 font-medium"
                  >
                    Odeslat další zprávu →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-kava mb-2">Jméno a příjmení</label>
                    <input
                      type="text"
                      required
                      value={form.jmeno}
                      onChange={(e) => setForm({ ...form, jmeno: e.target.value })}
                      placeholder="Jana Nováková"
                      className="w-full px-4 py-3 rounded-xl border border-zlata/20 bg-krem focus:outline-none focus:border-zlata transition-colors duration-300 text-kava placeholder:text-kava/30"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-kava mb-2">E-mail</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jana@example.cz"
                      className="w-full px-4 py-3 rounded-xl border border-zlata/20 bg-krem focus:outline-none focus:border-zlata transition-colors duration-300 text-kava placeholder:text-kava/30"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-kava mb-2">Zpráva</label>
                    <textarea
                      required
                      rows={5}
                      value={form.zprava}
                      onChange={(e) => setForm({ ...form, zprava: e.target.value })}
                      placeholder="Dobrý den, rád bych se zeptal..."
                      className="w-full px-4 py-3 rounded-xl border border-zlata/20 bg-krem focus:outline-none focus:border-zlata transition-colors duration-300 text-kava placeholder:text-kava/30 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-zlata text-krem font-medium py-4 rounded-full hover:bg-cihlova transition-colors duration-300 text-lg"
                  >
                    Odeslat zprávu
                  </button>
                  <p className="text-xs text-kava/40 text-center">
                    Odpovídáme do 24 hodin v pracovní dny.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
