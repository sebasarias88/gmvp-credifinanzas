"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, RotateCcw, Sparkles } from "lucide-react";
import { quiz, quizResults, site } from "@/content/site";
import { cn } from "@/lib/cn";

type Key = keyof typeof quizResults;

/** Three-question self-diagnosis that recommends a service and opens WhatsApp with the answers. */
export function CreditQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const done = step >= quiz.length;

  const scores: Record<Key, number> = { asesoria: 0, rotativo: 0, cartera: 0 };
  answers.forEach((a, i) => {
    const s = quiz[i].options[a].score as Partial<Record<Key, number>>;
    (Object.keys(s) as Key[]).forEach((k) => (scores[k] += s[k] ?? 0));
  });
  const best = (Object.keys(scores) as Key[]).reduce((a, b) => (scores[b] > scores[a] ? b : a), "asesoria");
  const result = quizResults[best];

  const choose = (i: number) => {
    const next = [...answers.slice(0, step), i];
    setAnswers(next);
    setStep(step + 1);
  };

  const summary = answers.map((a, i) => `• ${quiz[i].q} ${quiz[i].options[a].label}`).join("\n");
  const waText = `Hola, hice el diagnóstico en la web.\n${summary}\nRecomendación: ${result.title}.`;

  return (
    <div className="glass ring-gradient relative overflow-hidden rounded-[36px] p-6 md:p-12">
      <div aria-hidden className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-electric opacity-40 blur-[100px]" />
      <div className="relative">
        <div className="flex items-center justify-between gap-4">
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-lime">
            <Sparkles className="h-4 w-4" /> Diagnóstico en 30 segundos
          </span>
          <span className="font-mono text-sm text-steel">
            {Math.min(step + 1, quiz.length)} / {quiz.length}
          </span>
        </div>
        <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
          <motion.div className="h-full rounded-full bg-gradient-to-r from-electric via-cyan to-lime" animate={{ width: `${(Math.min(step, quiz.length) / quiz.length) * 100}%` }} />
        </div>

        <div className="mt-10 min-h-[340px]">
          <AnimatePresence mode="wait">
            {!done ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3 className="text-3xl font-semibold tracking-[-0.045em] text-snow md:text-5xl">{quiz[step].q}</h3>
                <div className="mt-8 grid gap-3 md:grid-cols-2">
                  {quiz[step].options.map((o, i) => (
                    <button
                      key={o.label}
                      type="button"
                      onClick={() => choose(i)}
                      className={cn(
                        "group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-5 text-left font-medium text-snow transition-all hover:border-lime/60 hover:bg-white/[0.06]",
                        answers[step] === i && "border-lime",
                      )}
                    >
                      {o.label}
                      <ArrowRight className="h-5 w-5 shrink-0 text-lime opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                    </button>
                  ))}
                </div>
                {step > 0 && (
                  <button type="button" onClick={() => setStep(step - 1)} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-white">
                    <ArrowLeft className="h-4 w-4" /> Volver
                  </button>
                )}
              </motion.div>
            ) : (
              <motion.div key="result" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-lime">Tu resultado</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-snow md:text-5xl">{result.title}</h3>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">{result.text}</p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(waText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 glow-lime rounded-full bg-lime px-7 py-4 font-semibold text-void transition-transform hover:scale-[1.03]"
                  >
                    Enviar mi diagnóstico por WhatsApp <ArrowRight className="h-5 w-5" />
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setStep(0);
                      setAnswers([]);
                    }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-4 font-semibold text-white hover:bg-white/10"
                  >
                    <RotateCcw className="h-4 w-4" /> Repetir
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
