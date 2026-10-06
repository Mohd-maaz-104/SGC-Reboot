import type { ReactNode } from "react";

export default function PageHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
}) {
  return (
    <header className="page-heading">
      <p className="page-eyebrow"><span aria-hidden="true" />{eyebrow}</p>
      <h1>{title}</h1>
      <p className="page-description">{description}</p>
    </header>
  );
}
