import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";
import Status from './Status';



export default function Inspect() {
    const { id } = useParams();
    const [pokemonChoosed, setPokemonChoosed] = useState(null);
    
    useEffect(() => {

        const request = axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            request.then(anwser => {
            setPokemonChoosed(anwser.data)
            console.log(anwser.data);
        //   setPokemons(anwser.data.results)
        });
      },[]);
 
    return (
            <>
                {pokemonChoosed ?  <>   <div className='selected__Pokemon'>
                                            <button><ion-icon name="chevron-back-outline"></ion-icon></button>
                                            <div>
                                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
                                                <p>{pokemonChoosed.name}</p>
                                                <span>#{id}</span>
                                            </div>
                                            <button><ion-icon name="chevron-forward-outline"></ion-icon></button>
                                        </div>
                                        <Status pokemonChoosed={pokemonChoosed}/>
                                    </> 
                                :  
                                     <span className='loading__pokemons'>
                                        <img src='img/pikachuDance.gif' />
                                        Carregando Inspeção do Pokemon...
                                    </span>
                                    }
            </>
    );
}


