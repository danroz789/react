import React from 'react'
import { useForm } from 'react-hook-form'

export default function CreateUserPage() {

    const { register, handleSubmit } = useForm()

    async function onSubmit(data) {
        const formData = data
        formData.avatar = formData.avatar[0].name
        const resp = await fetch('https://api.escuelajs.co/api/v1/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
    }

    return (
        <div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col justify-center mt-10 gap-y-5 items-center'>
                <input
                    {...register('email')}
                    className='border border-cyan-500 px-2 py-1' type="email" placeholder='Введите E-mail' />
                <input
                    {...register('name')}
                    className='border border-cyan-500 px-2 py-1' type="text" placeholder='Введите имя' />
                <input
                    {...register('password')}
                    className='border border-cyan-500 px-2 py-1' type="password" placeholder='Введите пароль' />
                <select
                    {...register('role')}
                    className='border border-cyan-500 px-2 py-1'>
                    <option value="admin">Администратор</option>
                    <option value="user">Пользователь</option>
                </select>
                <input
                    {...register('avatar')}
                    className='border border-cyan-500 px-2 py-1' type="file" />

                <button>СОздать пользователя</button>
            </form>
        </div>
    )
}
