import React from 'react';
import FAQAccordion from './components/FAQAccordion';
import './styles/faq-accordion.css';

const questions = [
  {
    title: 'Is this a good product?',
    content:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.',
  },
  {
    title: "My discount code doesn't work?",
    content:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.',
  },
  {
    title: 'When can I get it?',
    content:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.',
  },
  {
    title: 'What payment methods do you offer?',
    content:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.',
  },
  {
    title: 'How much does it cost?',
    content:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.',
  },
  {
    title: 'Where do you ship?',
    content:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.',
  },
];

const App2 = () => {
  return (
    <>
      <h1>Project 2 - FAQ/Accordion!</h1>
      <div className="accordion-container">
        <h2>Frequently Asked Questions</h2>
        <div className="questions">
          {questions.map(({ title, content }) => (
            <FAQAccordion title={title} content={content} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App2;
