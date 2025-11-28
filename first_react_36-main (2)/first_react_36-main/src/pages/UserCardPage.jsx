import { useEffect, useState } from "react"
import { useParams } from "react-router"

export default function UserCardPage() {

    const params = useParams()

    const [user, setUser] = useState([])

    useEffect(() => {
        async function getData() {
            const response = await fetch(`https://api.escuelajs.co/api/v1/users/${params.id}`)
            const data = await response.json()
            setUser(data)
        }

        getData()

    }, [])


    return (
        <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
        </div>
    )
}
