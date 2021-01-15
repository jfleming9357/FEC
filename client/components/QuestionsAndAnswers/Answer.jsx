import React from 'react';
import moment from 'moment';

const Answer = ({ answer, asker }) => (
  <div className="d-answer">
    <p>{answer.body}</p>
    <div className="d-answer-toolbar">
      {`by ${answer.answerer_name}`}
      {asker === answer.answerer_name && <span> - <strong>Seller</strong></span>}
      {`, ${moment(answer.date).format('MMM DD, YYYY').toString()}  |  Helpful ? `}
      <span className="d-underlined">Yes</span>
      {` (${answer.helpfulness})  | `}
      <span className="d-underlined">Report</span>
    </div>
  </div>
);

export default Answer;