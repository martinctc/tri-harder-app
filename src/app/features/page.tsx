import type { Metadata } from "next";
import {
  MessageSquare,
  BarChart3,
  FileText,
  Calendar,
  Brain,
  Activity,
  Link2,
  Shield,
} from "lucide-react";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore all TRI-HARDER features: AI chat coaching, training dashboard, PDF coaching reports, training calendar, and more.",
};

const features = [
  {
    icon: MessageSquare,
    title: "AI Chat Coach",
    description:
      "Have natural conversations about your training with an AI coach powered by DeepSeek-V3 via Azure AI Foundry. The coach is grounded in expert triathlon knowledge from Joe Friel's Triathlete's Training Bible and understands your specific training context.",
    bullets: [
      "Contextual awareness of your recent workouts, metrics, and goals",
      "Coaching memory that remembers race goals, injuries, and preferences",
      "Athlete profile built through natural conversation",
      "Rule-based fallback when AI is unavailable",
      "Three coaching styles: Direct, Balanced, and Motivational",
    ],
  },
  {
    icon: BarChart3,
    title: "Training Dashboard",
    description:
      "Visualise your training load, fitness, and fatigue at a glance. The dashboard computes CTL, ATL, TSB, and ACWR from your workout history so you can monitor readiness and avoid overtraining.",
    bullets: [
      "Chronic Training Load (CTL), Acute Training Load (ATL), Training Stress Balance (TSB)",
      "Acute-to-Chronic Workload Ratio (ACWR) with colour-coded risk zones",
      "Volume breakdown by discipline (swim/bike/run)",
      "Heart rate zone distribution and performance trends",
      "Weekly volume charts with training load overlay",
    ],
  },
  {
    icon: FileText,
    title: "Coaching Reports (PDF)",
    description:
      "Generate a comprehensive coaching report you can download, print, or share. The report combines your real training data with AI-powered analysis to give you a complete picture of your current training state.",
    bullets: [
      "Athlete snapshot with key performance metrics",
      "Training load summary with CTL/ATL/TSB/ACWR",
      "AI-generated progress review, strengths, and improvement areas",
      "Goal and race review with countdown timers",
      "Health and recovery snapshot",
      "Generated client-side — your data never leaves the browser",
    ],
  },
  {
    icon: Calendar,
    title: "Training Calendar",
    description:
      "View and plan your training week on a visual calendar. Mark workouts as complete with RPE ratings and notes that feed into your coaching context.",
    bullets: [
      "Weekly view with planned and completed workouts",
      "Workout completion with RPE (1–5) and notes",
      "Integrated chat sidebar for coaching while reviewing your plan",
      "AI-generated training plans placed directly on the calendar",
    ],
  },
  {
    icon: Brain,
    title: "Coaching Memory",
    description:
      "TRI-HARDER remembers your goals, injuries, fitness level, and preferences across sessions. This persistent memory means the AI coach gets better at helping you over time.",
    bullets: [
      "Automatically extracts and stores coaching-relevant information",
      "Persists to Azure Table Storage when connected via Strava",
      "Syncs across devices (with Strava authentication)",
      "Can be cleared at any time from Settings",
    ],
  },
  {
    icon: Link2,
    title: "Strava & intervals.icu Integration",
    description:
      "Connect your training platform in one click. TRI-HARDER imports your workout history automatically and keeps your data fresh.",
    bullets: [
      "Strava OAuth2 with automatic token refresh",
      "intervals.icu via OAuth or API key",
      "Fetches up to 6 weeks of training history",
      "Activities page with session details",
    ],
  },
  {
    icon: Activity,
    title: "Session Opener",
    description:
      "Each time you open TRI-HARDER, the AI coach proactively analyses your recent training and delivers a short observation — like having a coach greet you with insight, not a blank screen.",
    bullets: [
      "Proactive training observation on every session start",
      "Rotating check-in greetings based on day of week",
      "Previous sessions automatically archived (up to 20)",
      "Conversation history browser to review past sessions",
    ],
  },
  {
    icon: Shield,
    title: "Privacy-First Design",
    description:
      "Your training data stays private. The AI model key is kept server-side, there are no third-party analytics, and you control what gets stored.",
    bullets: [
      "AI API key stays server-side (Azure Functions proxy)",
      "No third-party analytics or tracking",
      "Privacy modes: full persistence, session-only, or minimal",
      "Coaching memory can be cleared at any time",
      "Contractual no-training guarantee from Azure AI",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-blue-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
            Features
          </span>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            Everything under the hood
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            A comprehensive look at what TRI-HARDER offers — from AI coaching to
            training analytics.
          </p>
        </div>

        {/* Feature sections */}
        <div className="space-y-20">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <section key={feature.title} className="scroll-mt-24">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      {feature.title}
                    </h2>
                  </div>
                </div>

                <p className="mb-4 text-slate-400 leading-relaxed">
                  {feature.description}
                </p>

                <ul className="space-y-2">
                  {feature.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-sm text-slate-300"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <CTAButton size="large">Try TRI-HARDER</CTAButton>
        </div>
      </div>
    </div>
  );
}
