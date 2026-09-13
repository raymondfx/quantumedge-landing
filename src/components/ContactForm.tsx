"use client";

import { useState, type FormEvent } from "react";
import { ShieldCheck, Clock3, Users } from "lucide-react";
import Reveal from "./Reveal";
import ContactFormFields from "./ContactFormFields";
import ContactSuccessPanel from "./ContactSuccessPanel";
import {
  initialFormState,
  validateContactForm,
  type FormState,
  type FormErrors,
} from "@/lib/contactForm";

const BENEFITS = [
  { icon: Users, text: "Client-oriented, senior engineering team" },
  { icon: ShieldCheck, text: "Compliance-native, security-first delivery" },
  { icon: Clock3, text: "Fast technical scoping and response" },
];

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState<FormState | null>(null);

  const handleChange = (field: keyof FormState, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(values);
      setValues(initialFormState);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden scroll-mt-20 bg-navy py-24 lg:py-28">
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="font-ui text-xs font-semibold uppercase tracking-widest text-accent-soft">
              Project Scoping
            </span>
            <h2 className="font-heading mt-3 text-4xl font-bold leading-[1.2] text-white sm:text-[3rem]">
              Let&rsquo;s architect your next system
            </h2>
            <p className="mt-4 max-w-md text-base leading-[1.4] text-white/60">
              Tell us about your organization and challenge — our engineering
              team will follow up to scope a technical consultation.
            </p>

            <ul className="mt-9 space-y-4">
              {BENEFITS.map((benefit) => (
                <li key={benefit.text} className="flex items-center gap-3 text-base text-white/85">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-accent-soft">
                    <benefit.icon size={16} />
                  </span>
                  {benefit.text}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={150}>
            <div className="card-shadow rounded-2xl bg-white p-8 sm:p-10">
              {submitted ? (
                <ContactSuccessPanel
                  data={submitted}
                  onClose={() => setSubmitted(null)}
                />
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <ContactFormFields
                    values={values}
                    errors={errors}
                    onChange={handleChange}
                  />

                  <button
                    type="submit"
                    className="btn-primary w-full rounded-lg px-6 py-3.5"
                  >
                    Schedule Technical Consultation
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
