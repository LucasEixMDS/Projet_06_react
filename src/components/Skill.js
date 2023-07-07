import Accordion from './Accordion';

function Skill({ title, skill }) {
  return (
    <div className="flex-container">
      <Accordion title={title}>
        {skill}
      </Accordion>
    </div>
  );
}

export default Skill;
