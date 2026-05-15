import "../styles/servicehighlightbox.css";

export default function ServiceHighlightBox({
  summary,
  treatmentAreas = [],
  sessions,
  price,
  supportingNote,
  bookHref = "#book-now",
  bookLabel = "Book This Service",
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

      {price && (
        <p className="service-highlight-meta">
          <strong>Price:</strong> {price}
        </p>
      )}

      {supportingNote && (
        <p className="service-highlight-note">{supportingNote}</p>
      )}

      <a className="service-highlight-book" href={bookHref}>
        {bookLabel}
      </a>
    </div>
  );
}
