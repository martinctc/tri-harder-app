"use client";

import { useState } from "react";
import { Copy, Check, Sparkles } from "lucide-react";
import CTAButton from "@/components/CTAButton";

type Prompt = {
  title: string;
  text: string;
};

type PromptCategory = {
  heading: string;
  blurb: string;
  prompts: Prompt[];
};

const CATEGORIES: PromptCategory[] = [
  {
    heading: "Weekly planning",
    blurb: "Use these to shape the week ahead based on what you have already done.",
    prompts: [
      {
        title: "Plan the rest of my week",
        text: "Based on what I have done so far this week and how my training load is trending, suggest the rest of the week's sessions. Keep my next race in mind and flag anything I should skip if I am too fatigued.",
      },
      {
        title: "Adjust for a busy work day",
        text: "I have a heavy work day tomorrow and only ~45 minutes available before 7am. Suggest the highest-value session I can do given my current training block.",
      },
      {
        title: "Recovery week check",
        text: "Look at my last three weeks of training. Am I due for a recovery week? If yes, suggest a structure for it. If no, explain why I can keep loading.",
      },
    ],
  },
  {
    heading: "Workout analysis",
    blurb: "Get focused feedback on what just happened in a session.",
    prompts: [
      {
        title: "Analyse my last hard session",
        text: "Look at my most recent threshold or interval session. How did I execute it relative to the prescribed effort? What does the heart-rate or power data tell you about my fitness right now?",
      },
      {
        title: "Decoupling and aerobic efficiency",
        text: "Look at my last two long endurance rides or runs. Calculate (or estimate) my pace-to-heart-rate decoupling. Is my aerobic engine improving?",
      },
      {
        title: "Why did this session feel hard?",
        text: "I felt much worse than expected on my last session. Look at the numbers, my recent load, and any notes I logged. What is the most likely explanation?",
      },
    ],
  },
  {
    heading: "Race preparation",
    blurb: "Sharpen the plan as a race approaches.",
    prompts: [
      {
        title: "Race-day pacing strategy",
        text: "My next race is coming up. Given my current fitness, recent race results, and the course profile (let me describe it if needed), suggest a pacing strategy for swim, bike, and run.",
      },
      {
        title: "Build a taper plan",
        text: "Build me a taper plan for the final 10–14 days before my next race. I want to arrive sharp but not flat. Include intensity sessions and total volume targets.",
      },
      {
        title: "What is my A-race readiness?",
        text: "Honestly assess my readiness for my next A-race. What are my current strengths going in, and what are my biggest risk factors? Be direct.",
      },
    ],
  },
  {
    heading: "Recovery and health",
    blurb: "Catch problems before they become injuries.",
    prompts: [
      {
        title: "Am I overreaching?",
        text: "Look at my CTL, ATL, TSB, and ACWR over the last six weeks. Am I in a healthy load progression, or am I trending toward overreaching? What should I change in the next 7 days?",
      },
      {
        title: "Manage a niggle",
        text: "I have a mild [calf / Achilles / lower back / knee] niggle. Adjust this week's training to keep aerobic stimulus while reducing the risk of it getting worse.",
      },
      {
        title: "Sleep and training quality",
        text: "Yesterday I slept poorly (~5 hours). Should I keep today's planned session, modify it, or move it? Justify based on adaptation principles.",
      },
    ],
  },
  {
    heading: "Goal setting and reflection",
    blurb: "Step back from the day-to-day and look at the bigger picture.",
    prompts: [
      {
        title: "Quarterly review",
        text: "Summarise the last 12 weeks of my training. Where have I improved? Where have I stalled? What two or three priorities should I set for the next 12 weeks?",
      },
      {
        title: "Build season goals",
        text: "Help me set 2–3 specific, measurable goals for the next training season. Use my current fitness, race calendar, and any limiters you can see in my data.",
      },
      {
        title: "Strengths and limiters",
        text: "Across swim, bike, and run, what are my biggest strengths and biggest limiters right now? Recommend one focused intervention for each limiter.",
      },
    ],
  },
  {
    heading: "Nutrition and fuelling",
    blurb: "Race-day execution and big-session fuelling.",
    prompts: [
      {
        title: "Race-day fuelling plan",
        text: "Build me a race-day fuelling plan for [race distance and expected duration]. Include carbs per hour, sodium, and a practical timing schedule from breakfast to finish.",
      },
      {
        title: "Long-session fuelling test",
        text: "I am doing a long brick session this weekend (~4 hours). Suggest a fuelling test I can use this session to dial in race-day intake. What should I track during and after?",
      },
    ],
  },
  {
    heading: "Mindset and execution",
    blurb: "The bits that are not in the data.",
    prompts: [
      {
        title: "Pre-race nerves",
        text: "I tend to overcook the bike when I am nervous on race day. Suggest a concrete mental routine for the swim exit through the first 20 minutes of the bike to keep me on plan.",
      },
      {
        title: "Lost motivation",
        text: "I have lost some motivation lately. Look at my recent training and tell me honestly: do I need a real break, a change of stimulus, or just a different goal? Be specific.",
      },
    ],
  },
];

function PromptCard({ prompt }: { prompt: Prompt }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard may be blocked; user can still select-copy manually
    }
  };

  return (
    <div className="group rounded-xl border border-slate-800 bg-slate-900/40 p-5 transition-colors hover:border-slate-700">
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-white">{prompt.title}</h3>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? "Copied" : "Copy prompt"}
          className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 px-3 py-1 text-xs font-medium text-slate-300 transition-colors hover:border-blue-500 hover:text-blue-400"
        >
          {copied ? (
            <>
              <Check size={13} /> Copied
            </>
          ) : (
            <>
              <Copy size={13} /> Copy
            </>
          )}
        </button>
      </div>
      <p className="text-sm leading-relaxed text-slate-400">{prompt.text}</p>
    </div>
  );
}

export default function PromptsPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-4xl px-6">

        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-blue-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
            <Sparkles size={12} />
            Prompt library
          </span>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            Prompts to get the best out of your AI coach
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Copy any of these into the TRI-HARDER chat. They are designed to make full use
            of the training context the coach already sees about you.
          </p>
        </div>

        {/* Tip */}
        <div className="mb-12 rounded-xl border border-blue-500/20 bg-blue-500/5 px-5 py-4 text-sm text-slate-300">
          <span className="font-semibold text-blue-400">Tip:</span>{" "}
          The coach already sees your recent workouts, fitness trend, race calendar, and
          coaching memory. You do not need to re-state that — just ask the question.
        </div>

        {/* Categories */}
        <div className="space-y-14">
          {CATEGORIES.map((cat) => (
            <section key={cat.heading}>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                {cat.heading}
              </h2>
              <p className="mt-1 mb-5 text-sm text-slate-500">{cat.blurb}</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {cat.prompts.map((p) => (
                  <PromptCard key={p.title} prompt={p} />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="mb-6 text-slate-400">Ready to try one?</p>
          <CTAButton size="large">Open TRI-HARDER</CTAButton>
        </div>
      </div>
    </div>
  );
}
