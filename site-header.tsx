import Link from "next/link";

const navigation = [
  { href: "/resources", label: "Resources" },
  { href: "/#teachers", label: "For teachers" },
  { href: "/#learners", label: "For learners" },
  { href: "/#how-it-works", label: "AI tools" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2 font-bold tracking-tight">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-xl text-white">
            M
          </span>
          <span className="text-xl text-slate-900">
            Masomo <span className="text-emerald-600">Sasa</span>
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-emerald-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <Link
            href="/login"
            className="hidden text-sm font-semibold text-slate-700 transition hover:text-emerald-700 sm:inline"
          >
            Log in
          </Link>
          <Link
            href="/dashboard"
            className="hidden text-sm font-semibold text-slate-700 transition hover:text-emerald-700 md:inline"
          >
            Dashboard
          </Link>
          <Link
            href="/resources"
            className="rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}