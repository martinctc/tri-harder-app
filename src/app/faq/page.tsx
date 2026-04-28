import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import { GITHUB_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about TRI-HARDER — how it works, what data it uses, privacy, supported sports, and more.",
};

type FAQ = { q: string; a: React.ReactNode };

const FAQ_GROUPS: { heading: string; items: FAQ[] }[] = [
  {
    heading: "Getting started",
    items: [
      {
        q: "What is TRI-HARDER?",
        a: "TRI-HARDER is a free AI triathlon coach. It connects to your Strava or intervals.icu account, analyses your real training data, and gives you data-grounded coaching advice through chat, a dashboard, and downloadable PDF reports.",
      },
      {
        q: "Is it really free?",
        a: "Yes. There is no paid tier. The project is built and maintained by one triathlete and runs on a small Azure setup. Strava limits non-approved apps to 100 unique users, so capacity is finite.",
      },
      {
        q: "Do I need to install anything?",
        a: "No. TRI-HARDER runs entirely in your browser. Open the app URL, connect a data source, and start chatting.",
      },
      {
        q: "Which sports does it support?",
        a: "Swim, bike, and run primarily — the three triathlon disciplines. Other activities (e.g. strength) are recognised but the coaching analysis is tuned for triathlon training.",
      },
    ],
  },
  {
    heading: "Data and privacy",
    items: [
      {
        q: "What data does TRI-HARDER store?",
        a: "Your OAuth tokens, athlete profile, and planned workouts are stored locally in your browser. Coaching memory (race goals, injuries, preferences) is mirrored to Azure Table Storage when you connect via Strava, so it can sync across devices. Conversation history is kept locally by default.",
      },
      {
        q: "Is my training data used to train AI models?",
        a: (
          <>
            No. TRI-HARDER uses Azure AI Foundry, which contractually does not use customer data for model training. The AI provider key is held server-side in an Azure Function — it never touches your browser. See the{" "}
            <Link href="/privacy" className="text-blue-400 hover:text-blue-300 underline">privacy page</Link> for details.
          </>
        ),
      },
      {
        q: "Can I delete my data?",
        a: "Yes. Settings -> Privacy & Data lets you clear coaching memory, conversation history, or disconnect a data source at any time. Disconnecting Strava also revokes the OAuth token.",
      },
      {
        q: "Are there any third-party trackers or analytics?",
        a: "No. There are no third-party analytics scripts (Google Analytics, Plausible, etc.), advertising trackers, or tag managers. The app does record a minimal first-party session ping for signed-in users — provider, a pseudonymised account hash, timestamp, and broad device/browser family — purely so the maintainer can see basic usage stats. No cookies, no IP addresses, no page views.",
      },
    ],
  },
  {
    heading: "AI coaching",
    items: [
      {
        q: "Which AI model is used?",
        a: "DeepSeek-V3 hosted on Azure AI Foundry. The model is grounded in expert triathlon coaching knowledge from Joe Friel's Triathlete's Training Bible plus your specific training context.",
      },
      {
        q: "How is this different from asking ChatGPT?",
        a: "ChatGPT does not see your workouts, fitness, fatigue, race calendar, or coaching history. TRI-HARDER injects all of that context into every prompt automatically, and the model has been given a focused triathlon-coach system prompt. The result is advice grounded in what you actually did this week, not generic guidance.",
      },
      {
        q: "Why does the chat occasionally give a short reply that feels like a fallback?",
        a: "If the AI proxy is temporarily unavailable or rate-limited, the app falls back to a built-in rule-based coaching engine so you still get a useful response. It is short by design.",
      },
      {
        q: "Can I change the coaching tone?",
        a: "Yes. Settings -> Coach Style lets you switch between Direct, Balanced, and Motivational. The selection is injected into the AI's system prompt.",
      },
    ],
  },
  {
    heading: "Features and accuracy",
    items: [
      {
        q: "How are CTL, ATL, TSB, and ACWR calculated?",
        a: "Standard exponentially-weighted models (CTL = 42-day, ATL = 7-day) are computed from each workout's training stress score (TSS). When TSS is missing from a workout, a heuristic estimate is used. ACWR = ATL ÷ CTL.",
      },
      {
        q: "How accurate is the training-load math?",
        a: "It is as accurate as the underlying data. If your workouts have power, heart rate, or pace data, the load estimates are reasonable. If TSS is missing for many sessions, the estimates are approximate. Treat trends as more meaningful than absolute numbers.",
      },
      {
        q: "Can I generate a coaching report?",
        a: "Yes. The Dashboard has a Report button that builds an A4 PDF with athlete snapshot, training load summary, AI analysis, race readiness, and recovery overview. Generation runs in your browser; nothing is uploaded.",
      },
    ],
  },
  {
    heading: "Troubleshooting",
    items: [
      {
        q: "I connected Strava but I do not see any workouts.",
        a: "TRI-HARDER fetches up to ~6 weeks of recent activities. If your Strava account is new or has no recent activities, the dashboard will be empty. Refresh after recording a workout, or import older activities into Strava.",
      },
      {
        q: "Strava login fails or loops back.",
        a: "Check that you are not in a private/incognito window with third-party cookies disabled. If the issue persists, disconnect from Settings, clear your browser cache, and try again.",
      },
      {
        q: "I found a bug or I have a feature request.",
        a: (
          <>
            Please open an issue on the{" "}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              GitHub repository
            </a>
            . Bug reports with browser, steps to reproduce, and (if possible) screenshots are most useful.
          </>
        ),
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-3xl px-6">

        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-blue-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
            FAQ
          </span>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            Frequently asked questions
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Everything you might want to know before you start.
          </p>
        </div>

        {/* Groups */}
        <div className="space-y-12">
          {FAQ_GROUPS.map((group) => (
            <section key={group.heading}>
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-400">
                {group.heading}
              </h2>
              <div className="space-y-3">
                {group.items.map((item) => (
                  <details
                    key={item.q}
                    className="group rounded-xl border border-slate-800 bg-slate-900/40 px-5 py-4 open:bg-slate-900/70 open:border-slate-700"
                  >
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-base font-medium text-white">
                      <span>{item.q}</span>
                      <ChevronDown
                        size={18}
                        className="mt-1 shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                      />
                    </summary>
                    <div className="mt-3 text-sm leading-relaxed text-slate-400">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="mb-6 text-slate-400">Still curious? Try it out.</p>
          <CTAButton size="large">Open TRI-HARDER</CTAButton>
        </div>
      </div>
    </div>
  );
}
