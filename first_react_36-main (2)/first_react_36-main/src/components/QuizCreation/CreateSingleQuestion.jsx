export default function CreateSingleQuestion({ question, editQuestion }) {
    return (
        <div>
            <label>
                <p>Текст вопроса</p>
                <input value={question.question} type="text" onInput={(e) => editQuestion(question.id, e.target.value, 'question')} placeholder="Вопрос" />
            </label>
            <div>
                <p>Варианты ответа</p>
                <div className="">
                    {
                        question.options.map((option, index) => (
                            <div className="flex gap-x-3">
                                <span>{index + 1}.</span>
                                <input value={option} type="text" />
                            </div>

                        ))
                    }
                </div>
                <button
                    onClick={() => editQuestion(question.id, [...question.options, ''], 'options')}
                    className="px-2 py-1 text-sm rounded-md border border-gray-500 text-gray-700"
                >Добавить вариант ответа</button>
            </div>

        </div>
    )
}
