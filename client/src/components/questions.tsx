type QuestionProps = {
  question: string;
  options: string[];
  onOptionSelect: (option: string) => void;
  selectedOption?: string;
};

const Questions: React.FC<QuestionProps> = ({
  question,
  options,
  onOptionSelect,
  selectedOption,
}) => {
  return (
    <div>
      <h3>{question}</h3>
      {options.map((option, i) => (
        <div key={i}>
          <input
            type="radio"
            id={option}
            name={question}
            value={option}
            checked={selectedOption === option}
            onChange={() => onOptionSelect(option)}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  );
};
    
export default Questions;