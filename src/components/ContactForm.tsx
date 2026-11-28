"use client";

import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/Button";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm({
  contactEmail = "",
}: {
  contactEmail?: string;
}) {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setErrorMessage(
        "Email service is not configured. Please add EmailJS environment variables."
      );
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: "Gupta Investment Zone",
        },
        publicKey
      );

      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
      setErrorMessage(
        contactEmail
          ? `Failed to send your message. Please try again or email ${contactEmail}.`
          : "Failed to send your message. Please try again later."
      );
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          required
          value={form.name}
          onChange={handleChange}
          disabled={status === "loading"}
          className="w-full px-3 py-2 border-b border-gray-300 shadow-sm rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-60"
          placeholder="Enter your full name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          required
          value={form.email}
          onChange={handleChange}
          disabled={status === "loading"}
          className="w-full px-3 py-2 border-b border-gray-300 shadow-sm rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-60"
          placeholder="Enter your email"
        />
      </div>

   

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          disabled={status === "loading"}
          className="w-full px-3 py-2 border-b border-gray-300 shadow-sm rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-60"
          placeholder="Tell us about your investment needs..."
        />
      </div>

      {status === "success" && (
        <div className="flex items-start gap-2 p-3 rounded-lg bg-green-50 text-green-800 border border-green-200">
          <CheckCircle size={18} className="mt-0.5 shrink-0" />
          <p className="text-sm">
            Thank you! Your message has been sent. We will review it and get
            back to you as soon as possible.
          </p>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-start gap-2 p-3 rounded-lg bg-red-50 text-red-800 border border-red-200">
          <AlertCircle size={18} className="mt-0.5 shrink-0" />
          <p className="text-sm">{errorMessage}</p>
        </div>
      )}

      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? (
          <span className="flex items-center gap-2">
            <Loader2 size={16} className="animate-spin" />
            Sending…
          </span>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
