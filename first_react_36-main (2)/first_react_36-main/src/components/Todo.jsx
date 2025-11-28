import { useEffect, useState } from "react"

export default function Todo() {



    const [todos, setTodos] = useState([
        { id: 2, todo: 'Забрать зарплату', completed: false },
        { id: 1, todo: 'Купить молоко', completed: false },
        { id: 3, todo: 'Выгулять собаку', completed: true },
    ])

    const [filteredTodos, setFilteredTodos] = useState([])

    const [newTodo, setNewTodo] = useState('')

    const [currentFilter, setCurrentFilter] = useState('All')

    useEffect(() => {

        if (currentFilter === 'Done') {
            setFilteredTodos(
                todos.filter(item => {
                    return item.completed === true
                })
            )
        } else if (currentFilter === 'Going') {
            setFilteredTodos(
                todos.filter(item => {
                    return item.completed === false
                })
            )
        } else {
            setFilteredTodos(todos)
        }

    }, [currentFilter, todos])

    function toggleCompletion(id) {


        setTodos(


            todos.map(item => {

                if (item.id === id) {
                    item.completed = !item.completed
                }

                return item
            })

        )
    }

    function addTodo(event) {
        event.preventDefault()

        setTodos(
            [
                ...todos,
                { id: todos.length + 1, todo: newTodo, completed: false }
            ]
        )

        setNewTodo('')

    }

    function removeTodo(id) {
        setTodos(
            todos.filter(item => {
                return item.id !== id
            })
        )
    }

    return (

        <div>

            <QuizDirectQuestion />


            <div className="flex gap-x-5">
                <label>
                    <input onChange={() => setCurrentFilter('All')} type="radio" name="filter" />
                    Все задачи
                </label>
                <label>
                    <input onChange={() => setCurrentFilter('Going')} type="radio" name="filter" />
                    Невыполненные
                </label>
                <label>
                    <input onChange={() => setCurrentFilter('Done')} type="radio" name="filter" />
                    Выполненные
                </label>
            </div>

            {
                filteredTodos.map((элемент_массива) => (
                    <div className="flex items-center gap-x-5" style={элемент_массива.completed ? { textDecoration: 'line-through' } : {}}>
                        <span>{элемент_массива.id}</span>
                        <input onChange={() => toggleCompletion(элемент_массива.id)} checked={элемент_массива.completed} type="checkbox" />
                        <span>{элемент_массива.todo}</span>
                        <button onClick={() => removeTodo(элемент_массива.id)}>X</button>
                    </div>
                ))
            }

            <form onSubmit={(event) => addTodo(event)}>
                <input value={newTodo} onInput={(event) => setNewTodo(event.target.value)} type="text" placeholder="Введите новое дело..." />
                <button>Создать</button>
            </form>

        </div>

    )

}