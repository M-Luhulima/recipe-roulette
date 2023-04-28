// import { FC } from "react";

// type QuestionProps = {
//   question: string;
//   options: string[];
//   onOptionSelect: (option: string) => void;
//   selectedOption?: string;
// };

// const Questions: FC<QuestionProps> = ({
//   question,
//   options,
//   onOptionSelect,
//   selectedOption,
// }) => {
//   return (
//     <div>
//       <h3>{question}</h3>
//       {options.map((option, i) => (
//         <div key={i}>
//           <input
//             type="checkbox"
//             id={option}
//             name={question}
//             value={option}
//             checked={selectedOption === option}
//             onChange={() => onOptionSelect(option)}
//           />
//           <label htmlFor={option}>{option}</label>
//         </div>
//       ))}
//     </div>
//   );
// };
    
// export default Questions;
import { FC } from "react";

type QuestionProps = {
  question: string;
  options: string[];
  onOptionSelect: (option: string[]) => void; // Update the type here
  selectedOption?: string[];
  multiSelect: boolean;
};

const Questions: FC<QuestionProps> = ({
  question,
  options,
  onOptionSelect,
  selectedOption,
  multiSelect
}) => {
  const handleOptionSelect = (option: string) => {
    if (multiSelect) {
      if (selectedOption?.includes(option)) {
        const newSelectedOption = selectedOption.filter((o) => o !== option);
        onOptionSelect(newSelectedOption);
      } else {
        const newSelectedOption = [...(selectedOption || []), option];
        onOptionSelect(newSelectedOption);
      }
    } else {
      if (selectedOption?.includes(option)) {
        onOptionSelect([]);
      } else {
        onOptionSelect([option]);
      }
    }
  };

  return (
    <div>
      <h3>{question}</h3>
      {options.map((option, i) => (
        <div key={i}>
          <input
            type="checkbox"
            id={option}
            name={question}
            value={option}
            checked={selectedOption?.includes(option) || false}
            onChange={() => handleOptionSelect(option)}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default Questions;
