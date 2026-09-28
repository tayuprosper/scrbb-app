"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import {
  IoBookOutline,
  IoBugOutline,
  IoBulbOutline,
  IoChatbubbleEllipsesOutline,
  IoCheckmark,
  IoHeartOutline,
} from "react-icons/io5";
import { getSupabase } from "@/lib/supabase";

type Kind = "suggestion" | "problem" | "course_request" | "praise" | "other";

const KINDS: { value: Kind; label: string; icon: ReactNode; placeholder: string }[] = [
  {
    value: "suggestion",
    label: "An idea",
    icon: <IoBulbOutline />,
    placeholder: "What would make Scrbb better for you?",
  },
  {
    value: "problem",
    label: "Something's broken",
    icon: <IoBugOutline />,
    placeholder: "What happened, and on which screen? Tell us your phone model if you can.",
  },
  {
    value: "course_request",
    label: "A course I want",
    icon: <IoBookOutline />,
    placeholder: "What would you like to learn? The more specific, the better.",
  },
  {
    value: "praise",
    label: "Something I love",
    icon: <IoHeartOutline />,
    placeholder: "What's working well for you?",
  },
  {
    value: "other",
    label: "Something else",
    icon: <IoChatbubbleEllipsesOutline />,
    placeholder: "Tell us anything.",
  },
];

const MAX = 2000;

export default function FeedbackForm() {
  const [kind, setKind] = useState<Kind>("suggestion");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [website, setWebsite] = useState(""); // hidden trap field for spam bots
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  const current = KINDS.find((k) => k.value === kind)!;
  const tooShort = message.trim().length < 5;

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (tooShort || status === "sending") return;

    // Bots fill in every field, people can't see this one
    if (website) {
      setStatus("sent");
      return;
    }

    setStatus("sending");
    setError("");
    let insertError: { message: string } | null = null;
    try {
      const res = await getSupabase()
        .from("feedback")
        .insert({
          kind,
          message: message.trim().slice(0, MAX),
          name: name.trim().slice(0, 80) || null,
          contact: contact.trim().slice(0, 120) || null,
          page: document.referrer ? document.referrer.slice(0, 200) : null,
        });
      insertError = res.error;
    } catch (e) {
      insertError = { message: e instanceof Error ? e.message : "failed" };
    }

    if (insertError) {
      setStatus("error");
      setError(
        insertError.message.toLowerCase().includes("fetch")
          ? "No connection. Check your internet and try again."
          : "Your feedback couldn't be sent. Please try again in a moment.",
      );
      return;
    }
    setStatus("sent");
  }

  function reset() {
    setMessage("");
    setName("");
    setContact("");
    setKind("suggestion");
    setStatus("idle");
  }

  return status === "sent" ? (
    <div className="sb-fb__card sb-fb__done" role="status">
      <span className="sb-fb__done-icon" aria-hidden="true">
        <IoCheckmark />
      </span>
      <h1>Thank you!</h1>
      <p>We read every message. {contact.trim() ? "If we have questions, we'll contact you." : ""}</p>
      <div className="sb-fb__done-actions">
        <Link className="sb-btn sb-btn--md" href="/">
          <span>Back to home</span>
        </Link>
        <button type="button" className="sb-link sb-fb__again" onClick={reset}>
          Send another
        </button>
      </div>
    </div>
  ) : (
    <form className="sb-fb__card" onSubmit={submit} noValidate>
      <h1>Tell us what you think.</h1>
      <p className="sb-fb__lead">
        Ideas, problems, courses you'd like to see. Every message is read by the Scrbb team.
      </p>

      <fieldset className="sb-fb__group">
        <legend>What's it about?</legend>
        <div className="sb-fb__kinds">
          {KINDS.map((k) => (
            <label key={k.value} className={`sb-fb__kind${kind === k.value ? " is-picked" : ""}`}>
              <input
                type="radio"
                name="kind"
                value={k.value}
                checked={kind === k.value}
                onChange={() => setKind(k.value)}
              />
              <span className="sb-fb__kind-icon" aria-hidden="true">
                {k.icon}
              </span>
              {k.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="sb-fb__field">
        <div className="sb-fb__label-row">
          <label htmlFor="fb-message">Your message</label>
          <span className={message.length > MAX ? "is-over" : undefined}>
            {message.length}/{MAX}
          </span>
        </div>
        <textarea
          id="fb-message"
          rows={6}
          maxLength={MAX}
          placeholder={current.placeholder}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>

      <div className="sb-fb__row">
        <div className="sb-fb__field">
          <label htmlFor="fb-name">
            Your name <span>(optional)</span>
          </label>
          <input
            id="fb-name"
            type="text"
            autoComplete="name"
            maxLength={80}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="sb-fb__field">
          <label htmlFor="fb-contact">
            Email or phone <span>(optional)</span>
          </label>
          <input
            id="fb-contact"
            type="text"
            inputMode="email"
            autoComplete="email"
            maxLength={120}
            placeholder="So we can reply"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
      </div>

      {/* Spam trap: hidden from people, visible to bots */}
      <div className="sb-fb__trap" aria-hidden="true">
        <label htmlFor="fb-website">Website</label>
        <input
          id="fb-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      {status === "error" && (
        <p className="sb-fb__error" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="sb-btn sb-btn--lg sb-fb__submit"
        disabled={tooShort || status === "sending"}
      >
        <span>{status === "sending" ? "Sending..." : "Send feedback"}</span>
      </button>
    </form>
  );
}
