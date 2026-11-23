const phases = [
  { number: '01', title: 'Discover', note: 'Explore the problem space', kind: 'diverge' },
  { number: '02', title: 'Define', note: 'Frame the right challenge', kind: 'converge' },
  { number: '03', title: 'Develop', note: 'Explore possible responses', kind: 'diverge' },
  { number: '04', title: 'Deliver', note: 'Refine toward a solution', kind: 'converge' },
];

function DoubleDiamond() {
  return (
    <section className="method-section" aria-labelledby="method-title">
      <div className="method-copy">
        <p className="eyebrow">A WAY OF WORKING</p>
        <h2 id="method-title">The Double Diamond</h2>
        <p>
          A flexible framework for moving from a broad understanding of the
          problem to a considered response. The phases shown here are a guide,
          not a fixed sequence.
        </p>
      </div>
      <div className="diamond-panel">
        <div className="diamond-graphic" aria-hidden="true">
          <div className="diamond-shape diamond-one"><span /></div>
          <div className="diamond-shape diamond-two"><span /></div>
          <div className="diamond-axis" />
          <span className="diamond-pole pole-left">OPEN</span>
          <span className="diamond-pole pole-middle">FRAME</span>
          <span className="diamond-pole pole-right">REFINE</span>
        </div>
        <ol className="phase-list">
          {phases.map((phase) => (
            <li className={'phase phase-' + phase.kind} key={phase.number}>
              <span className="phase-number">{phase.number}</span>
              <div><strong>{phase.title}</strong><span>{phase.note}</span></div>
            </li>
          ))}
        </ol>
        <p className="diagram-caption">WIDEN THE LENS · FOCUS THE WORK · WIDEN AGAIN · MAKE IT REAL</p>
      </div>
    </section>
  );
}

export default DoubleDiamond;
