import card from './flashcards.json';
import style from './App.module.css';
import { useState } from 'react';
import crocodileImage from '../kisspng-crocodile-clip-clip-art-alligator-png-image-5a719dac969735.9604999015173953726168.png'

export const App = () => {
  const [randomCard, setRandomCard] = useState(null);
  const [category, setСategory] = useState(card.jobs);

  const pickRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * category.length);
    const selectedCard = category[randomIndex];
    setRandomCard(selectedCard);
  };

  const changeCategory = (e) => {
    e.preventDefault();
  }


  return (
    <div className={style.container}>
      <h1>Crocodile</h1>

      <div className={style.btn_box}>
        {category !== card.jobs ? 
        <button onClick={changeCategory} className={style.btn}>Jobs</button>
        : <button onClick={changeCategory} className={style.btn_active}>Jobs</button>}

        {category !== card.fruits ? 
        <button onClick={changeCategory} className={style.btn}>Fruits</button>
        : <button onClick={changeCategory} className={style.btn_active}>Fruits</button>}

        {category !== card.animal ? 
        <button onClick={changeCategory} className={style.btn}>Animal</button>
        : <button onClick={changeCategory} className={style.btn_active}>Animal</button>}

      </div>


        


       <div className={style.card}>
          {category === card.jobs && <h3 className={style.title_card}>Jobs</h3>}


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
