type SectionHeadingProps = {
  index: string;
  label: string;
  note?: string;
};

function SectionHeading({ index, label, note }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="section-index"><span>{index}</span> / {label}</p>
      {note && <p className="section-note">{note}</p>}
    </div>
  );
}

export default SectionHeading;
