import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar.jsx';
import QuestionList from './QuestionList.jsx';
import AddQuestion from './AddQuestion.jsx';
import tempProductQuestions from './tempData.js';

const QuestionsAndAnswers = (props) => {
  const [ numQuestions, setNumQuestions ] = useState(2);
  //Initial questions set is sorted by helpfulness
  const initialQuestions = tempProductQuestions.results.sort((a, b) => b.question_helpfulness - a.question_helpfulness);
  const [ questions, setQuestions ] = useState(initialQuestions);

  const handleAddQuestion = () => {
    console.log('Adding question!');
    //TODO
  }

  //Search function
  const handleSearch = (e) => {
    let val = e.target.value;
    if (val.length > 2) {
      setQuestions(initialQuestions.filter((question => question.question_body.toLowerCase().indexOf(val) > -1)))
    } else {
      setQuestions(initialQuestions);
    }
  }

  return (
    <div
      id="questions-and-answers"
      className="d-module"
    >
      <strong>QUESTIONS &amp; ANSWERS</strong>
      <SearchBar handleInput={handleSearch}/>
      {questions.length > 0 &&
        <>
          <QuestionList
            questions={questions.length > numQuestions ? questions.slice(0, numQuestions) : questions}
          />
          {numQuestions < questions.length &&
            <button
              className="d-border-button"
              onClick={() => setNumQuestions(numQuestions + 2)}
            >
              More Questions
            </button>}
        </>
      }
      <AddQuestion handleClick={handleAddQuestion} />
    </div>
  );
};

export default QuestionsAndAnswers;