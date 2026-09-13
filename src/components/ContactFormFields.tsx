import { NEEDS, type FormState, type FormErrors } from "@/lib/contactForm";

const inputClasses =
  "mt-2 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-navy placeholder:text-slate-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

export default function ContactFormFields({
  values,
  errors,
  onChange,
  idPrefix = "",
}: {
  values: FormState;
  errors: FormErrors;
  onChange: (field: keyof FormState, value: string) => void;
  idPrefix?: string;
}) {
  const id = (field: string) => `${idPrefix}${field}`;

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={id("name")} className="block text-sm font-medium text-navy">
            Name
          </label>
          <input
            id={id("name")}
            type="text"
            value={values.name}
            onChange={(e) => onChange("name", e.target.value)}
            className={inputClasses}
            placeholder="Jane Mwangi"
          />
          {errors.name && <p className="mt-1.5 text-xs text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor={id("email")} className="block text-sm font-medium text-navy">
            Corporate Email
          </label>
          <input
            id={id("email")}
            type="email"
            value={values.email}
            onChange={(e) => onChange("email", e.target.value)}
            className={inputClasses}
            placeholder="jane@company.com"
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor={id("company")} className="block text-sm font-medium text-navy">
          Organization / Company Name
        </label>
        <input
          id={id("company")}
          type="text"
          value={values.company}
          onChange={(e) => onChange("company", e.target.value)}
          className={inputClasses}
          placeholder="Acme Distributors Ltd."
        />
        {errors.company && <p className="mt-1.5 text-xs text-red-600">{errors.company}</p>}
      </div>

      <div>
        <label htmlFor={id("need")} className="block text-sm font-medium text-navy">
          Primary Need
        </label>
        <select
          id={id("need")}
          value={values.need}
          onChange={(e) => onChange("need", e.target.value)}
          className={inputClasses}
        >
          <option value="" disabled>
            Select a category
          </option>
          {NEEDS.map((need) => (
            <option key={need} value={need}>
              {need}
            </option>
          ))}
        </select>
        {errors.need && <p className="mt-1.5 text-xs text-red-600">{errors.need}</p>}
      </div>

      <div>
        <label htmlFor={id("description")} className="block text-sm font-medium text-navy">
          Project Scope / Description
        </label>
        <textarea
          id={id("description")}
          rows={5}
          value={values.description}
          onChange={(e) => onChange("description", e.target.value)}
          className={`${inputClasses} resize-none`}
          placeholder="Describe your current systems, pain points, and what you're looking to achieve..."
        />
        {errors.description && (
          <p className="mt-1.5 text-xs text-red-600">{errors.description}</p>
        )}
      </div>
    </>
  );
}
