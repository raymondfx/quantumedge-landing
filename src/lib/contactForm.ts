export const NEEDS = [
  "Custom Enterprise Software",
  "LPO / Procurement Automation",
  "Enterprise AI Workflow",
  "Cloud & Systems Integration",
  "Other",
];

export type FormState = {
  name: string;
  email: string;
  company: string;
  need: string;
  description: string;
};

export type FormErrors = Partial<Record<keyof FormState, string>>;

export const initialFormState: FormState = {
  name: "",
  email: "",
  company: "",
  need: "",
  description: "",
};

export function validateContactForm(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) errors.name = "Name is required.";

  if (!values.email.trim()) {
    errors.email = "Corporate email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.company.trim()) errors.company = "Organization name is required.";
  if (!values.need) errors.need = "Please select your primary need.";

  if (!values.description.trim()) {
    errors.description = "Please describe your project scope.";
  } else if (values.description.trim().length < 20) {
    errors.description = "Please provide at least 20 characters of detail.";
  }

  return errors;
}
