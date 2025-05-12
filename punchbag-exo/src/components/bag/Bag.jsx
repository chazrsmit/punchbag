import img1 from '../../img/bag.png'
import img2 from '../../img/bag-burst.png'

export default function Bag({points}) {


    return (
        <>

        <div className="img">
            <img
                src={points===0? img2 : img1}
                alt="bag"
            />
        </div>
        
        
        </>
    )

}