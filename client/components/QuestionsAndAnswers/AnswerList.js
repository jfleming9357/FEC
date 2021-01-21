import React from 'react';
import Answer from './Answer.js';

const AnswerList = ({ answers, asker }) => {
  return (
    <div style={{ maxHeight: '50vh', overflowY: 'scroll' }}>
      {answers.map((answer) => (
        <Answer key={answer.id} answer={answer} asker={asker} />
      ))}
    </div>
  );
};

export default AnswerList;
