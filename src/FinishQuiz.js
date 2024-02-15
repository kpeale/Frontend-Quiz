import React from 'react';

function FinishQuiz({ points, title, icon, dispatch }) {
  return (
    <section className='section__Question'>
      <div className='section__Question-item'>
        <div className='x'>
          <img
            src={icon}
            alt='icon'
            className='image-homepage'
          />
        </div>
        <h3 className='paragraph__secondary'>{title}</h3>
      </div>

      <div className='section__Question-parent'>
        <div className='section__Question-item2'>
          <p className='section__Quiz-completed'>Quiz Completed</p>
          <p className='section__quiz-tertiary'>You scored...</p>
        </div>

        <div className='section__Question-item3'>
          <div className='section-quiz-finished'>
            <div className='section__Question-item'>
              <div className='x'>
                <img
                  src={icon}
                  alt='icon'
                  className='image-homepage'
                />
              </div>
              <h3 className='paragraph__secondary'>{title}</h3>
            </div>

            <div className='section__points'>
              <p className='section__quiz-points'>{points}</p>
            </div>
            <div className='quiz--question'>
              <p className='quiz-length'>out of 10</p>
            </div>
          </div>
          <div className='section__question-btnbx'>
            <button
              className='btn-submit'
              onClick={() => dispatch({ type: 'restart' })}
            >
              Play Again
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinishQuiz;
