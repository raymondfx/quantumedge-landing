import { CheckCircle2 } from "lucide-react";
import type { FormState } from "@/lib/contactForm";

export default function ContactSuccessPanel({
  data,
  onClose,
}: {
  data: FormState;
  onClose: () => void;
}) {
  return (
    <div>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft text-accent">
        <CheckCircle2 size={26} />
      </div>

      <h3 className="mt-5 text-xl font-semibold text-navy">
        Consultation Requested
      </h3>
      <p className="mt-2 text-sm text-muted">
        Thanks, {data.name.split(" ")[0]}. Our engineering team will reach out
        to {data.email} shortly to schedule your technical consultation.
      </p>

      <dl className="mt-6 space-y-3 border-t border-border pt-5 text-sm">
        <div className="flex justify-between gap-4">
          <dt className="text-muted">Organization</dt>
          <dd className="text-right text-navy">{data.company}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-muted">Primary Need</dt>
          <dd className="text-right text-navy">{data.need}</dd>
        </div>
      </dl>

      <button
        onClick={onClose}
        className="btn-secondary mt-7 w-full rounded-lg px-5 py-2.5"
      >
        Close
      </button>
    </div>
  );
}
