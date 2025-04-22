import Card from "../ui/card";
import StudiesCarousel from "./studies-carousel";
import StudyCard from "./study-card";
const caseStudies = [
  {
    text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    link: "#", // Replace with actual link
  },
  {
    text: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    link: "#", // Replace with actual link
  },
  {
    text: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    link: "#", // Replace with actual link
  },
];
export default function Studies() {
  return (
    <section className="w-full py-20">
      <div className="max-md:hidden">
        <Card
          className="container mx-auto flex justify-between items-start "
          variant="dark"
          shadow={false}
        >
          {caseStudies.map((study) => (
            <StudyCard
              text={study.text}
              externalLink={study.link}
              key={study.text}
            />
          ))}
        </Card>
      </div>
      <div className="md:hidden flex justify-center items-center gap-5 container mx-auto overflow-x-hidden">
        <StudiesCarousel studies={caseStudies} />
      </div>
    </section>
  );
}
