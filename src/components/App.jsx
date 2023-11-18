import card from './flashcards.json';
import style from './App.module.css';
import { useState } from 'react';
import crocodileImage from '../kisspng-crocodile-clip-clip-art-alligator-png-image-5a719dac969735.9604999015173953726168.png'

export const App = () => {
  const [randomCard, setRandomCard] = useState(null);
  const [category, changeCategory] = useState(card.jobs);

  const pickRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * category.length);
    const selectedCard = category[randomIndex];
    setRandomCard(selectedCard);
  };

  // const changeCategory = (e) => {

  //   console.log(e)
  //   e.preventDefault();
  // }


  return (
    <div className={style.container}>
      <h1>Crocodile</h1>

      <div className={style.btn_box}>
        {category !== card.jobs ? 
        <button onClick={() => changeCategory(card.jobs)} className={style.btn} id="jobs">Jobs</button>
        : <button onClick={() => changeCategory(card.jobs)} className={style.btn_active} id="jobs">Jobs</button>}

        {category !== card.fruits ? 
        <button onClick={() => changeCategory(card.fruits)} className={style.btn} id="fruits">Fruits</button>
        : <button onClick={() => changeCategory(card.fruits)} className={style.btn_active} id="fruits">Fruits</button>}

        {category !== card.animal ? 
        <button onClick={() => changeCategory(card.animal)} className={style.btn} id="animal">Animal</button>
        : <button onClick={() => changeCategory(card.animal)} className={style.btn_active} id="animal">Animal</button>}

      </div>

      
      <div className={style.block}>
      {/* Help words */}

      {/* Animal */}
      {category === card.animal ?
      <div className={style.help_words}>
        <h3>Hint words - Слова підказки</h3>
        <p><span>Carnivore/herbivore/omnivore</span> -  Хижак/травоїдне/всеїдне</p>
        <p><span>Fluffy/slippery/soft/</span> – пухнастий/слизький/м’який</p>
        <p><span>Spotty/stripy</span> – плямистий/смугастий</p>
        <p><span>Fur/feathers/scales/beak</span> - Шерсть/перо/луска/дзьоб </p>
        <p><span>Tail/wings/mustache/paws/hooves</span>  - хвіст/крила/вуса/лапи/копита</p>


        <button onClick={pickRandomCard}>
          <span className={style.text}>Lets go...</span>
        </button>
      </div> : "" }

        {/* Fruits */}
        {category === card.fruits ?
        <div className={style.help_words}>
        <div>
        <h3>Hint words - Слова підказки</h3>
        <p><span>Sweet and sour/sweet/sour</span> -  Солодкий-кислий/солодкий/кислий</p>
        <p><span>Hard/soft</span> –Твердий/м'який </p>
        <p><span>Smooth/hard</span> – Гладенький/жорсткий</p>
        <p><span>Grow in the tropics/ in the garden</span> - Ростуть в тропіках/ в саду </p>
        </div>

        <button onClick={pickRandomCard}>
          <span className={style.text}>Lets go...</span>
        </button>
      </div> : "" }

        {/* Jobs */}
        {category === card.jobs ?
        <div className={style.help_words}>
        <h3>Hint words - Слова підказки</h3>
        <p><span>The work is safe/dangerous</span> -  Робота безпечна/ небезпечна</p>
        <p><span>Must wear a uniform</span> – Треба носити форму</p>
        <p><span>Heals/maintains/sells/rescues/controls/entertaining</span> – Лікує/обслуговує/продає/рятує/контролює/розважає</p>
        <p><span>Works in the circus/office/outdoors/hospital</span> - Працює в цирку/офісі/на свіжому повітрі/лікарні </p>

        <button onClick={pickRandomCard}>
          <span className={style.text}>Lets go...</span>
        </button>
      </div> : "" }




      {/* Cards show */}
        <div>
        <div className={style.card}>
            {category === card.jobs && <h3 className={style.title_card}>Jobs</h3>}
            {category === card.animal && <h3 className={style.title_card}>Animal</h3>}
            {category === card.fruits && <h3 className={style.title_card}>Fruits</h3>}

            {randomCard && (
            <img src={randomCard} alt="card" />
            )}
        </div>


        </div>
      </div>
      


        




      {/* Image */}


      <img className={style.image} src={crocodileImage} alt="crocodile" />
    </div>
  );
};
