import React, { useState, useEffect } from 'react';
import AnswerList from './AnswerList.jsx';
import AddAnswer from './AddAnswer.jsx';

const Question = ({ question }) => {
  const [ numAnswers, setNumAnswers ] = useState(2);
  const [ helpful, setHelpful ] = useState(false);

  //Get and sort answers
  let answers = Object.values(question.answers).sort((a, b) => b.helpfulness - a.helpfulness);

  const handleToggleHelpful = () => {
    //TODO
    console.log('called');
    setHelpful(!helpful);
  }

  return (
    <div className="d-question">
      <span className="d-question-Q">Q:</span>
      <div className="d-question-top">
        <span className="d-question-body">{question.question_body}</span>
        <span className="d-question-toolbar">
          {'Helpful ? '}
          <span
            className="d-underlined"
            onClick={handleToggleHelpful}
            style={helpful ? {textDecoration: 'none'} : null}
          >Yes </span>
          {`${question.question_helpfulness} | `}
          <AddAnswer question_id={question.question_id} />
        </span>
      </div>
      <div className="d-question-A">A:</div>
      <div className="d-question-bottom">
        <AnswerList
          answers={answers.length > numAnswers ? answers.slice(0, numAnswers) : answers}
          asker={question.asker_name}
        />
        {numAnswers < answers.length
          ? (<strong
            className="d-adjust-answers"
            onClick={() => setNumAnswers(answers.length)}>SEE MORE ANSWERS
          </strong>)
          : (numAnswers === answers.length && <strong
            className="d-adjust-answers"
            onClick={() => setNumAnswers(2)}>Collapse Answers
          </strong>)
        }
      </div>
    </div>
  );
};

export default Question;