import CaseExternalLink from "./case-external-link";

type StudyCardProps = {
  externalLink: string;
  text: string;
};
export default function StudyCard({ externalLink, text }: StudyCardProps) {
  return (
    <div className="not-last:pe-16 not-last:border-e not-last:border-white not-first:ps-16 ">
      <p className="text-lg mb-5">{text}</p>
      <CaseExternalLink link={externalLink} />
    </div>
  );
}
