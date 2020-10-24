import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";
import Status from '../components/Status';
import {Link} from "react-router-dom";



export default function Inspect() {
    const [pokemonChoosed, setPokemonChoosed] = useState(null);
    const [traveler, setTraveler] = useState(id);
    const { id } = useParams();
    
    useEffect(() => {
        setPokemonChoosed(null);
        const request = axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            request.then(anwser => {
            setPokemonChoosed(anwser.data)
        });
      },[id]);

      const fowardPokemon = () => {
          setTraveler(parseInt(id) + 1)
      }

      const retreatPokemon = () => {
        setTraveler(parseInt(id) - 1)
      }
 
    return (
            <div className='inspect'>
                {pokemonChoosed ?  <>   <div className='selected__Pokemon'>
                                            <Link to={`/pokemon/${(parseInt(id) - 1)}`}>
                                            {id > 1  && 
                                                <button onClick={()=> fowardPokemon()}><ion-icon name="chevron-back-outline"></ion-icon></button>}
                                            </Link>
                                            <div>
                                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
                                                <p>{pokemonChoosed.name}</p>
                                                <span>#{id}</span>
                                            </div>
                                            <Link to={`/pokemon/${(parseInt(id) + 1)}`}>
                                            {id < 893 && 
                                                <button onClick={()=> retreatPokemon()}><ion-icon name="chevron-forward-outline"></ion-icon></button>}
                                            </Link>
                                        </div>
                                        <Status pokemonChoosed={pokemonChoosed}/>
                                    </> 
                                :  
                                    <span className='loading__pokemons' >
                                        <img src='/img/pikachuDance.gif' />
                                        Carregando Inspeção do Pokemon...
                                    </span>}
            </div>
    );
}


