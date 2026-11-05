"use client";

import { useState } from "react";
import Link from "next/link";
import SiteHeader from "../../components/site-header";

type Role = "learner" | "teacher" | "school";

type Service = {
  title: string;
  description: string;
  format: string;
  href: string;
};

const roleDetails: Record<
  Role,
  { label: string; summary: string; services: Service[] }
> = {
  learner: {
    label: "Learner",
    summary: "Access notes, revision materials, quiz practice, and AI-marked assessment support.",
    services: [
      {
        title: "Notes",
        description: "Topic-based study notes in class-friendly formats.",
        format: "PDF",
        href: "/resources",
      },
      {
        title: "Exams & quizzes",
        description: "Practice assessments with immediate feedback and scoring.",
        format: "PDF",
        href: "/resources",
      },
      {
        title: "AI marking",
        description: "AI-generated marks, results, and revision prompts.",
        format: "PDF",
        href: "/resources",
      },
    ],
  },
  teacher: {
    label: "Teacher",
    summary: "Create lesson plans, scheme-of-work resources, AI-generated notes, and printable exams.",
    services: [
      {
        title: "AI notes",
        description: "Custom notes generated for selected topics and subtopics.",
        format: "PDF + Word",
        href: "/resources",
      },
      {
        title: "Schemes of work",
        description: "Termly or yearly schemes with topic and subtopic coverage.",
        format: "PDF + Word",
        href: "/resources",
      },
      {
        title: "Lesson plans",
        description: "Printable classroom plans for lessons and revision blocks.",
        format: "PDF + Word",
        href: "/resources",
      },
      {
        title: "AI exam generation",
        description: "Build exams with marking schemes automatically.",
        format: "PDF + Word",
        href: "/resources",
      },
    ],
  },
  school: {
    label: "School",
    summary: "Access all teacher services plus school-wide exam analysis and bulk communication tools.",
    services: [
      {
        title: "Exam processing",
        description: "Upload learners’ results and analyse performance at school level.",
        format: "PDF + Word",
        href: "/resources",
      },
      {
        title: "Bulk SMS",
        description: "Send announcements, reminders, and result notifications to parents or learners.",
        format: "School tools",
        href: "/resources",
      },
      {
        title: "Teacher workspace",
        description: "Shared planning and resource generation for all departments.",
        format: "PDF + Word",
        href: "/resources",
      },
    ],
  },
};

export default function DashboardPage() {
  const [role, setRole] = useState<Role>("learner");
  const activeRole = roleDetails[role];

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-slate-50 px-5 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Elimu Sasa dashboard
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900">
              Choose your role and access the right tools
            </h1>
            <p className="mt-4 max-w-2xl text-slate-600">
              Learners, teachers, and schools each receive a tailored workspace with the features they need.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {(Object.keys(roleDetails) as Role[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setRole(key)}
                  className={[
                    "rounded-full border px-4 py-2 text-sm font-semibold transition",
                    role === key
                      ? "border-emerald-600 bg-emerald-600 text-white"
                      : "border-slate-200 bg-white text-slate-700 hover:border-emerald-500 hover:text-emerald-700",
                  ].join(" ")}
                >
                  {roleDetails[key].label}
                </button>
              ))}
            </div>
          </div>

          <section className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
                Selected role
              </p>
              <h2 className="mt-3 text-3xl font-black text-slate-900">
                {activeRole.label}
              </h2>
              <p className="mt-4 text-slate-600">{activeRole.summary}</p>

              <div className="mt-6 space-y-3 text-sm text-slate-600">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <strong className="text-slate-900">Formats:</strong> {activeRole.services[0]?.format}
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <strong className="text-slate-900">Access:</strong> Role-based content and service visibility.
                </div>
              </div>

              <Link
                href="/resources"
                className="mt-7 inline-flex rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                Browse resources
              </Link>
            </aside>

            <div className="grid gap-5 md:grid-cols-2">
              {activeRole.services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                      {service.format}
                    </span>
                    <span className="text-xs uppercase tracking-[0.16em] text-slate-400">
                      {activeRole.label}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>

                  <Link
                    href={service.href}
                    className="mt-6 inline-flex text-sm font-semibold text-emerald-700 hover:text-emerald-900"
                  >
                    Open tool →
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
