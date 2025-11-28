import { useState } from "react"
import CreateDirectQuestion from "../components/QuizCreation/CreateDirectQuestion"
import CreateSingleQuestion from "../components/QuizCreation/CreateSingleQuestion"
import CreateMultipleQuesiton from "../components/QuizCreation/CreateMultipleQuesiton"
import { Button, Select } from "antd"

export default function CreateQuizPage() {

    const [quiz, setQuiz] = useState([
        { id: Date.now(), type: 'direct', question: '', correctAnswer: '', options: [''] },
    ])

    function addQuestion() {
        setQuiz(
            [
                ...quiz,
                { id: Date.now(), type: 'direct', question: '', correctAnswer: '', options: [''] },
            ]
        )
    }

    function editQuestion(id, value, field) {
        setQuiz(
            quiz.map(item => {
                if (item.id === id) {
                    item = {
                        ...item,
                        [field]: value
                    }
                }

                return item
            })
        )
    }

    return (
        <div>

            <h2 className="text-center font-bold text-2xl text-amber-400">Создать новый квиз</h2>

            <div className="mt-4">



                {
                    quiz.map(question => (
                        <div>
                            <Select
                                placeholder="Выберите тип вопроса"
                                style={{ width: 240 }}
                                onChange={(value) => editQuestion(question.id, value, 'type')}
                                options={[
                                    { value: 'direct', label: 'Вопрос с прямым ответом' },
                                    { value: 'signle', label: 'Выбор из одного варианта' },
                                    { value: 'multiple', label: 'Выбор из множества вариантов' },
                                ]}
                            />

                            {
                                question.type === 'direct' && <CreateDirectQuestion question={question} editQuestion={editQuestion} />
                            }
                            {
                                question.type === 'signle' && <CreateSingleQuestion question={question} editQuestion={editQuestion} />
                            }
                            {
                                question.type === 'multiple' && <CreateMultipleQuesiton question={question} editQuestion={editQuestion} />
                            }
                        </div>

                    ))
                }


                <div className="flex gap-x-5 mt-5">
                    <Button onClick={() => addQuestion()} color="cyan" variant="outlined">
                        Добавить вопрос
                    </Button>
                    <Button color="purple" variant="solid">
                        Сохранить квиз
                    </Button>
                </div>
            </div>


        </div>
    )
}
