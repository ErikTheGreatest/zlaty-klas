import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-kava text-krem/80">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌾</span>
            <span className="font-heading text-xl font-bold text-krem">U Zlatého klasu</span>
          </div>
          <p className="text-sm leading-relaxed text-krem/60">
            Řemeslná pekárna s láskou k tradici. Každý den čerstvé pečivo, koláče a káva pro váš dobrý den.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-3">
          <h4 className="font-heading text-krem font-semibold text-lg">Navigace</h4>
          {[
            { href: "/", label: "Úvod" },
            { href: "/menu", label: "Menu" },
            { href: "/o-nas", label: "O nás" },
            { href: "/galerie", label: "Galerie" },
            { href: "/kontakt", label: "Kontakt" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-krem/60 hover:text-zlata transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <h4 className="font-heading text-krem font-semibold text-lg">Kontakt</h4>
          <p className="text-sm text-krem/60">Náměstí Míru 12, Praha 2</p>
          <p className="text-sm text-krem/60">Po–Pá: 7:00 – 18:00</p>
          <p className="text-sm text-krem/60">So–Ne: 8:00 – 14:00</p>
          <a
            href="tel:+420123456789"
            className="text-sm text-zlata hover:text-cihlova transition-colors duration-300"
          >
            +420 123 456 789
          </a>
          <a
            href="mailto:info@zlatyklas.cz"
            className="text-sm text-zlata hover:text-cihlova transition-colors duration-300"
          >
            info@zlatyklas.cz
          </a>
        </div>
      </div>

      <div className="border-t border-krem/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-krem/40">© 2024 Pekárna U Zlatého klasu. Všechna práva vyhrazena.</p>
          <p className="text-xs text-krem/40">Vyrobeno s ❤️ v Praze</p>
        </div>
      </div>
    </footer>
  );
}
