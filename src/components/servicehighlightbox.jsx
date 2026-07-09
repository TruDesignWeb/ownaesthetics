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
    <div className="service-highlight-box [margin-top:1.25rem]! [padding:1.35rem]! [background:linear-gradient(135deg,_#9ead93,_#bd725b)] [color:white] [border-radius:15px] [position:relative] [overflow:hidden] [&::before]:[content:''] [&::before]:[position:absolute] [&::before]:[top:-50%] [&::before]:[right:-50%] [&::before]:[width:100%] [&::before]:[height:100%] [&::before]:[background:radial-gradient(_circle,_rgba(255,_255,_255,_0.1)_0%,_transparent_70%_)] [&::before]:[animation:service-highlight-shimmer_3s_ease-in-out_infinite] [&_strong]:[color:white]">
      {summary && <p className="[position:relative] [z-index:1] [font-size:1rem] [line-height:1.7] [margin-bottom:0.9rem] [.service-highlight-box_&]:[color:white]">{summary}</p>}

      {hasAreas && (
        <>
          <p className="[position:relative] [z-index:1] [font-size:1rem] [line-height:1.7] [margin-bottom:0.75rem] [.service-highlight-box_&]:[color:white]">Treatment Areas:</p>
          <div className="[display:flex] [gap:20px] [margin:0_0_1.25rem] [flex-wrap:wrap] [position:relative] [z-index:1] max-[768px]:[gap:12px]">
            {treatmentAreas.map((area) => (
              <div className="[background:rgba(255,_255,_255,_0.2)] [padding:15px_25px] [border-radius:25px] [font-weight:600] [backdrop-filter:blur(10px)] [border:1px_solid_rgba(255,_255,_255,_0.3)] max-[768px]:[padding:12px_20px]" key={area}>
                {area}
              </div>
            ))}
          </div>
        </>
      )}

      {sessions && (
        <p className="[position:relative] [z-index:1] [font-size:1rem] [line-height:1.7] [color:#ffffff] [.service-highlight-box_&]:[color:white] [.service-highlight-box_&_strong]:[color:white]">
          <strong>Sessions:</strong> {sessions}
        </p>
      )}

      {price && (
        <p className="[position:relative] [z-index:1] [font-size:1rem] [line-height:1.7] [color:#ffffff] [.service-highlight-box_&]:[color:white] [.service-highlight-box_&_strong]:[color:white]">
          <strong>Price:</strong> {price}
        </p>
      )}

      {supportingNote && (
        <p className="[position:relative] [z-index:1] [font-size:1rem] [line-height:1.7] [.service-highlight-box_&]:[color:white]">{supportingNote}</p>
      )}

      <a className="service-highlight-book [position:relative] [z-index:1] [align-items:center] [background:rgba(255,_255,_255,_0.92)] [border-radius:999px] [color:#163041] [display:inline-flex] [font-weight:700] [justify-content:center] [margin-top:1rem] [padding:0.75rem_1.15rem] [text-decoration:none] [transition:background-color_0.2s_ease,_transform_0.2s_ease] [&:hover]:[background:white] [&:hover]:[color:#163041] [&:hover]:[transform:translateY(-1px)]" href={bookHref}>
        {bookLabel}
      </a>
    </div>
  );
}
