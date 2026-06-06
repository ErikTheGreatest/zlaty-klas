"use client";

import Image from "next/image";
import { useState } from "react";

const fotky = [
  {
    src: "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=800&h=600&fit=crop",
    alt: "Čerstvý chléb z pece",
    kategorie: "Pečivo",
  },
  {
    src: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=800&h=600&fit=crop",
    alt: "Kváskový chléb",
    kategorie: "Pečivo",
  },
  {
    src: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=800&h=600&fit=crop",
    alt: "Šneci se skořicí",
    kategorie: "Sladké",
  },
  {
    src: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&h=600&fit=crop",
    alt: "Croissanty",
    kategorie: "Pečivo",
  },
  {
    src: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&h=600&fit=crop",
    alt: "Tvarohový koláč",
    kategorie: "Sladké",
  },
  {
    src: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=800&h=600&fit=crop",
    alt: "Muffiny s borůvkami",
    kategorie: "Sladké",
  },
  {
    src: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&h=600&fit=crop",
    alt: "Ranní espresso",
    kategorie: "Kavárna",
  },
  {
    src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&h=600&fit=crop",
    alt: "Flat white",
    kategorie: "Kavárna",
  },
  {
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    alt: "Interiér pekárny",
    kategorie: "Pekárna",
  },
  {
    src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop",
    alt: "Čerstvé pečivo na pultu",
    kategorie: "Pekárna",
  },
  {
    src: "https://images.unsplash.com/photo-1574085733277-851d9d856a3a?w=800&h=600&fit=crop",
    alt: "Žitný chléb",
    kategorie: "Pečivo",
  },
  {
    src: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=800&h=600&fit=crop",
    alt: "Horká čokoláda",
    kategorie: "Kavárna",
  },
];

const kategorie = ["Vše", "Pečivo", "Sladké", "Kavárna", "Pekárna"];

export default function GaleriePage() {
  const [aktivni, setAktivni] = useState("Vše");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = aktivni === "Vše" ? fotky : fotky.filter((f) => f.kategorie === aktivni);

  return (
    <>
      {/* Header */}
      <section className="bg-kava text-krem py-20 px-6 text-center">
        <p className="text-zlata font-medium tracking-widest text-sm uppercase mb-3">Pohled do pekárny</p>
        <h1 className="font-heading text-5xl font-bold mb-4">Galerie</h1>
        <p className="text-krem/70 text-lg max-w-xl mx-auto">
          Nahlédněte do světa čerstvého pečení — od rozpálené pece až po první ranní kávu.
        </p>
      </section>

      {/* Filtry */}
      <section className="bg-krem py-8 px-6 border-b border-zlata/10">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-3 justify-center">
          {kategorie.map((kat) => (
            <button
              key={kat}
              onClick={() => setAktivni(kat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                aktivni === kat
                  ? "bg-zlata text-krem"
                  : "bg-white text-kava border border-zlata/20 hover:border-zlata hover:text-zlata"
              }`}
            >
              {kat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 px-6 bg-krem">
        <div className="max-w-6xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {filtered.map((foto, i) => (
            <div
              key={foto.src}
              className="relative overflow-hidden rounded-2xl cursor-pointer group break-inside-avoid"
              onClick={() => setLightbox(fotky.indexOf(foto))}
            >
              <Image
                src={foto.src}
                alt={foto.alt}
                width={800}
                height={600}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-kava/0 group-hover:bg-kava/40 transition-colors duration-300 flex items-end p-5">
                <span className="text-krem font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 transition-transform">
                  {foto.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-kava/90 z-50 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-krem text-4xl hover:text-zlata transition-colors duration-300"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>
          <button
            className="absolute left-6 text-krem text-4xl hover:text-zlata transition-colors duration-300 px-4"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox - 1 + fotky.length) % fotky.length);
            }}
          >
            ‹
          </button>
          <div
            className="relative max-w-4xl w-full max-h-[80vh] rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={fotky[lightbox].src}
              alt={fotky[lightbox].alt}
              width={1200}
              height={900}
              className="w-full h-full object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-kava/70 text-krem px-6 py-3 text-sm">
              {fotky[lightbox].alt} · {fotky[lightbox].kategorie}
            </div>
          </div>
          <button
            className="absolute right-6 text-krem text-4xl hover:text-zlata transition-colors duration-300 px-4"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % fotky.length);
            }}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
