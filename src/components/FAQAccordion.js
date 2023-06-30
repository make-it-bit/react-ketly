import React, { useState } from 'react';

const FAQAccordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="question">
        <div className="question-title" onClick={() => setIsOpen(!isOpen)}>
          <h3>{title}</h3>
        </div>
      </div>
      {isOpen && (
        <div className="question-content">
          <p>{content}</p>
        </div>
      )}
    </>
  );
};

export default FAQAccordion;
