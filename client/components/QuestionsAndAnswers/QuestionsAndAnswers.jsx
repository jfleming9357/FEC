import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar.jsx';
import QuestionList from './QuestionList.jsx';
import AddQuestion from './AddQuestion.jsx';
import tempProductQuestions from './tempData.js';

const QuestionsAndAnswers = (props) => {
  let questions = tempProductQuestions.results;
  const [ numQuestions, setNumQuestions ] = useState(2);

  //Sort based on helpfulness
  questions.sort((a, b) => b.question_helpfulness - a.question_helpfulness);


  return (
    <div id="questions-and-answers" className="d-module">
      <strong>QUESTIONS &amp; ANSWERS</strong>
      <SearchBar />
      <QuestionList questions={questions.length > numQuestions ? questions.slice(0, numQuestions) : questions}/> {/* connect more questions button later */}
      <button className="d-border-button">
        More Questions
      </button>
      <AddQuestion />
    </div>
  );
};

export default QuestionsAndAnswers;