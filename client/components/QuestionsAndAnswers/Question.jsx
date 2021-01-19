import React, { useState, useEffect } from 'react';
import AnswerList from './AnswerList.jsx';
import AddAnswer from './AddAnswer.jsx';
import axios from 'axios';

const Question = ({ question }) => {
  const [ answers, setAnswers ] = useState(Object.values(question.answers).sort((a, b) => b.helpfulness - a.helpfulness));
  const [ numAnswers, setNumAnswers ] = useState(2);
  const [ helpful, setHelpful ] = useState(false);

  const handleNewAnswer = (answer) => {
    axios.post(`proxy/api/fec2/hratx/qa/questions/${question.question_id}/answers`, answer)
      .then(() => setAnswers([...answers, { id: answers.length + 1, body: answer.body, answerer_name: answer.name, date: new Date(), helpfulness: 0, photos: answer.photos }]))
      .then(() => setNumAnswers(answers.length + 1))
      .catch(err => {throw err});
  }

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
          <AddAnswer handleSubmit={handleNewAnswer} question_id={question.question_id} />
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