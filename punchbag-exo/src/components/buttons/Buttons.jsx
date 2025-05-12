
import './buttons.css'
import useSound from "use-sound"
import TestSound from "../../sounds/punch-41105.mp3"


export default function Buttons({ points, setPoints, isClicked, setIsClicked }) {

    const [playSound, { stop }] = useSound(TestSound)

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

        //On uitlise la variable d'état isClicked (true/false) pour mettre une animationet des sounds effect
        if (!isClicked) {
            setIsClicked(true);
            
            setTimeout(() => {
                setIsClicked(false);
            }, 100);

            playSound();
        }
    }

    return (

        <div className="div-button">
            <button id="btn" onClick={handleClick}>Punch me</button>
        </div>

    )
}