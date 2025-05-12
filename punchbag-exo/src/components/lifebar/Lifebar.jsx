import './lifebar.css'

export default function Lifebar({points}) {
    // Total number of life bars
    const totalBars = 5

    return(
        <div className="lifebar-container">
            {/* On va créer les div de la lifebar en utilisant .map() à partir de la variable "totalBars". */}
            {/* .map() est une sorte de copy machine qui va prendre chaque élément de la liste et effectuer une opération dessus. */}
            {/* L'underscore indique qu'à la place du 'element' qui se trouve dans [Array()].map((element,index) => (...)) on ne va rien mettre, on se focus surtout sur l'index. */}
            {
            [...Array(totalBars)].map((_, index) => (
                // This creates an array of 5 elements we can iterate over
                // Allows us to create 5 divs with their respective indices
                <div 
                    key={index} 
                    // Pour pouvoir utiliser ici l'index en faisant la méthope map(), on va mettre l'index dans la clé (ne fonctionne pas dans tous les cas)
                    className={`lifebar-segment ${
                        // On donne une classe à chaque élément contenu dans la div lifebar-container; si index = points, on ajouter une classe en plus à l'élément.
                        index >= points ? 'lifebar-empty' : 'lifebar-full'
                    }`}
                ></div>
            ))
            }
        </div>
    )
}

