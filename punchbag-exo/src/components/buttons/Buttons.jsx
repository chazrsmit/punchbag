import { useState } from 'react'
export default function Buttons() {

    const[points, setPoints] = useState(5);

    let handleClick = () => {
        if (points > 0) {
            setPoints(points - 1);
        }
    }

    return (

        <>

        <h1>{points}</h1>

        <button onClick={handleClick}>Punch me</button>
        
        </>
    )
}