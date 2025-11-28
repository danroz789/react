import { useEffect, useState } from "react";
import { NavLink } from "react-router";




export default function IndexPage() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        async function getData() {
            const response = await fetch('https://api.escuelajs.co/api/v1/users')
            const data = await response.json()
            setUsers(data)
        }

        getData()

    }, [])


    return (
        <div>


            <NavLink to="/admin">В админку!</NavLink>
            Главная страница сайта

            {
                users.map((user) => (

                    <div>
                        <p>{user.email}</p>
                        <p>{user.name}</p>
                    </div>
                ))
            }

        </div>
    )
}
