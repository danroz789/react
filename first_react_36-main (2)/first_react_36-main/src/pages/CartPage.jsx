import { useContext } from "react"
import { CartContext } from "../stores"
import Counter from "../components/Counter"

export default function CartPage() {

    const [cart, setCart] = useContext(CartContext)

    function changeQuantity(id, newQuantity) {
        setCart(
            cart.map(item => {
                if (item.id == id) {
                    return {
                        ...item,
                        quantity: newQuantity
                    }
                }
                return item
            })
        )
    }

    return (
        <div className="grid grid-cols-4 gap-8">
            {
                cart.map((product) => (
                    <div>
                        <img src={product.images[0]} alt="" />
                        <h3>{product.title}</h3>
                        <p>{product.price}$</p>
                        <Counter
                            changeQuantity={changeQuantity}
                            id={product.id}
                            quantity={product.quantity} />
                    </div>
                ))
            }
        </div>
    )
}
