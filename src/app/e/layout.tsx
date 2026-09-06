import "./e.css";

export default function ConceptELayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="e-concept-shell">{children}</div>;
}
