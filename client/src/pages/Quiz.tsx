// const Quiz = () => {
//     return (
//       <div> quiz </div>    
//     )
//     }
    
// export default Quiz;

// import React, { useState } from "react";
// import { quizData } from "../quizdata/quizData";

// const Quiz: React.FC = () => {
//   const [answers, setAnswers] = useState<string[]>([]);
//   const [currentQuestion, setCurrentQuestion] = useState<number>(0);

//   const handleOptionSelect = (option: string) => {
//     const newAnswers = [...answers];
//     newAnswers[currentQuestion] = option;
//     setAnswers(newAnswers);
//   };

//   const handleNext = () => {
//     if (currentQuestion === quizData.length - 1) {
//       // show recipes
//     } else {
//       setCurrentQuestion(currentQuestion + 1);
//     }
//   };

//   return (
//     <div>
//       <Question
//         question={quizData[currentQuestion].question}
//         options={quizData[currentQuestion].options}
//         onOptionSelect={handleOptionSelect}
//         selectedOption={answers[currentQuestion]}
//       />
//       <button onClick={handleNext}>Next</button>
//     </div>
//   );
// };

// // type QuestionProps = {
// //   question: string;
// //   options: string[];
// //   onOptionSelect: (option: string) => void;
// //   selectedOption?: string;
// // };

// // const Question: React.FC<QuestionProps> = ({
// //   question,
// //   options,
// //   onOptionSelect,
// //   selectedOption,
// // }) => {
// //   return (
// //     <div>
// //       <h3>{question}</h3>
// //       {options.map((option, i) => (
// //         <div key={i}>
// //           <input
// //             type="radio"
// //             id={option}
// //             name={question}
// //             value={option}
// //             checked={selectedOption === option}
// //             onChange={() => onOptionSelect(option)}
// //           />
// //           <label htmlFor={option}>{option}</label>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// export default Quiz;

import React, { useState } from "react";
import { quizData } from "../quizdata/quizData";
import { useNavigate } from "react-router-dom";
import Questions from "../components/questions";

const Quiz: React.FC = () => {
  const [answers, setAnswers] = useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const navigate = useNavigate();

  const handleOptionSelect = (option: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = option;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion === quizData.length - 1) {
      navigate(`/results`);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div>
      <Questions
        question={quizData[currentQuestion].question}
        options={quizData[currentQuestion].options}
        onOptionSelect={handleOptionSelect}
        selectedOption={answers[currentQuestion]}
      />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Quiz;