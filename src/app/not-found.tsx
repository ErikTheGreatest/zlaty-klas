import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-krem">
      <div className="text-center max-w-md">
        <span className="text-8xl mb-8 block">🍞</span>
        <h1 className="font-heading text-6xl font-bold text-kava mb-4">404</h1>
        <p className="text-kava/60 text-xl mb-2">Jejda, tato stránka se ztratila!</p>
        <p className="text-kava/40 text-sm mb-10">
          Možná se dostala do pece příliš brzy. Zkuste to znovu na hlavní stránce.
        </p>
        <Link
          href="/"
          className="inline-block bg-zlata text-krem font-medium px-8 py-4 rounded-full hover:bg-cihlova transition-colors duration-300"
        >
          Zpět domů →
        </Link>
      </div>
    </div>
  );
}
