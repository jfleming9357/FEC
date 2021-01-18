import React, { useState, useEffect, useContext } from 'react';
import SearchBar from './SearchBar.jsx';
import QuestionList from './QuestionList.jsx';
import AddQuestion from './AddQuestion.jsx';
import tempProductQuestions from './tempData.js';
import { ProductContext } from '../../context/ProductContext.js';
import axios from 'axios';

const QuestionsAndAnswers = (props) => {
  const { curProduct } = useContext(ProductContext);
  const [ numQuestions, setNumQuestions ] = useState(2);
  //Initial questions set is sorted by helpfulness
  const initialQuestions = tempProductQuestions.results.sort((a, b) => b.question_helpfulness - a.question_helpfulness);
  const [ questions, setQuestions ] = useState(initialQuestions);

  curProduct.id = 12013;
  //Initial data fetch
  useEffect(() => {
    axios.get(`proxy/api/fec2/hratx/qa/questions?product_id=${curProduct.id}`)
      .then(res => {
        setQuestions(res.data.results);
      });
  }, [curProduct.id]);

  const handleAddQuestion = () => {
    // console.log('Adding question!');
    //TODO
  };

  //Search function
  const handleSearch = (e) => {
    let val = e.target.value;
    if (val.length > 2) {
      setQuestions(initialQuestions.filter((question => question.question_body.toLowerCase().indexOf(val) > -1)));
    } else {
      setQuestions(initialQuestions);
    }
  };

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