"use client";

import { ArrowRight, Check, Loader2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";

type State = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-xl border border-line bg-bg/60 px-4 py-3 text-sm text-fg placeholder:text-fg-subtle transition-colors focus:border-accent focus:outline-none";

export function ContactForm() {
  const [state, setState] = useState<State>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    // No endpoint configured → open the visitor's mail client with a prefilled message.
    if (!site.formEndpoint) {
      const subject = encodeURIComponent(`Project inquiry from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setState("sent");
      return;
    }

    try {
      setState("sending");
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      setState("sent");
    } catch {
      setState("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate={false}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-fg-muted">Name</span>
          <input name="name" required autoComplete="name" placeholder="Your name" className={field} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-fg-muted">Email</span>
          <input name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={field} />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-xs font-medium text-fg-muted">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project, timeline and goals…"
          className={`${field} resize-y`}
        />
      </label>
      {/* honeypot for bots */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <Button type="submit" size="lg" disabled={state === "sending"}>
          {state === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending
            </>
          ) : state === "sent" ? (
            <>
              <Check className="h-4 w-4" /> Message sent
            </>
          ) : (
            <>
              Send message
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </>
          )}
        </Button>
        <p className="text-xs text-fg-subtle" aria-live="polite">
          {state === "error" && "Something went wrong — please email me directly."}
          {state === "sent" && "Thanks! I'll get back to you within 24 hours."}
          {state === "idle" && "I usually reply within 24 hours."}
        </p>
      </div>
    </form>
  );
}
