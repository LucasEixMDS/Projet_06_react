import React, { useRef, useState } from 'react';
import {ReactComponent as ArrowIcon} from "../assets/images/arrowLeft.svg";

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setOpen(open => !open);
    
    if (contentRef.current) contentRef.current.style.height = open ? '0px' : `${contentRef.current.firstChild.scrollHeight}px`;
  }

  return (
    <div className='accordion'>
      <button className='accordion_header' onClick={toggleAccordion}>
        <h6>{title}</h6>
        <div className={`accordion_arrow ${open ? 'accordion_arrow_open' : ''}`}>
          <ArrowIcon />
        </div>
      </button>
      <div ref={contentRef} className={`accordion_collapse ${open ? 'accordion_collapse_open' : ''}`}>
        <div>
          <p>{children}</p>
        </div>
      </div>
    </div>
  )
}

export default Accordion