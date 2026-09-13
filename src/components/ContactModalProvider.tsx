"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { X } from "lucide-react";
import {
  initialFormState,
  validateContactForm,
  type FormState,
  type FormErrors,
} from "@/lib/contactForm";
import ContactFormFields from "./ContactFormFields";
import ContactSuccessPanel from "./ContactSuccessPanel";

type ContactModalContextValue = {
  openContactModal: () => void;
};

const ContactModalContext = createContext<ContactModalContextValue | null>(null);

export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx) {
    throw new Error("useContactModal must be used within ContactModalProvider");
  }
  return ctx;
}

export default function ContactModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState<FormState | null>(null);

  const openContactModal = useCallback(() => setOpen(true), []);

  const closeModal = useCallback(() => {
    setOpen(false);
    // Reset after the close transition so returning users see a fresh form.
    setTimeout(() => {
      setValues(initialFormState);
      setErrors({});
      setSubmitted(null);
    }, 200);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, closeModal]);

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
    }
  };

  return (
    <ContactModalContext.Provider value={{ openContactModal }}>
      {children}

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/70 px-4 py-8 backdrop-blur-sm sm:px-6"
          role="dialog"
          aria-modal="true"
          aria-label="Contact Quantumedge"
          onClick={closeModal}
        >
          <div
            className="card-shadow relative max-h-full w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-8 sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              aria-label="Close"
              className="absolute right-5 top-5 text-slate-400 hover:text-navy"
            >
              <X size={20} />
            </button>

            {submitted ? (
              <ContactSuccessPanel data={submitted} onClose={closeModal} />
            ) : (
              <>
                <h3 className="font-heading text-2xl font-bold leading-[1.2] text-navy">
                  Let&rsquo;s architect your next system
                </h3>
                <p className="mt-2 text-sm leading-[1.4] text-muted">
                  Tell us about your organization and challenge — our
                  engineering team will follow up to scope a technical
                  consultation.
                </p>

                <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-6">
                  <ContactFormFields
                    values={values}
                    errors={errors}
                    onChange={handleChange}
                    idPrefix="modal-"
                  />

                  <button type="submit" className="btn-primary w-full rounded-lg px-6 py-3.5">
                    Schedule Technical Consultation
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </ContactModalContext.Provider>
  );
}
