import { useState } from 'react'
import './App.css'
import Lifebar from './components/lifebar/Lifebar'
import Bag from './components/bag/Bag'
import Buttons from './components/buttons/Buttons'

function App() {

  const[points, setPoints] = useState(5);
  // On crée la variable points ici pour pouvoir utiliser état et donc les {points} avec les components Lifebar, Buttons, Bag; App.jsx est le "lieu central" qui va regrouper les éléments communs.

  const [isClicked, setIsClicked] = useState(false);
  // On crée une variable liée au boutton et au bag que l'on va passer en prop chez les 2.


  return (
    <>

      <Lifebar points={points} />
      {/* Points devient un props pour Lifebar */}
      <Bag points={points} />
      <Buttons points={points} setPoints={setPoints} />
      {/* Points + setPoints deviennent des props pour Buttons */}

    </>
  )
}

export default App
