import React from 'react';

const DisplayAnswers = ({ answers }) => {
  return (
    <div>
      <h1>Answers</h1>
      <p>Question 1 Answer: {answers.question1}</p>
      <p>Question 2 Answer: {answers.question2}</p>
      <p>Question 1 Answer: {answers.question3}</p>
      <p>Question 2 Answer: {answers.question4}</p>
      <p>Question 1 Answer: {answers.question5}</p>
      <p>Question 2 Answer: {answers.question6}</p>
      <p>Question 1 Answer: {answers.question7}</p>
      {/* Display more answers here */}
    </div>
  );
};

export default DisplayAnswers;
