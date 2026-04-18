import type { Metadata } from "next";
import { APP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy",
  description: "TRI-HARDER privacy policy and training disclaimer.",
};

export default function PrivacyPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="mb-8 text-4xl font-bold text-white">
          Privacy &amp; Data
        </h1>

        <div className="space-y-8 text-slate-400 leading-relaxed">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              How your data is handled
            </h2>
            <p>
              TRI-HARDER is designed with privacy as a core principle. Here&apos;s
              what happens with your data:
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-400" />
                <span>
                  <strong className="text-white">Training data</strong> is
                  fetched directly from Strava or intervals.icu to your browser.
                  It is not stored on our servers.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-400" />
                <span>
                  <strong className="text-white">Coaching memory</strong>{" "}
                  (goals, injuries, preferences) is stored in your browser&apos;s
                  localStorage and optionally synced to Azure Table Storage
                  (keyed by your Strava athlete ID).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-400" />
                <span>
                  <strong className="text-white">
                    Conversation history
                  </strong>{" "}
                  is stored in your browser only (localStorage). It is never
                  sent to our servers.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-400" />
                <span>
                  <strong className="text-white">AI chat messages</strong> are
                  sent to Azure AI Foundry (DeepSeek-V3) via a server-side
                  proxy. Microsoft Azure has a contractual no-training guarantee
                  — your data is never used to train AI models.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-400" />
                <span>
                  <strong className="text-white">PDF reports</strong> are
                  generated entirely in your browser using jsPDF. No data leaves
                  your device during report generation.
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              This marketing website
            </h2>
            <p>
              This website (the page you&apos;re reading now) is a static site
              hosted on GitHub Pages. It does not collect personal data, use
              cookies, or run analytics. It has no forms, no newsletter
              sign-up, and no tracking scripts.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Third-party services
            </h2>
            <p>
              The TRI-HARDER app connects to the following third-party services
              at your request:
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <strong className="text-white">Strava</strong> — OAuth2
                authentication and activity data.{" "}
                <a
                  href="https://www.strava.com/legal/privacy"
                  className="text-blue-400 hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Strava Privacy Policy
                </a>
              </li>
              <li>
                <strong className="text-white">intervals.icu</strong> — OAuth
                or API key authentication and training data.{" "}
                <a
                  href="https://intervals.icu/privacy"
                  className="text-blue-400 hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  intervals.icu Privacy Policy
                </a>
              </li>
              <li>
                <strong className="text-white">Azure AI Foundry</strong> —
                DeepSeek-V3 model for AI coaching responses.{" "}
                <a
                  href="https://privacy.microsoft.com/en-us/privacystatement"
                  className="text-blue-400 hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Microsoft Privacy Statement
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Data deletion
            </h2>
            <p>
              You can delete all your data at any time from the Settings page
              within the{" "}
              <a
                href={APP_URL}
                className="text-blue-400 hover:text-blue-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                TRI-HARDER app
              </a>
              . Clearing your coaching memory, disconnecting Strava, and
              clearing your browser&apos;s localStorage removes all stored data.
            </p>
          </section>

          <section className="rounded-2xl border border-amber-800/50 bg-amber-950/20 px-6 py-5">
            <h2 className="mb-3 text-xl font-semibold text-amber-300">
              ⚠ Training &amp; medical disclaimer
            </h2>
            <p className="text-amber-200/80 text-sm leading-relaxed">
              TRI-HARDER provides AI-generated coaching guidance based on your
              training data. It is <strong>not a substitute</strong> for
              professional coaching, medical advice, or physiotherapy. Always
              consult a qualified professional before making significant changes
              to your training programme, especially if you have injuries,
              medical conditions, or are returning from illness. Train
              responsibly and listen to your body.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
