import React from 'react';
import Answer from './Answer.jsx';

const AnswerList = ({ answers, asker }) => {
  return <>
    {answers.map(answer => <Answer key={answer.id} answer={answer} asker={asker} />)}
  </>;
};

export default AnswerList;