"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  MessageSquare,
  BarChart3,
  FileText,
  Calendar,
  Brain,
  Activity,
  ArrowRight,
  Zap,
  Shield,
  ChevronRight,
} from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import { APP_URL, GITHUB_URL } from "@/lib/constants";

const FEATURES = [
  {
    icon: MessageSquare,
    title: "AI Chat Coach",
    description:
      "Have natural conversations about your training. Powered by DeepSeek-V3 and grounded in expert triathlon coaching knowledge.",
  },
  {
    icon: BarChart3,
    title: "Training Dashboard",
    description:
      "Visualise CTL, ATL, TSB, and ACWR metrics. Track volume by discipline, HR zones, performance trends, and training load.",
  },
  {
    icon: FileText,
    title: "Coaching Reports",
    description:
      "Generate downloadable PDF reports with AI-powered analysis — progress review, strengths, areas for improvement, and tactical advice.",
  },
  {
    icon: Calendar,
    title: "Training Calendar",
    description:
      "Plan and track workouts on a weekly calendar. Mark completions with RPE ratings and see your training structure at a glance.",
  },
];

const STEPS = [
  {
    step: "01",
    title: "Connect your data",
    description: "Link your Strava or intervals.icu account in one click. Your training history is imported automatically.",
    icon: Zap,
  },
  {
    step: "02",
    title: "Chat with your AI coach",
    description: "Ask questions, request analysis, plan races, or get daily training advice — all in a natural conversation.",
    icon: MessageSquare,
  },
  {
    step: "03",
    title: "Train smarter",
    description: "Get data-driven insights, coaching reports, and a personalised training plan that evolves with you.",
    icon: Activity,
  },
];

const CAPABILITIES = [
  "Analyses your last 6 weeks of training data",
  "Remembers your goals, injuries, and preferences across sessions",
  "Generates structured training plans with periodization",
  "Produces downloadable PDF coaching reports",
  "Tracks CTL/ATL/TSB and workload ratios",
  "Falls back to rule-based coaching when AI is unavailable",
  "Runs entirely in your browser — your data stays private",
  "Free and open source",
];

export default function Home() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden">
        {/* Gradient backdrop */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-950/40 via-slate-950 to-slate-950" />
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-blue-600/8 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-24 sm:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <span className="mb-6 inline-block rounded-full border border-blue-500/30 bg-blue-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
              Free &amp; Open Source
            </span>

            <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Your AI triathlon coach,{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                always ready
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
              TRI-HARDER connects to your training data and provides
              personalised coaching analysis, training plans, and downloadable
              reports — powered by AI.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <CTAButton size="large">Try TRI-HARDER</CTAButton>
              <CTAButton variant="secondary" href={GITHUB_URL}>
                View on GitHub
              </CTAButton>
            </div>
          </motion.div>

          {/* Hero screenshot placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto mt-16 max-w-4xl"
          >
            <div className="overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900/80 shadow-2xl shadow-blue-900/10">
              <div className="flex items-center gap-2 border-b border-slate-700/50 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-500/60" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                <div className="h-3 w-3 rounded-full bg-green-500/60" />
                <span className="ml-2 text-xs text-slate-500">TRI-HARDER AI Coach</span>
              </div>
              <div className="flex items-center justify-center p-12 text-slate-600">
                <div className="text-center">
                  <BarChart3 size={48} className="mx-auto mb-4 text-blue-500/40" />
                  <p className="text-sm text-slate-500">
                    App screenshot — add your own at{" "}
                    <code className="text-blue-400/60">public/screenshots/</code>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section className="border-t border-slate-800/60 bg-slate-950 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            badge="Features"
            title="Everything you need to train smarter"
            subtitle="TRI-HARDER combines AI coaching, data analysis, and training planning in one free tool."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((feature, i) => (
              <FeatureCard key={feature.title} {...feature} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── How it works ─── */}
      <section className="border-t border-slate-800/60 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            badge="How it works"
            title="Get started in three steps"
          />

          <div className="grid gap-8 md:grid-cols-3">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative text-center"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/10">
                  <step.icon size={28} className="text-blue-400" />
                </div>
                <p className="mb-1 text-xs font-bold uppercase tracking-widest text-blue-400">
                  Step {step.step}
                </p>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  {step.description}
                </p>
                {i < STEPS.length - 1 && (
                  <ChevronRight
                    size={20}
                    className="absolute right-0 top-8 hidden text-slate-700 md:block -mr-4"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Capabilities list ─── */}
      <section className="border-t border-slate-800/60 bg-slate-900/30 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading
            badge="Capabilities"
            title="What TRI-HARDER can do"
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid gap-3 sm:grid-cols-2"
          >
            {CAPABILITIES.map((cap) => (
              <div
                key={cap}
                className="flex items-start gap-3 rounded-xl bg-slate-800/30 px-4 py-3"
              >
                <Shield size={16} className="mt-0.5 shrink-0 text-blue-400" />
                <span className="text-sm text-slate-300">{cap}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── About / Founder note ─── */}
      <section className="border-t border-slate-800/60 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionHeading
            badge="About the project"
            title="Built by a triathlete, for triathletes"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-slate-400 leading-relaxed">
              TRI-HARDER started as a personal project to see what would happen
              if you gave an AI access to your actual training data. Instead of
              generic advice, you get a coach that knows your workouts, your
              goals, and your fitness history. It&apos;s free, open source, and
              your data stays private — no third-party analytics, no selling
              your information.
            </p>
            <p className="mt-4 text-sm text-slate-500">
              — Martin Chan, creator of TRI-HARDER
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="border-t border-slate-800/60 bg-gradient-to-b from-slate-950 to-blue-950/20 py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <Brain size={40} className="mx-auto mb-6 text-blue-400" />
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to train smarter?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-slate-400">
            Connect your Strava or intervals.icu account and start chatting with
            your AI triathlon coach — for free.
          </p>
          <div className="mt-8">
            <CTAButton size="large">Get started now</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
