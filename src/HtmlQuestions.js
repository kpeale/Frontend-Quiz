function HtmlQuestions({ dispatch, quizzes, index, answer, quiz, points }) {
  const hasAnswered = answer !== null;
  const [htmlQuestions] = quizzes; // Destructure only htmlQuestions
  const currentQuestion = htmlQuestions.questions[index];
  const totalQuestions = htmlQuestions.questions.length;

  const handleNextQuestion = () => {
    if (index === totalQuestions - 1) {
      dispatch({ type: 'Finish' });
    } else {
      dispatch({ type: 'nextQuestion' });
    }
  };

  const renderOptions = (options) => {
    // console.log(points);
    return options.map((option, idx) => {
      let isCorrect = false;

      if (answer !== null && idx === answer) {
        isCorrect = idx === currentQuestion.answer;
      }

      let className = 'btn-options';

      if (answer !== null && isCorrect) {
        className += ' correct';
      } else if (answer !== null && idx === answer && !isCorrect) {
        className += ' wrong';
      } else if (idx === currentQuestion.answer && hasAnswered) {
        className += ' correct';
      }

      return (
        <div
          className='options-container'
          key={idx}
        >
          <div className='letters-bx'>
            <span className='option-letter'>
              {String.fromCharCode(65 + idx)}.
            </span>
          </div>
          <div className='btnn-bx'>
            <button
              className={className}
              disabled={answer !== null}
              onClick={() => dispatch({ type: 'newAnswer', payload: idx })}
            >
              {option}
            </button>
          </div>
        </div>
      );
    });
  };

  return (
    <section className='section__Question'>
      <div className='section__Question-item'>
        <div className='x'>
          <img
            src='../icon-html.svg'
            alt='icon'
            className='image-homepage'
          />
        </div>
        <h3 className='paragraph__secondary'>{htmlQuestions.title}</h3>
      </div>

      <div className='section__Question-parent'>
        {/* Remove filter and directly access the question at the specified index */}
        <div
          className='section__Question-item2'
          key={index}
        >
          <p className='section__Question-heading-primary'>
            Question {index + 1} of {totalQuestions}
          </p>
          <p className='section__question-heading-tertiary'>
            {currentQuestion.question}
          </p>
        </div>

        <div className='section__Question-item3'>
          {renderOptions(currentQuestion.options)}
          <div className='section__question-btnbx'>
            <button
              className='btn-submit'
              onClick={handleNextQuestion}
            >
              {index === totalQuestions - 1 ? 'Finish Quiz' : 'Submit Answer'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HtmlQuestions;
