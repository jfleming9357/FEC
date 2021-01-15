import React from 'react';
import Question from './Question.jsx';

const QuestionList = ({ questions }) => {
  return (
    <div className="d-question-list" >
      {questions.map(question =>
        <Question
          id={question.question_id}
          key={question.question_id}
          question={question}
        />
      )}
    </div>
  );
};

export default QuestionList;