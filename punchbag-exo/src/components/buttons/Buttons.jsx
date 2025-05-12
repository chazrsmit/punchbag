
import './buttons.css'
export default function Buttons({ points, setPoints, isClicked, setIsClicked }) {

    let handleClick = () => {
        if (points > 0) {
            setPoints(points - 1);
        }

        else {
            setPoints(5);
        }

        if (points === 1) {
            btn.innerText = "Play again"
        }
        else {
            btn.innerText = "Punch me"
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

        <div className="div-button">
            <button id="btn" onClick={handleClick}>Punch me</button>
        </div>

    )
}