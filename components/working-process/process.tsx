import ProcessCard from "./process-card";

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    step: "02",
    title: "Research and Strategy Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.",
  },
  {
    step: "03",
    title: "Implementation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna sit amet tincidunt malesuada, nisi erat iaculis nisi.",
  },
  {
    step: "04",
    title: "Monitoring and Optimization",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod, nulla nec pharetra pharetra, nisi erat iaculis nisi.",
  },
  {
    step: "05",
    title: "Reporting and Communication",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper ultricies nisi. Nam eget dui.",
  },
  {
    step: "06",
    title: "Continual Improvement",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus.",
  },
];
export default function Process() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center pt-20 pb-[140px] gap-[30px]">
      {processSteps.map((step) => (
        <ProcessCard key={step.title} {...step} />
      ))}
    </div>
  );
}
