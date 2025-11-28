import { useContext, useEffect, useState } from "react"
import { CartContext } from "../stores"

export default function ProductsPage() {

    const [products, setProducts] = useState([])


    const [cart, setCart] = useContext(CartContext)

    console.log(cart)

    function addToCart(product) {
        setCart(
            [
                ...cart,
                {
                    ...product,
                    quantity: 1
                }
            ]
        )

    }

    useEffect(() => {
        async function getData() {

            const resp = await fetch('https://api.escuelajs.co/api/v1/products?limit=1&skip=0')
            const data = await resp.json()
            if (resp.ok) {
                setProducts(data)
            }

        }

        getData()
    }, [])



    return (

        <div className="grid grid-cols-4 gap-8">


            {
                products.map((product) => (
                    <div>
                        <img src={product.images[0]} alt="" />
                        <h3>{product.title}</h3>
                        <p>{product.price}$</p>
                        <button
                            className="px-2 py-1 bg-amber-600 text-white"
                            onClick={() => addToCart(product)}
                        >Купить</button>
                    </div>
                ))
            }
        </div>
    )
}
