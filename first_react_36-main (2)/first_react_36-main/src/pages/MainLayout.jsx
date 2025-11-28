import { NavLink, Outlet } from "react-router";
import { CartContext } from "../stores";
import { useEffect, useState } from "react";

export default function MainLayout() {

    const [cart, setCart] = useState([])



    return (
        <CartContext value={[cart, setCart]}>
            <div className="container mx-auto ">

                <header className="flex justify-end gap-x-5 py-5">
                    <NavLink to="/">Главная</NavLink>
                    <NavLink to="/admin">Админка</NavLink>
                    <NavLink to="/products">Товары</NavLink>
                    <NavLink className="relative" to="/cart">
                        Корзина
                        <div
                            className="absolute w-4 h-4 bg-amber-600 text-white flex justify-center items-center rounded-full -top-2 -right-2 text-[10px]"
                        >{cart.reduce((acc, element) => acc + element.quantity, 0)}</div>
                    </NavLink>
                </header>

                <main>
                    <Outlet />
                </main>

                {/* <footer>
                2025. Все права защищены
            </footer> */}

            </div>
        </CartContext>
    )
}
