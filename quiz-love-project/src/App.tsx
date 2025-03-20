
import React, { useState } from "react";

const QuizApp = () => {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "Как он реагирует на твои фото в соцсетях?",
      answers: [
        { text: "Всегда лайкает и комментирует ❤️", points: 2 },
        { text: "Иногда замечает", points: 1 },
        { text: "Не обращает внимания", points: 0 },
      ],
    },
    {
      question: "Сколько времени проходит, прежде чем он отвечает на твои сообщения?",
      answers: [
        { text: "Сразу! 🕐", points: 2 },
        { text: "Через пару часов", points: 1 },
        { text: "Может даже не ответить", points: 0 },
      ],
    },
  ];

  const handleAnswer = (points) => {
    setScore(score + points);
    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-red-600 to-yellow-400 p-6 text-white font-bold">
      {showResult ? (
        <div className="text-center bg-white p-8 rounded-xl shadow-xl text-gray-900">
          <h2 className="text-5xl font-bold text-red-600">🔥 Твой результат! 🔥</h2>
          <p className="text-xl mt-4">Ты набрал {score} из {questions.length * 2} баллов!</p>
          <button onClick={() => window.location.reload()} className="mt-6 px-6 py-3 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-400 transition transform hover:scale-105">
            🔄 Пройти снова
          </button>
        </div>
      ) : (
        <div className="text-center bg-white p-8 rounded-xl shadow-xl text-gray-900">
          <h2 className="text-4xl font-bold text-red-600 mb-4">{questions[step].question}</h2>
          {questions[step].answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(answer.points)}
              className="block mt-4 px-6 py-3 bg-yellow-500 text-white rounded-xl font-semibold hover:bg-yellow-400 transition transform hover:scale-105 w-64"
            >
              {answer.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuizApp;
