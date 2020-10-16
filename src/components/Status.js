import React from 'react';



export default function Status(props) {
    const {pokemonChoosed} = props;
 
  return (
        <div className='status__container'>
            <div className='status'>
                <div>
                    <span>
                    Peso
                    </span>
                    <p>
                    {pokemonChoosed.weight}
                    </p>
                </div>
                <div>
                    <span>
                    Altura
                    </span>
                    <p>
                    {pokemonChoosed.height}
                    </p>
                </div>
                    <div>
                    <span>
                    Exp. base
                    </span>
                    <p>
                    {pokemonChoosed.base_experience}
                    </p>
                </div>  
            </div>
            <span className='types__and__abilities--title'>
                Tipos
            </span>
            <ul className='types__and__abilities'>
                {pokemonChoosed.types.map((element)=>
                    <li>
                        <p>{element.type.name}</p>
                    </li>
                    )}
            </ul> 
            <span className='types__and__abilities--title'>
                Habilidades
            </span>
            <ul className='types__and__abilities'>
                {pokemonChoosed.abilities.map((element)=>
                    <li>
                        <p>{element.ability.name}</p>
                    </li>
                    )}
            </ul>
                                   
        </div>
  );
}