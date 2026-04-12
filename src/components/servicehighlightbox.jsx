import "../styles/servicehighlightbox.css";

export default function ServiceHighlightBox({
  summary,
  treatmentAreas = [],
  sessions,
  supportingNote,
}) {
  const hasAreas = treatmentAreas.length > 0;

  return (
    <div className="service-highlight-box">
      {summary && <p className="service-highlight-summary">{summary}</p>}

      {hasAreas && (
        <>
          <p className="service-highlight-label">Treatment Areas:</p>
          <div className="service-highlight-areas">
            {treatmentAreas.map((area) => (
              <div className="service-highlight-area" key={area}>
                {area}
              </div>
            ))}
          </div>
        </>
      )}

      {sessions && (
        <p className="service-highlight-meta">
          <strong>Sessions:</strong> {sessions}
        </p>
      )}

      {supportingNote && (
        <p className="service-highlight-note">{supportingNote}</p>
      )}
    </div>
  );
}
