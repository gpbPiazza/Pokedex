import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";




export default function Inspect() {
    const { id } = useParams();
    
    useEffect(() => {

        const request = axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            request.then(anwser => {
            console.log(anwser);
        //   setPokemons(anwser.data.results)
        });
      },[]);
 
    return (
            <h1 style={{marginTop:'4rem'}} >ESTAMOS NA TELA DO POKEMON COM iD:{id}</h1>
    );
}


