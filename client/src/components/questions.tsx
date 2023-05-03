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
    <section className="questions">
      <h3 className="questions__subtitle">{question}</h3>
      {options.map((option, i) => (
        <article className="questions__options" key={i}>
          <input
            type="checkbox"
            id={option}
            name={question}
            value={option}
            checked={selectedOption?.includes(option) || false}
            onChange={() => handleOptionSelect(option)}
            className="questions__input"
          />
          <label className="questions__label" htmlFor={option}>{option}</label>
        </article>
      ))}
    </section>
  );
};

export default Questions;
