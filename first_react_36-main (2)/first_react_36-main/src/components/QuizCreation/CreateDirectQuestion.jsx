import { Input } from "antd";

export default function CreateDirectQuestion({ question, editQuestion }) {

    return (
        <div>
            <label>
                <p>Текст вопроса</p>
                <Input style={{ width: 240 }} value={question.question} type="text" onInput={(e) => editQuestion(question.id, e.target.value, 'question')} placeholder="Вопрос" />
            </label>
            <label>
                <p>Правильный ответ</p>
                <Input style={{ width: 240 }} value={question.correctAnswer} type="text" onInput={(e) => editQuestion(question.id, e.target.value, 'correctAnswer')} placeholder="Ответ" />
            </label>
        </div>
    )
}
