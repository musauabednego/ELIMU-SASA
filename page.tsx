import Link from "next/link";
import SiteHeader from "../components/site-header";

export default function CheckoutPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-slate-50 px-5 py-12">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Checkout
            </p>
            <h1 className="mt-3 text-3xl font-black text-slate-900">
              Review your order
            </h1>
            <p className="mt-3 leading-7 text-slate-600">
              This is a checkout preview. Payment processing has not been
              connected.
            </p>

            <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
              No payment will be taken on this page. M-Pesa checkout should only
              be enabled after a secure payment provider and server-side
              verification are set up.
            </div>

            <fieldset className="mt-7">
              <legend className="font-bold text-slate-900">
                Payment method
              </legend>
              <label className="mt-3 flex cursor-not-allowed items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                <input type="radio" name="payment" checked readOnly />
                <span>
                  <span className="block font-semibold text-slate-900">
                    M-Pesa
                  </span>
                  <span className="text-sm text-slate-600">
                    Payment integration pending
                  </span>
                </span>
              </label>
            </fieldset>

            <button
              type="button"
              disabled
              className="mt-6 w-full cursor-not-allowed rounded-xl bg-slate-300 px-4 py-3 font-semibold text-slate-600"
            >
              Checkout unavailable in this preview
            </button>

            <Link
              href="/resources"
              className="mt-5 inline-block text-sm font-semibold text-emerald-700 hover:text-emerald-900"
            >
              ← Return to resources
            </Link>
          </section>

          <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">Order summary</h2>

            <div className="mt-5 flex justify-between gap-4 border-b border-slate-100 pb-4 text-sm">
              <span className="text-slate-600">Sample resource access</span>
              <span className="font-semibold text-slate-800">Not priced</span>
            </div>

            <div className="mt-4 flex justify-between text-base font-bold text-slate-900">
              <span>Total</span>
              <span>To be configured</span>
            </div>

            <p className="mt-5 text-xs leading-5 text-slate-500">
              Prices, taxes, and resource access rules need to be configured
              before checkout can be enabled.
            </p>
          </aside>
        </div>
      </main>
    </>
  );
}