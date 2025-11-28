import { useEffect, useState } from "react"

export default function Exchange() {

    const [summa, setSumma] = useState(0)

    const [currency, setCurrency] = useState('$')

    const [itog, setItog] = useState(null)

    useEffect(() => {
        if (currency === '$') {
            setItog((summa / 83).toFixed(2))
        } else if (currency === 'Euro') {
            setItog((summa / 93).toFixed(2))
        }
    }, [summa, currency])

    return (
        <div>
            <h2>Обмен валют</h2>

            <input value={summa} onInput={(e) => setSumma(e.target.value)} type="number" placeholder="Введите сумму" />
            <select onChange={(e) => setCurrency(e.target.value)}>
                <option value="$">$</option>
                <option value="Euro">Euro</option>
            </select>

            <div>
                <span>Вы получите: {itog} {currency}</span>
            </div>
        </div>
    )
}