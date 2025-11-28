import QuizDirectQuestion from "./components/QuizDirectQuestion";
import QuizMultipleAnswer from "./components/QuizMultipleAnswer";
import QuizSignleAnswer from "./components/QuizSignleAnswer";

export default function App() {


  return (
    <div>
      <QuizDirectQuestion question="Кв. Корень из 16" correctAnswer="4" />
      <QuizSignleAnswer
        correctAnswer="Стройбат"
        question="Где я буду служить, когда меня отчислят?"
        variants={["На границе", 'Стройбат', "Под Ростовом", "Рязань ВДВ"]}
      />
      <QuizMultipleAnswer
        question="Кто пойдет в Армию в 2026 году?"
        variants={['Высоцкий', "Григораш", "Руденко", "Смелый"]}
        correctAnswer={['Высоцкий', "Григораш"]}
      />

    </div>
  )

}