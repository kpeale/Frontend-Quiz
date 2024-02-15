import React, { useEffect, useReducer, useState } from 'react';
import HomePage from './HomePage';
import HtmlQuestions from './HtmlQuestions';
import CssQuestions from './CssQuestions';
import JsQuestion from './JsQuestion';
import AccessibilityQstn from './AccessibilityQstn';
import FinishQuiz from './FinishQuiz';

function App() {
  const initialState = {
    quizzes: [],
    status: 'loading',
    index: 0,
    currentQuiz: null,
    answer: null,
    points: 0,
  };

  function reducer(state, action) {
    switch (action.type) {
      case 'dataReceived':
        return {
          ...state,
          quizzes: action.payload,
          status: 'ready',
        };
      case 'dataFailed':
        return {
          ...state,
          status: 'error',
        };
      case 'start':
        return {
          ...state,
          status: 'active',
          currentQuiz: 'HTML',
        };
      case 'startCSS':
        return {
          ...state,
          status: 'active',
          currentQuiz: 'CSS',
        };

      case 'startJS':
        return {
          ...state,
          status: 'active',
          currentQuiz: 'JavaScript',
        };

      case 'startAccessibility':
        return {
          ...state,
          status: 'active',
          currentQuiz: 'Accessibility',
        };

      case 'nextQuestion':
        // Ensure index doesn't exceed the length of questions array
        const newIndex = Math.min(
          state.index + 1,
          state.quizzes[0].questions.length - 1
        );

        return {
          ...state,
          index: newIndex,
          answer: null, // Reset answer when moving to the next question
        };

      case 'newAnswer':
        const currentQuestion = state.quizzes[0].questions[state.index];
        const isCorrect = action.payload === currentQuestion.answer;
        const pointsToAdd = isCorrect ? 2 : 0;
        return {
          ...state,
          answer: action.payload,
          isCorrect: isCorrect,
          points: state.points + pointsToAdd,
        };
      case 'Finish':
        return {
          ...state,
          status: 'finished',
          points: state.points,
        };
      case 'restart':
        return {
          ...state,
          quizzes: state.quizzes,
          status: 'ready',
        };

      default:
        throw new Error('action unknown');
    }
  }

  const [{ quizzes, status, index, currentQuiz, answer, points }, dispatch] =
    useReducer(reducer, initialState);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const currentQuizData = quizzes.find((quiz) => quiz.title === currentQuiz);
    if (currentQuizData) {
      const totalQuestions = currentQuizData.questions.length;
      const allQuestionsAnswered = index >= totalQuestions - 1;
      if (allQuestionsAnswered) {
        setFinished(true);
      }
    }
  }, [index, quizzes, currentQuiz]);

  useEffect(() => {
    fetch('http://localhost:8000/quizzes')
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'dataReceived', payload: data }))
      .catch((err) => dispatch({ type: 'dataFailed' }));
  }, []);

  const quizIcons = {
    HTML: '../icon-html.svg',
    CSS: '../public/icon-css.svg',
    JavaScript: '../public/icon-js.svg',
    Accessibility: '../public/icon-accessibility.svg',
  };

  return (
    <>
      {status === 'ready' && <HomePage dispatch={dispatch} />}

      {status === 'active' && (
        <>
          {currentQuiz === 'HTML' && (
            <HtmlQuestions
              quizzes={quizzes}
              index={index}
              dispatch={dispatch}
              answer={answer}
              quiz={quizzes[index]}
              points={points}
            />
          )}

          {currentQuiz === 'CSS' && (
            <CssQuestions
              quizzes={quizzes}
              index={index}
              dispatch={dispatch}
              answer={answer}
              quiz={quizzes[index]}
              points={points}
            />
          )}

          {currentQuiz === 'JavaScript' && (
            <JsQuestion
              quizzes={quizzes}
              index={index}
              dispatch={dispatch}
              answer={answer}
              quiz={quizzes[index]}
            />
          )}

          {currentQuiz === 'Accessibility' && (
            <AccessibilityQstn
              quizzes={quizzes}
              index={index}
              dispatch={dispatch}
              answer={answer}
              quiz={quizzes[index]}
            />
          )}
        </>
      )}

      {status === 'finished' && (
        <FinishQuiz
          points={points}
          title={currentQuiz}
          icon={quizIcons[currentQuiz]}
          dispatch={dispatch}
        />
      )}
    </>
  );
}

export default App;
