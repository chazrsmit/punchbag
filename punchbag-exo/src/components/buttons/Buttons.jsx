
import { useState } from 'react'
export default function Buttons({ points, setPoints }) {

    let handleClick = () => {
        if (points > 0) {
            setPoints(points - 1);
        }

        else {
            setPoints(5);
        }
    }

    return (

        <>
            <button onClick={handleClick}>Punch me</button>
        </>
    )
}