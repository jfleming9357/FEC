import React, { useState } from 'react';
import moment from 'moment';

const Answer = ({ answer, asker }) => {
  const [reported, setReported] = useState(false);
  const [ helpful, setHelpful ] = useState(false);

  const handleToggleHelpful = () => {
    //TODO
    console.log('called');
    setHelpful(!helpful);
  }

  return <>
    <div className="d-answer">
      <div>{answer.body}</div>
      <div className="d-answer-toolbar">
        {`by ${answer.answerer_name}`}
        {asker === answer.answerer_name && <span> - <strong>Seller</strong></span>}
        {`, ${moment(answer.date).format('MMM DD, YYYY').toString()}  |  Helpful ? `}
        <span
          className="d-underlined"
          onClick={handleToggleHelpful}
          style={helpful ? {textDecoration: 'none'} : null}
        >Yes</span>
        {` (${answer.helpfulness})  | `}
        {reported
          ? <span
              className="d-underlined"
              style={{filter: "brightness(300%)", textDecoration: 'none', pointerEvents: 'none' }}
            >Reported</span>
          : <span
              className="d-underlined"
              onClick={() => setReported(true)}
            >Report</span>
        }
      </div>
    </div>
  </>
};

export default Answer;