import Link from "next/link";
import Image from "next/image";

const features = [
  {
    icon: "🌾",
    title: "Řemeslné zpracování",
    text: "Každý bochník ručně tvarovaný podle tradičních receptur.",
  },
  {
    icon: "🕖",
    title: "Každý den čerstvé",
    text: "Pečeme od 4:00 ráno, aby byl váš chléb vždy teplý a voňavý.",
  },
  {
    icon: "🌿",
    title: "Lokální suroviny",
    text: "Spolupracujeme s českými farmáři a mlýny do 50 km od Prahy.",
  },
];

const bestsellers = [
  {
    name: "Kváskový chléb",
    desc: "Náš vlajkový produkt — křupavá kůrka, vzdušná střída.",
    price: "89 Kč",
    img: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400&h=300&fit=crop",
  },
  {
    name: "Šneci se skořicí",
    desc: "Zlatavé, vláčné, plné skořice a křupavého cukru.",
    price: "45 Kč",
    img: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=400&h=300&fit=crop",
  },
  {
    name: "Croissant s máslem",
    desc: "Vrstvený, máslový, s jemnou zlatavou krustou.",
    price: "39 Kč",
    img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=1600&h=900&fit=crop"
          alt="Pekárna U Zlatého klasu"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-kava/50" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className="text-zlata font-medium tracking-widest text-sm uppercase mb-4">
            Řemeslná pekárna · Praha 2
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-krem leading-tight mb-6">
            Pečeno s láskou,<br />každý den
          </h1>
          <p className="text-krem/80 text-lg md:text-xl mb-10 leading-relaxed">
            Čerstvý chléb, voňavé koláče a skvělá káva — přesně to, co váš den potřebuje k dobrému startu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="bg-zlata text-krem font-medium px-8 py-4 rounded-full hover:bg-cihlova transition-colors duration-300 text-lg"
            >
              Prohlédnout menu
            </Link>
            <Link
              href="/o-nas"
              className="border-2 border-krem text-krem font-medium px-8 py-4 rounded-full hover:bg-krem hover:text-kava transition-colors duration-300 text-lg"
            >
              Náš příběh
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-krem/60">
          <span className="text-xs tracking-widest uppercase">Scrolluj</span>
          <div className="w-px h-8 bg-krem/40 animate-pulse" />
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-krem">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-zlata font-medium tracking-widest text-sm uppercase mb-3">Proč my?</p>
            <h2 className="font-heading text-4xl font-bold text-kava">Tradice, která chutná</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-zlata/10"
              >
                <span className="text-5xl mb-5 block">{f.icon}</span>
                <h3 className="font-heading text-xl font-bold text-kava mb-3">{f.title}</h3>
                <p className="text-kava/60 leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-zlata font-medium tracking-widest text-sm uppercase mb-3">Nejoblíbenější</p>
            <h2 className="font-heading text-4xl font-bold text-kava">Zákazníci milují</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bestsellers.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl overflow-hidden border border-zlata/10 hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-heading text-xl font-bold text-kava">{item.name}</h3>
                    <span className="text-zlata font-bold text-lg">{item.price}</span>
                  </div>
                  <p className="text-kava/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-block border-2 border-zlata text-zlata font-medium px-8 py-3 rounded-full hover:bg-zlata hover:text-krem transition-colors duration-300"
            >
              Celé menu →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-6 bg-kava text-krem text-center">
        <div className="max-w-2xl mx-auto">
          <span className="text-5xl mb-6 block">☕</span>
          <h2 className="font-heading text-4xl font-bold mb-4">Přijďte na kávu</h2>
          <p className="text-krem/70 text-lg mb-8 leading-relaxed">
            Otevřeno každý den. Čerstvé pečivo, přátelský personál a vůně čerstvého chleba na vás čeká.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-zlata text-krem font-medium px-8 py-4 rounded-full hover:bg-cihlova transition-colors duration-300 text-lg"
          >
            Jak nás najít
          </Link>
        </div>
      </section>
    </>
  );
}
