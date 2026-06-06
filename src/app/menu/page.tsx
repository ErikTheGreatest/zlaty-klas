import Image from "next/image";

const kategorie = [
  {
    nazev: "Chleby",
    emoji: "🍞",
    produkty: [
      {
        name: "Kváskový chléb",
        desc: "Tradiční recept, dlouhá fermentace, křupavá kůrka a vzdušná střída.",
        price: "89 Kč",
        img: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400&h=300&fit=crop",
        badge: "Bestseller",
      },
      {
        name: "Celozrnný chléb",
        desc: "Plný vlákniny, s semínky slunečnice a lnu. Sytý a zdravý.",
        price: "79 Kč",
        img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop",
        badge: null,
      },
      {
        name: "Žitný chléb",
        desc: "Hutný žitný chléb s kmínem, ideální ke slaným pomazánkám.",
        price: "75 Kč",
        img: "https://images.unsplash.com/photo-1574085733277-851d9d856a3a?w=400&h=300&fit=crop",
        badge: null,
      },
    ],
  },
  {
    nazev: "Pečivo",
    emoji: "🥐",
    produkty: [
      {
        name: "Croissant s máslem",
        desc: "Vrstvený, máslový, s jemnou zlatavou krustou. Klasika, která nikdy neomrzí.",
        price: "39 Kč",
        img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop",
        badge: "Nové",
      },
      {
        name: "Rohlík",
        desc: "Čerstvý, křupavý rohlík — pečený každé ráno od 5:00.",
        price: "8 Kč",
        img: "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=400&h=300&fit=crop",
        badge: null,
      },
      {
        name: "Bagel se sezamem",
        desc: "Pružný bagel posypaný sezamem, výborný s cream cheese.",
        price: "35 Kč",
        img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&h=300&fit=crop",
        badge: null,
      },
    ],
  },
  {
    nazev: "Sladké pečení",
    emoji: "🍩",
    produkty: [
      {
        name: "Šneci se skořicí",
        desc: "Zlatavé, vláčné, plné skořice a křupavého cukru. Skvělé k ranní kávě.",
        price: "45 Kč",
        img: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=400&h=300&fit=crop",
        badge: "Bestseller",
      },
      {
        name: "Tvarohový koláč",
        desc: "Drobenkový koláč s jemnou tvarohovou náplní podle babiččina receptu.",
        price: "42 Kč",
        img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop",
        badge: null,
      },
      {
        name: "Muffin s borůvkami",
        desc: "Nadýchaný muffin plný čerstvých borůvek s vanilkovým těstem.",
        price: "49 Kč",
        img: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&h=300&fit=crop",
        badge: null,
      },
    ],
  },
  {
    nazev: "Nápoje",
    emoji: "☕",
    produkty: [
      {
        name: "Espresso",
        desc: "Silné, aromatické espresso z čerstvě mleté směsi arabiky.",
        price: "55 Kč",
        img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&h=300&fit=crop",
        badge: null,
      },
      {
        name: "Flat white",
        desc: "Jemné espresso s hedvábným mléčným mikrofoamem. Dokonalá rovnováha.",
        price: "75 Kč",
        img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=400&h=300&fit=crop",
        badge: "Oblíbené",
      },
      {
        name: "Horká čokoláda",
        desc: "Hustá horká čokoláda z belgického kakaa, posypaná skořicí.",
        price: "69 Kč",
        img: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400&h=300&fit=crop",
        badge: null,
      },
    ],
  },
];

const badgeColor: Record<string, string> = {
  Bestseller: "bg-zlata text-krem",
  Nové: "bg-cihlova text-krem",
  Oblíbené: "bg-kava text-krem",
};

export default function MenuPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-kava text-krem py-20 px-6 text-center">
        <p className="text-zlata font-medium tracking-widest text-sm uppercase mb-3">Naše nabídka</p>
        <h1 className="font-heading text-5xl font-bold mb-4">Menu</h1>
        <p className="text-krem/70 text-lg max-w-xl mx-auto">
          Vše čerstvé, vše s láskou. Pečeme každý den od časného rána pro váš dokonalý den.
        </p>
      </section>

      {/* Menu kategorie */}
      <section className="py-16 px-6 bg-krem">
        <div className="max-w-6xl mx-auto space-y-20">
          {kategorie.map((kat) => (
            <div key={kat.nazev}>
              {/* Kategorie nadpis */}
              <div className="flex items-center gap-3 mb-10">
                <span className="text-4xl">{kat.emoji}</span>
                <h2 className="font-heading text-3xl font-bold text-kava">{kat.nazev}</h2>
                <div className="flex-1 h-px bg-zlata/30 ml-4" />
              </div>

              {/* Produkty */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {kat.produkty.map((produkt) => (
                  <div
                    key={produkt.name}
                    className="bg-white rounded-2xl overflow-hidden border border-zlata/10 hover:shadow-lg transition-shadow duration-300 group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={produkt.img}
                        alt={produkt.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {produkt.badge && (
                        <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${badgeColor[produkt.badge]}`}>
                          {produkt.badge}
                        </span>
                      )}
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-heading text-lg font-bold text-kava">{produkt.name}</h3>
                        <span className="text-zlata font-bold text-lg shrink-0 ml-2">{produkt.price}</span>
                      </div>
                      <p className="text-kava/60 text-sm leading-relaxed">{produkt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Alergeny */}
      <section className="py-10 px-6 bg-white border-t border-zlata/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-kava/50 text-sm">
            🌾 Všechny produkty mohou obsahovat alergeny. Při alergii nebo intoleranci nás prosím informujte před objednávkou.
          </p>
        </div>
      </section>
    </>
  );
}
