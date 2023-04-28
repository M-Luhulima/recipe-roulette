// import { FC, useState } from "react";
// import { quizData } from "../quizdata/quizData";
// import { useNavigate } from "react-router-dom";
// import Questions from "../components/questions";

// const Quiz: FC = () => {
//   const [answers, setAnswers] = useState<string[]>([]);
//   const [currentQuestion, setCurrentQuestion] = useState<number>(0);
//   const navigate = useNavigate();

//   const handleOptionSelect = (option: string) => {
//     const newAnswers = [...answers];
//     newAnswers[currentQuestion] = option;
//     setAnswers(newAnswers);
//   };

//   const handleNext = () => {
//     if (currentQuestion === quizData.length - 1) {
//       navigate(`/results`);
//     } else {
//       setCurrentQuestion(currentQuestion + 1);
//     }
//   };

//   return (
//     <div>
//       <Questions
//         question={quizData[currentQuestion].question}
//         options={quizData[currentQuestion].options}
//         onOptionSelect={handleOptionSelect}
//         selectedOption={answers[currentQuestion]}
//       />
//       <button onClick={handleNext}>Next</button>
//     </div>
//   );
// };

// export default Quiz;

import { FC, useState } from "react";
import { quizData } from "../quizdata/quizData";
import { useNavigate } from "react-router-dom";
import Questions from "../components/questions";


type QuizAnswers = Array<string[]>


const Quiz: FC = () => {
  // const [answers, setAnswers] = useState<string[]>([]);
  const [answers, setAnswers] = useState<QuizAnswers>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const navigate = useNavigate();

  const handleOptionSelect = (option: string[]) => {

    const newAnswers = [...answers];

    newAnswers[currentQuestion] = option;
    setAnswers(newAnswers);



    /*
    [['type'], ['diet'], ['intolerances: ']]
    ['type', 'diet', 'intolerances: ']

    {
      type: 'dsafds',
      diet: 'dafsd',
      // intolerances: ['sdf', 'sdfds', 'sdfafd']
      intolerances: ['sdf', 'sdfds', 'sdfafd'].join(',') => 'sdf, sdfds, sdfafd' 
    }
    */
  };

  const handleNext = () => {
    if (currentQuestion === quizData.length - 1) {
      navigate(`/results`);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleBack = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  return (
    <div>
      <Questions
        question={quizData[currentQuestion].question}
        options={quizData[currentQuestion].options}
        onOptionSelect={handleOptionSelect}
        selectedOption={answers[currentQuestion]}
        multiSelect={currentQuestion === 2}
      />
      <br/>
      {answers.join(' - ')}
      <br/>
      {currentQuestion > 0 ? <button onClick={handleBack}>Back</button> : ''}
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Quiz;

// import { FC, useState } from "react";
// import { quizData } from "../quizdata/quizData";
// import { useNavigate } from "react-router-dom";
// import Questions from "../components/questions";

// const Quiz: FC = () => {
//   const [answers, setAnswers] = useState<string[]>([]);
//   const [currentQuestion, setCurrentQuestion] = useState<number>(0);
//   const navigate = useNavigate();

//   const handleOptionSelect = (option: string) => {
//     const newAnswers = [...answers];
//     newAnswers[currentQuestion] = option;
//     setAnswers(newAnswers);
//   };

//   const handleNext = () => {
//     if (currentQuestion === quizData.length - 1) {
//       navigate(`/results`);
//     } else {
//       setCurrentQuestion(currentQuestion + 1);
//     }
//   };

//   return (
//     <div>
//       <Questions
//         question={quizData[currentQuestion].question}
//         options={quizData[currentQuestion].options}
//         onOptionSelect={handleOptionSelect}
//         selectedOption={answers[currentQuestion]}
//       />
//       <button onClick={handleNext}>Next</button>
//     </div>
//   );
// };

// export default Quiz;