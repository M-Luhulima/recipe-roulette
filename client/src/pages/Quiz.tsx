import { FC, useState } from "react";
import { quizData } from "../quizdata/quizData";
import { useNavigate } from "react-router-dom";
import Questions from "../components/questions";
import { AppDispatch, useRecipeDispatch } from "../store/store";
import { getQuizRecipe } from "../store/reducers/recipesReducer";
// import AuthDetails from "../components/auth/authDetails";


export type QuizAnswers = Array<string[]>


const Quiz: FC = () => {
  const dispatch: AppDispatch = useRecipeDispatch();
  // const [answers, setAnswers] = useState<string[]>([]);
  const [answers, setAnswers] = useState<QuizAnswers>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const navigate = useNavigate();

  const handleOptionSelect = (option: string[]) => {

    const newAnswers = [...answers];

    newAnswers[currentQuestion] = option;
    setAnswers(newAnswers);

  };

  const handleNext = () => {
    if (currentQuestion === quizData.length - 1) {
      console.log('answers: ', answers);
      dispatch(getQuizRecipe(answers));
      navigate(`/results`);
    } else {
      console.log('setCurrentQuestion answers: ', answers);
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleBack = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleHomepage = () => {
    navigate(`/`);
  };

  return (
    <section className="quiz">
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
      <button className="quiz__quit-button" onClick={handleHomepage}>
          Quit Quiz
        </button>
<article className="quiz__buttons-container">
      {currentQuestion > 0 ? <button className="quiz__back-button"onClick={handleBack}>Back</button> : ''}
      <button className="quiz__next-button" onClick={handleNext}>Next</button>
      {/* <AuthDetails /> */}
</article>

    </section>
  );
};

export default Quiz;
