import { useEffect, useState } from "react"

export default function QuizSignleAnswer({ correctAnswer, question, variants }) {


    const [userAnswer, setUserAnswer] = useState('')
    const [result, setResult] = useState('')

    useEffect(() => {
        if (userAnswer == correctAnswer) {
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
                            <input type="radio" name="answer" onChange={() => setUserAnswer(variant)} />
                            {variant}
                        </label>
                    ))
                }
            </div>
            <p>{result}</p>
        </div>
    )
}
