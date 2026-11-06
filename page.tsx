import Link from "next/link";
import SiteHeader from "./components/site-header";

const roles = [
  {
    title: "Learners",
    description: "Access revision notes, timed quizzes, and AI-marked assessments aligned to your class and subject.",
    accent: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    title: "Teachers",
    description: "Create schemes of work, lesson plans, AI notes, and printable exams for each topic and subtopic.",
    accent: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    title: "Schools",
    description: "Manage school-wide exam results, bulk communication, and shared teacher resources from one place.",
    accent: "bg-amber-50 text-amber-700 border-amber-200",
  },
];

const filters = [
  "CBC",
  "8-4-4",
  "Grade 8",
  "Form 2",
  "English",
  "Mathematics",
  "Science",
  "Term 1",
  "Topic-based",
  "Subtopic filters",
];

const featureCards = [
  {
    title: "Role-based access",
    text: "Every learner, teacher, and school sees only the services they are allowed to use.",
  },
  {
    title: "Curriculum-aware search",
    text: "Filter by curriculum, grade, subject, term, topic, and subtopic in a single workspace.",
  },
  {
    title: "AI-powered support",
    text: "Generate notes, exams, and marking guides faster while keeping classroom planning structured.",
  },
  {
    title: "Ready for school workflows",
    text: "Upload learner marks, process exam data, and communicate with parents or learners efficiently.",
  },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-slate-50 text-slate-900">
        <section className="bg-gradient-to-b from-emerald-50 via-white to-slate-50">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-24">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
                Education resource finder
              </p>
              <h1 className="mt-4 max-w-xl text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
                Discover the right learning resources for every classroom.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                Elimu Sasa helps learners, teachers, and schools find targeted study materials,
                lesson resources, and AI-powered teaching support tailored to the Kenyan curriculum.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/resources"
                  className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
                >
                  Explore resources
                </Link>
                <Link
                  href="/dashboard"
                  className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-700"
                >
                  Open dashboard
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {filters.map((filter) => (
                  <span
                    key={filter}
                    className="rounded-full border border-emerald-100 bg-white px-3 py-1.5 text-xs font-semibold text-emerald-700"
                  >
                    {filter}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50 sm:p-8">
              <div className="flex items-center justify-between gap-3 border-b border-slate-200 pb-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                    Resource finder
                  </p>
                  <h2 className="mt-2 text-2xl font-black text-slate-900">Find a match</h2>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Live filters
                </span>
              </div>

              <div className="mt-5 space-y-4">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                    Curriculum
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      "CBC",
                      "8-4-4",
                    ].map((item) => (
                      <button
                        key={item}
                        type="button"
                        className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                      Class
                    </p>
                    <p className="mt-2 text-base font-semibold text-slate-900">Grade 8</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                      Subject
                    </p>
                    <p className="mt-2 text-base font-semibold text-slate-900">Mathematics</p>
                  </div>
                </div>

                <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-6 text-emerald-900">
                  Matching resources: <strong>27 lesson notes, 8 exam papers, 5 plan packs</strong>
                </div>

                <Link
                  href="/resources"
                  className="inline-flex rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
                >
                  View matching resources
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-16 pt-16 sm:px-6">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
              Who it is for
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Built for every role in the learning ecosystem
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {roles.map((role) => (
              <div
                key={role.title}
                className={`rounded-3xl border p-6 shadow-sm ${role.accent}`}
              >
                <h3 className="text-2xl font-black text-slate-900">{role.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-700">{role.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-900 py-16 text-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
                Why Elimu Sasa
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                One platform for smarter teaching and learning
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {featureCards.map((card) => (
                <div key={card.title} className="rounded-2xl border border-slate-700 bg-slate-800 p-6">
                  <h3 className="text-xl font-bold text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
                  Ready to begin?
                </p>
                <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                  Start with the resources your learners need today.
                </h2>
              </div>

              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link
                  href="/resources"
                  className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  Browse resources
                </Link>
                <Link
                  href="/dashboard"
                  className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-700"
                >
                  Open dashboard
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
