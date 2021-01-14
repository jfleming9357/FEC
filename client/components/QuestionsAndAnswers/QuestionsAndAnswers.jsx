import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar.jsx';
import QuestionList from './QuestionList.jsx';
import AddQuestion from './AddQuestion.jsx';

const QuestionsAndAnswers = (props) => {
  return (
    <div id="questions-and-answers" className="d-module">
      <strong>QUESTIONS &amp; ANSWERS</strong>
      <SearchBar />
      <QuestionList numQuestions={2}/> {/* connect more questions button later */}
      <button className="d-border-button">
        More Questions
      </button>
      <AddQuestion />
    </div>
  );
};

export default QuestionsAndAnswers;