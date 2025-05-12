import img1 from '../../img/bag.png'
import img2 from '../../img/bag-burst.png'
import './bag.css'

export default function Bag({points, isClicked}) {

    return (
        <>

        <div className="img">
            <img
                className={`bag-img ${isClicked ? 'punch-animation' : ''}`}
                src={points === 0 ? img2 : img1}
                alt="bag"
            />
        </div>
        
        
        </>
    )

}