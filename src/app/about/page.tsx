import type { Metadata } from "next";
import { GITHUB_URL } from "@/lib/constants";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about TRI-HARDER — the free, open-source AI triathlon coach. Built by a triathlete, for triathletes.",
};

const techStack = [
  { label: "Frontend", value: "React (Create React App), Tailwind CSS" },
  { label: "AI", value: "DeepSeek-V3 via Azure AI Foundry" },
  { label: "Backend", value: "Azure Functions (Node.js)" },
  { label: "Hosting", value: "Azure Static Web Apps" },
  { label: "Data sources", value: "Strava API, intervals.icu API" },
  { label: "Storage", value: "Azure Table Storage + localStorage" },
  { label: "Reports", value: "jsPDF (client-side PDF generation)" },
];

const roadmap = [
  "Charts and graphs in PDF coaching reports",
  "Scheduled or emailed reports",
  "Deeper intervals.icu integration",
  "Enhanced training plan periodization",
  "Community features and sharing",
  "Custom report templates",
];

export default function AboutPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        {/* Header */}
        <div className="mb-16">
          <span className="mb-4 inline-block rounded-full bg-blue-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
            About
          </span>
          <h1 className="mt-3 text-4xl font-bold text-white">
            The story behind TRI-HARDER
          </h1>
        </div>

        {/* Story */}
        <div className="space-y-6 text-slate-400 leading-relaxed">
          <p>
            TRI-HARDER started as a personal experiment: what happens when you
            give an AI access to your actual training data? Not generic
            &ldquo;run more, swim better&rdquo; advice, but a coach that knows
            your workouts, your goals, your fitness history, and your
            constraints.
          </p>
          <p>
            Most triathlon coaching platforms are either expensive human coaching
            or rigid plan generators that don&apos;t really{" "}
            <em>understand</em> your training. TRI-HARDER sits in between — a
            conversational AI coach that analyses your real data from Strava or
            intervals.icu and gives you specific, contextual guidance.
          </p>
          <p>
            The app is free, open source, and privacy-first. Your training data
            stays in your browser. The AI model key lives server-side. There are
            no ads, no third-party analytics, and no selling of your data.
          </p>
          <p className="text-sm text-slate-500">
            Built by Martin Chan — triathlete, data scientist, and the kind of
            person who thinks CTL/ATL charts are genuinely exciting.
          </p>
        </div>

        {/* Tech stack */}
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-white">Tech stack</h2>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 divide-y divide-slate-800">
            {techStack.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 px-6 py-4"
              >
                <span className="w-28 shrink-0 text-sm font-medium text-slate-300">
                  {item.label}
                </span>
                <span className="text-sm text-slate-400">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* What's next */}
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-white">
            What&apos;s next
          </h2>
          <p className="mb-6 text-slate-400">
            TRI-HARDER is actively developed. Here are some things on the
            horizon:
          </p>
          <ul className="space-y-3">
            {roadmap.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-slate-300"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-slate-500">
            Have an idea?{" "}
            <a
              href={`${GITHUB_URL}/issues`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              Open an issue on GitHub
            </a>{" "}
            — contributions and feedback are welcome.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 flex gap-4">
          <CTAButton>Try TRI-HARDER</CTAButton>
          <CTAButton variant="secondary" href={GITHUB_URL}>
            View source on GitHub
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
