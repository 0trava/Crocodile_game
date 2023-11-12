import card from './flashcards.json';
import style from './App.module.css';
import { useState } from 'react';
import crocodileImage from '../kisspng-crocodile-clip-clip-art-alligator-png-image-5a719dac969735.9604999015173953726168.png'

export const App = () => {
  const [randomCard, setRandomCard] = useState(null);

  const pickRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * card.images.length);
    const selectedCard = card.images[randomIndex];
    setRandomCard(selectedCard);
  };


  return (
    <div className={style.container}>
      <h1>Crocodile</h1>

      <div className={style.btn_box}>
        <button className={style.btn}>Animal</button>
        <button className={style.btn}>Fruits</button>
        <button className={style.btn}>Jobs</button>
      </div>


        


       <div className={style.card}>
          {randomCard && (
          <img src={randomCard} alt="card" />
          )}
       </div>

       <button onClick={pickRandomCard}>
        <span class={style.text}>Lets go...</span>
      </button>


      {/* Image */}

      <img className={style.image} src={crocodileImage} alt="crocodile" />
    </div>
  );
};
