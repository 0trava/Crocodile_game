import card from './flashcards.json';
import style from './App.module.css';

export const App = () => {
  console.log(card);


  return (
    <div>
      <h1>Crocodile</h1>
       


       <div className={style.card_box}>
          <img src={card.images[0]} alt="card" />
       </div>
    </div>
  );
};
