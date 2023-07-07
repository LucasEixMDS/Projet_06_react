import Accordion from "./Accordion";

function Description({ description }) {
  return (
    <div className="descript_container">
      <Accordion title='Description'>
        {description}
      </Accordion>
    </div>
  );
}

export default Description;
