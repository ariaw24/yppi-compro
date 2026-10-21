export function SectionIntro({ eyebrow, title, body, light = false }: { eyebrow: string; title: string; body?: string; light?: boolean }) {
  return (
    <div className={`section-intro ${light ? 'section-intro--light' : ''}`}>
      <span className="eyebrow"><i />{eyebrow}</span>
      <h2>{title}</h2>
      {body && <p>{body}</p>}
    </div>
  );
}
