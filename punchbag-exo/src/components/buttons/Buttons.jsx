
import { useState } from 'react'
export default function Buttons({ points, setPoints, isClicked, setIsClicked }) {

    let handleClick = () => {
        if (points > 0) {
            setPoints(points - 1);
        }

        else {
            setPoints(5);
        }

        if (!isClicked) {
            setIsClicked(true);
            
            // Remove animation class after animation ends
            setTimeout(() => {
                setIsClicked(false);
            }, 500); // Should match animation duration
        }
    }

    return (

        <>
            <button onClick={handleClick}>Punch me</button>
        </>
    )
}