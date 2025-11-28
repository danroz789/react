import { NavLink } from "react-router";

export default function AdminPage() {
    return (
        <div>
            <h1 className="text-center text-[31px] font-bold text-[#d83cff]">Административная панель сайта</h1>
            <NavLink className="" to="/quizes/create">Создать квиз</NavLink>
        </div>
    )
}
