import React, { useState } from 'react';
import DisplayAnswers from './DisplayAnswers';
import { Link } from 'react-router-dom';

const QuestionForm = () => {
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
    question6: '',
    question7: ''
    // Add more questions here...
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Additional processing or validation can be performed here if needed.
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          What is the name of the event
          <input
            type="text"
            name="question1"
            value={answers.question1}
            onChange={handleInputChange}
          />
        </label>
<br />
        <label>
          What is your event about?        <input
            type="text"
            name="question2"
            value={answers.question2}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Where and when is it?        <input
            type="text"
            name="question3"
            value={answers.question3}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          How will it work?        <input
            type="text"
            name="question4"
            value={answers.question4}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Who are your sponsors        <input
            type="text"
            name="question5"
            value={answers.question5}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Add mentors or judges        <input
            type="text"
            name="question6"
            value={answers.question6}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Additional info        <input
            type="text"
            name="question7"
            value={answers.question7}
            onChange={handleInputChange}
          />
        </label>

        <br />
        {/* Add more question inputs here... */}

        {answers.question1 && answers.question2 && answers.question3 && answers.question4 && answers.question5 && answers.question6 && answers.question7 && (
          <DisplayAnswers answers={answers} />
        )}
      </form>
      <Link to="/community">
        <button>Join Now</button>
      </Link>
    </div>
  );
};

export default QuestionForm;
