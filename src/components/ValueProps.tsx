import { CircleDollarSign, Lightbulb, BookOpenText, Boxes } from "lucide-react";
import Reveal from "./Reveal";

const VALUES = [
  {
    icon: CircleDollarSign,
    title: "Cost-effectiveness",
    description:
      "We offer affordable IT solutions that help you reduce costs and improve your bottom line.",
  },
  {
    icon: Lightbulb,
    title: "Innovative Technology",
    description:
      "We stay up-to-date with the latest technology trends and offer innovative solutions that help you stay ahead of the competition.",
  },
  {
    icon: BookOpenText,
    title: "Industry Expertise",
    description:
      "We specialize in serving specific industries, such as healthcare, finance, or manufacturing, and offer tailored solutions that meet your unique needs.",
  },
  {
    icon: Boxes,
    title: "Scalability",
    description:
      "Our solutions are scalable and can grow with your business, ensuring that you get the most value out of your investment.",
  },
];

export default function ValueProps() {
  return (
    <section className="pb-20">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value, i) => (
            <Reveal key={value.title} delay={i * 100}>
              <value.icon size={40} strokeWidth={1.4} className="text-navy" />
              <h3 className="font-heading mt-5 text-xl font-semibold leading-[1.3] text-navy">
                {value.title}
              </h3>
              <p className="mt-2.5 text-base leading-[1.4] text-muted">
                {value.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
