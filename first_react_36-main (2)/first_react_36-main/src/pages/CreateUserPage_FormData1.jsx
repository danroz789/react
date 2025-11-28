import React from 'react'

export default function CreateUserPage() {

    async function handleSubmit(e) {
        e.preventDefault()

        const formData = new FormData(e.target)

        console.log()

        // https://api.escuelajs.co/api/v1/users MIME Type

        const resp = await fetch('https://api.escuelajs.co/api/v1/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": formData.get('email'),
                "name": formData.get('name'),
                "password": formData.get('password'),
                "role": formData.get('role'),
                "avatar": formData.get('avatar').name
            })
        })

    }

    return (
        <div>
            <form
                onSubmit={(e) => handleSubmit(e)}
                className='flex flex-col justify-center mt-10 gap-y-5 items-center'>
                <input
                    name='email'
                    className='border border-cyan-500 px-2 py-1' type="email" placeholder='Введите E-mail' />
                <input
                    name='name'
                    className='border border-cyan-500 px-2 py-1' type="text" placeholder='Введите имя' />
                <input
                    name='password'
                    className='border border-cyan-500 px-2 py-1' type="password" placeholder='Введите пароль' />
                <select
                    name='role'
                    className='border border-cyan-500 px-2 py-1'>
                    <option value="admin">Администратор</option>
                    <option value="user">Пользователь</option>
                </select>
                <input
                    name='avatar'
                    className='border border-cyan-500 px-2 py-1' type="file" />

                <button>СОздать пользователя</button>
            </form>
        </div>
    )
}
