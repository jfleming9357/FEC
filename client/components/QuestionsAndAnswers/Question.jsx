import React, { useState, useEffect } from 'react';
import AnswerList from './AnswerList.jsx';

const Question = ({ question }) => {
  const [ numAnswers, setNumAnswers ] = useState(2);
  let answers = Object.values(question.answers);
  return (
    <div className="d-question">
      <div className="d-question-top">
        <span className="d-question-body">Q: {question.question_body}</span>
        <span className="d-question-toolbar">Helpful ? <span className="d-underlined">Yes </span>{question.question_helpfulness} | <span className="d-underlined">Add Answer</span></span>
      </div>

      <AnswerList
        answers={answers.length > numAnswers ? answers.slice(0, numAnswers) : answers}
        asker={question.asker_name}
      />
      {numAnswers < answers.length &&
        <strong
          className="d-more-answers"
          onClick={() => setNumAnswers(numAnswers + 2)}>LOAD MORE ANSWERS
        </strong>}
    </div>
  );
};

export default Question;