import { useEffect, useState } from "react"

export default function QuizMultipleAnswer({ question, correctAnswer, variants }) {



    const [userAnswer, setUserAnswer] = useState([])
    const [result, setResult] = useState('')

    function changeAnswer(answer) {
        if (userAnswer.includes(answer)) {
            setUserAnswer(
                userAnswer.filter(item => item !== answer)
            )
        } else {
            setUserAnswer(
                [
                    ...userAnswer,
                    answer
                ]
            )
        }
    }

    useEffect(() => {

        if (
            userAnswer.length === correctAnswer.length &&
            correctAnswer.every(correct => userAnswer.includes(correct))
        ) {
            setResult('Верно!')
        } else {
            setResult('Неверно!')
        }

    }, [userAnswer])

    return (
        <div>

            <h3>{question}</h3>

            <div>
                {
                    variants.map(variant => (
                        <label>
                            <input type="checkbox" onChange={() => changeAnswer(variant)} />
                            {variant}
                        </label>
                    ))
                }


            </div>
            <p>{result}</p>
        </div>
    )
}
