import Image from "next/image";
import Link from "next/link";

const hodnoty = [
  {
    emoji: "👐",
    title: "Ruční práce",
    text: "Každý bochník, každý koláč — vše tvarujeme ručně. Žádné stroje, žádné zkratky.",
  },
  {
    emoji: "🌱",
    title: "Udržitelnost",
    text: "Pracujeme s lokálními farmáři, minimalizujeme odpad a obalujeme ekologicky.",
  },
  {
    emoji: "👨‍👩‍👧",
    title: "Rodinná tradice",
    text: "Receptury předávané po generace. Pečeme podle receptů prababičky Boženy.",
  },
  {
    emoji: "❤️",
    title: "Komunita",
    text: "Jsme sousedská pekárna. Známe naše zákazníky jménem a víme, co mají rádi.",
  },
];

const team = [
  {
    name: "Pavel Novák",
    role: "Hlavní pekař & zakladatel",
    bio: "Pavel se pečení věnuje přes 20 let. Vyučil se v tradičních pekárnách v Německu a Francii, než se vrátil do Prahy otevřít vlastní pekárnu.",
    img: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=400&h=400&fit=crop",
  },
  {
    name: "Markéta Nováková",
    role: "Cukrářka & spoluzakladatelka",
    bio: "Markéta stojí za všemi sladkými výtvory. Její tvarohový koláč podle receptu babičky Boženy je legendou celé čtvrti.",
    img: "https://images.unsplash.com/photo-1595257841889-eca2678454e2?w=400&h=400&fit=crop",
  },
  {
    name: "Tomáš Král",
    role: "Baristá & správce kavárny",
    bio: "Tomáš se o kávu stará s takovou péčí jako Pavel o chléb. Jeho flat white si zákazníci chválí rok co rok.",
    img: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=400&h=400&fit=crop",
  },
];

const milniky = [
  { rok: "2008", text: "Pavel otevírá malou pekárnu na Náměstí Míru s jediným pecí a třemi druhy chleba." },
  { rok: "2012", text: "Přichází Markéta a rozšiřuje nabídku o sladké pečení. Fronta před pekárnou se zdvojnásobí." },
  { rok: "2016", text: "Rekonstrukce a rozšíření — přibývá kavárna a místa k sezení pro 20 hostů." },
  { rok: "2020", text: "I přes pandemii zůstáváme otevřeni. Zákazníci nás podpoří — prodeje rostou díky rozvozu." },
  { rok: "2024", text: "Slavíme 16 let! Nová pec, nové receptury a stále stejná láska k řemeslu." },
];

export default function ONasPage() {
  return (
    <>
      {/* Header */}
      <section className="relative py-28 px-6 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&h=600&fit=crop"
          alt="O nás"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-kava/70" />
        <div className="relative z-10 text-center text-krem max-w-2xl mx-auto">
          <p className="text-zlata font-medium tracking-widest text-sm uppercase mb-3">Náš příběh</p>
          <h1 className="font-heading text-5xl font-bold mb-4">O nás</h1>
          <p className="text-krem/80 text-lg leading-relaxed">
            Jsme rodinná pekárna v srdci Prahy 2. Pečeme s láskou od roku 2008.
          </p>
        </div>
      </section>

      {/* Příběh */}
      <section className="py-20 px-6 bg-krem">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop"
              alt="Pekárna"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-zlata font-medium tracking-widest text-sm uppercase mb-3">Jak to začalo</p>
            <h2 className="font-heading text-4xl font-bold text-kava mb-6">Z lásky k chlebu</h2>
            <p className="text-kava/70 leading-relaxed mb-4">
              V roce 2008 otevřel Pavel Novák malou pekárnu na Náměstí Míru s jediným cílem — péct chléb tak, jak ho pekla jeho babička. Bez konzervantů, bez spěchu, s láskou a časem.
            </p>
            <p className="text-kava/70 leading-relaxed mb-4">
              Dnes jsme víc než pekárna. Jsme místo, kde se sousedé potkávají, kde voní čerstvý chléb a kde každý zákazník odchází s úsměvem.
            </p>
            <p className="text-kava/70 leading-relaxed">
              Naše receptury jsou stále stejné — prověřené generacemi. Jen přidáváme nové nápady a sezónní speciality, aby byl každý den v pekárně trochu jiný.
            </p>
          </div>
        </div>
      </section>

      {/* Hodnoty */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-zlata font-medium tracking-widest text-sm uppercase mb-3">Co nás řídí</p>
            <h2 className="font-heading text-4xl font-bold text-kava">Naše hodnoty</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {hodnoty.map((h) => (
              <div key={h.title} className="text-center p-6 rounded-2xl bg-krem hover:shadow-md transition-shadow duration-300">
                <span className="text-5xl mb-4 block">{h.emoji}</span>
                <h3 className="font-heading text-lg font-bold text-kava mb-2">{h.title}</h3>
                <p className="text-kava/60 text-sm leading-relaxed">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tým */}
      <section className="py-20 px-6 bg-krem">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-zlata font-medium tracking-widest text-sm uppercase mb-3">Lidé za pekárnou</p>
            <h2 className="font-heading text-4xl font-bold text-kava">Náš tým</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((clen) => (
              <div key={clen.name} className="text-center group">
                <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto mb-5 border-4 border-zlata/20 group-hover:border-zlata transition-colors duration-300">
                  <Image
                    src={clen.img}
                    alt={clen.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-heading text-xl font-bold text-kava mb-1">{clen.name}</h3>
                <p className="text-zlata text-sm font-medium mb-3">{clen.role}</p>
                <p className="text-kava/60 text-sm leading-relaxed">{clen.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Časová osa */}
      <section className="py-20 px-6 bg-kava text-krem">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-zlata font-medium tracking-widest text-sm uppercase mb-3">Historie</p>
            <h2 className="font-heading text-4xl font-bold">Naše cesta</h2>
          </div>
          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-px bg-zlata/30" />
            <div className="space-y-10">
              {milniky.map((m) => (
                <div key={m.rok} className="flex gap-8 items-start">
                  <span className="font-heading text-zlata font-bold text-xl w-12 shrink-0 pt-1">{m.rok}</span>
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-zlata" />
                    <p className="text-krem/70 leading-relaxed">{m.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-krem text-center">
        <h2 className="font-heading text-3xl font-bold text-kava mb-4">Přijďte nás poznat osobně</h2>
        <p className="text-kava/60 mb-8">Těšíme se na vás každý den od 7:00 ráno.</p>
        <Link
          href="/kontakt"
          className="inline-block bg-zlata text-krem font-medium px-8 py-4 rounded-full hover:bg-cihlova transition-colors duration-300"
        >
          Kde nás najdete →
        </Link>
      </section>
    </>
  );
}
