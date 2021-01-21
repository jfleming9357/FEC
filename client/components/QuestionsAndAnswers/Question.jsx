/* eslint-disable camelcase */
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
      .catch(err => { throw err; });
  };

  const handleHelpful = () => {
    axios.put(`proxy/api/fec2/hratx/qa/questions/${question.question_id}/helpful?question_id=${question.question_id}`)
      .then(() => setHelpful(!helpful))
      .catch(err => { throw err; });
  };

  return (
    <div className="d-question">
      <strong className="d-bold">Q:</strong>

      <div className="d-question-top">
        <span className="d-bold">{question.question_body}</span>
        <span className="d-question-toolbar d-light">
          {'Helpful ? '}
          <span
            className="d-underlined"
            onClick={helpful ? null : handleHelpful}
            style={helpful ? {textDecoration: 'none'} : null}
          >Yes </span>
          {`(${helpful ? question.question_helpfulness + 1 : question.question_helpfulness}) | `}
          <AddAnswer handleSubmit={handleNewAnswer} question_id={question.question_id} />
        </span>
      </div>
      <strong className="d-bold">A:</strong>

      <div className="d-question-bottom">
        <AnswerList
          answers={answers.length > numAnswers ? answers.slice(0, numAnswers) : answers}
          asker={question.asker_name}
        />
        {numAnswers < answers.length
          ? (<div
            className="d-adjust-answers d-bold"
            onClick={() => setNumAnswers(answers.length)}>SEE MORE ANSWERS
          </div>)
          : (numAnswers === answers.length && numAnswers > 2 && <div
            className="d-adjust-answers"
            onClick={() => setNumAnswers(2)}>Collapse Answers
          </div>)
        }
      </div>
    </div>
  );
};

export default Question;