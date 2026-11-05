"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import SiteHeader from "../../components/site-header";
import { supabase } from "../../lib/supabase/client";

type Resource = {
  id: string;
  title: string;
  curriculum: string;
  grade: string;
  subject: string;
  term: string;
  topic: string;
  type: string;
  description: string;
  premium: boolean;
};

const filters = {
  curriculum: ["All", "CBC", "8-4-4"],
  grade: ["All", "Grade 3", "Grade 5", "Grade 8", "Form 2", "Form 4"],
  subject: ["All", "English", "Mathematics", "Biology", "Chemistry", "Science"],
  term: ["All", "Term 1", "Term 2", "Yearly"],
  topic: [
    "All",
    "All topics",
    "Reading",
    "Fractions",
    "Cells",
    "Acids and bases",
    "The environment",
  ],
  type: ["All", "Scheme of work", "Lesson plan", "Revision notes", "Exam", "Notes"],
};

export default function ResourcesPage() {
  const [query, setQuery] = useState("");
  const [curriculum, setCurriculum] = useState("All");
  const [grade, setGrade] = useState("All");
  const [subject, setSubject] = useState("All");
  const [term, setTerm] = useState("All");
  const [topic, setTopic] = useState("All");
  const [type, setType] = useState("All");

  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    let active = true;

    async function loadResources() {
      const { data, error } = await supabase
        .from("resources")
        .select(
          "id, title, description, curriculum, grade, subject, term, topic, resource_type, access_level"
        )
        .eq("status", "published")
        .order("created_at", { ascending: false });

      if (!active) return;

      if (error) {
        setLoadError("Could not load resources. Please try again later.");
      } else {
        setResources(
          (data ?? []).map((row) => ({
            id: row.id,
            title: row.title,
            description: row.description,
            curriculum: row.curriculum,
            grade: row.grade,
            subject: row.subject,
            term: row.term,
            topic: row.topic,
            type: row.resource_type,
            premium: row.access_level === "premium",
          }))
        );
      }

      setLoading(false);
    }

    void loadResources();

    return () => {
      active = false;
    };
  }, []);

  const results = useMemo(() => {
    const search = query.trim().toLowerCase();

    return resources.filter((resource) => {
      const searchableText = [
        resource.title,
        resource.description,
        resource.curriculum,
        resource.grade,
        resource.subject,
        resource.term,
        resource.topic,
        resource.type,
      ]
        .join(" ")
        .toLowerCase();

      return (
        (!search || searchableText.includes(search)) &&
        (curriculum === "All" || resource.curriculum === curriculum) &&
        (grade === "All" || resource.grade === grade) &&
        (subject === "All" || resource.subject === subject) &&
        (term === "All" || resource.term === term) &&
        (topic === "All" ||
          resource.topic === topic ||
          resource.topic === "All topics") &&
        (type === "All" || resource.type === type)
      );
    });
  }, [resources, query, curriculum, grade, subject, term, topic, type]);

  function resetFilters() {
    setQuery("");
    setCurriculum("All");
    setGrade("All");
    setSubject("All");
    setTerm("All");
    setTopic("All");
    setType("All");
  }

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-slate-50">
        <section className="bg-gradient-to-br from-emerald-50 via-white to-blue-50">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Education resource library
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
              Find the right resource in Elimu Sasa
            </h1>
            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Search and filter learning resources by curriculum, grade, subject,
              term, topic, and resource type.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-10 sm:px-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <label className="block text-sm font-semibold text-slate-800">
              Search resources
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search title, topic, subject, or keyword"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
              />
            </label>

            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <label className="text-sm font-semibold text-slate-800">
                Curriculum
                <select
                  value={curriculum}
                  onChange={(event) => setCurriculum(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 font-normal outline-none focus:border-emerald-500"
                >
                  {filters.curriculum.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>

              <label className="text-sm font-semibold text-slate-800">
                Grade or class
                <select
                  value={grade}
                  onChange={(event) => setGrade(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 font-normal outline-none focus:border-emerald-500"
                >
                  {filters.grade.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>

              <label className="text-sm font-semibold text-slate-800">
                Subject
                <select
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 font-normal outline-none focus:border-emerald-500"
                >
                  {filters.subject.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>

              <label className="text-sm font-semibold text-slate-800">
                Term
                <select
                  value={term}
                  onChange={(event) => setTerm(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 font-normal outline-none focus:border-emerald-500"
                >
                  {filters.term.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>

              <label className="text-sm font-semibold text-slate-800">
                Topic
                <select
                  value={topic}
                  onChange={(event) => setTopic(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 font-normal outline-none focus:border-emerald-500"
                >
                  {filters.topic.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>

              <label className="text-sm font-semibold text-slate-800">
                Resource type
                <select
                  value={type}
                  onChange={(event) => setType(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 font-normal outline-none focus:border-emerald-500"
                >
                  {filters.type.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-slate-500" aria-live="polite">
                Showing {results.length} {results.length === 1 ? "resource" : "resources"}.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-emerald-600 hover:text-emerald-700"
              >
                Reset filters
              </button>
            </div>
          </div>

          {loading ? (
            <p className="mt-6 text-slate-600">Loading resources...</p>
          ) : loadError ? (
            <p className="mt-6 text-red-700">{loadError}</p>
          ) : results.length > 0 ? (
            <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {results.map((resource) => (
                <article
                  key={resource.id}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
                      {resource.type}
                    </span>
                    <span className="text-xs text-slate-500">
                      {resource.premium ? "Premium" : "Free"}
                    </span>
                  </div>

                  <h2 className="mt-4 text-xl font-bold text-slate-900">
                    {resource.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {resource.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2 text-xs">
                    {[
                      resource.curriculum,
                      resource.grade,
                      resource.subject,
                      resource.term,
                      resource.topic,
                    ].map((tag) => (
                      <span
                        key={`${resource.id}-${tag}`}
                        className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/dashboard"
                    className="mt-6 inline-flex rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
                  >
                    View access options
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
              <h2 className="text-lg font-bold text-slate-900">
                No matching resources
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Try changing your search or filters.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="mt-4 font-semibold text-emerald-700 hover:text-emerald-900"
              >
                Clear all filters
              </button>
            </div>
          )}
        </section>
      </main>
    </>
  );
}
