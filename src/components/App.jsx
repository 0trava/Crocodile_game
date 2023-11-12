import card from './flashcards.json';
import style from './App.module.css';
import { useState } from 'react';

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
        


       <div className={style.card}>
          {randomCard && (
          <img src={randomCard} alt="card" />
          )}
       </div>

       <button onClick={pickRandomCard}>
        <span class={style.text}>Lets go...</span>
      </button>
    </div>
  );
};
