import React, {useState} from 'react';
import Card from '../components/Card';


export default function Home(props) {
  const [searchPokemon, setSearchPokemon] = useState('');
  const {pokemns} = props;


  return (
    <div className='home__container'>
      <input onChange={e => setSearchPokemon(e.target.value)} value={searchPokemon} />
      <ul style={{listStyle: 'none'}}>
        {pokemns ? 
        pokemns.map((item)=><Card name={item.name} key={item.url.split('/')[6]} id={item.url.split('/')[6]} />) 
        : 
        <span className='loading__pokemons'>
          <img src='img/pikachuDance.gif' />
          Carregando Lista de Pokemons...
        </span>}
      </ul>
    </div>
  );
}
