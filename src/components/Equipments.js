import Accordion from './Accordion';

function Equipement({ equipments }) {
  return (
    <div className="descript_container">
      <Accordion title='Équipements'>
        <ul>
          {equipments.map((equipment, index) => (
            <li className="descript_infos" key={index}>
              {equipment}
            </li>
          ))}
        </ul>
      </Accordion>
    </div>
  );
}

export default Equipement;
