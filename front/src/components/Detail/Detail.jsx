import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";
//!----------------------------------------------------+/


function Detail() {

    const APIKEY = 'pi-thiagojmartins'
    const { id } = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(
           `https://rym2.up.railway.app/api/character/${id}?key=${APIKEY}`
        ).then(({ data }) => {

            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }

        });

       return setCharacter({});

    }, [id]);


    return ( 
        <div>
        {character.name? (
            <>
                <h2>{character.name} | {character.id}</h2>
                <h4>STATUS | {character.status}</h4>
                <h4>SPECIES | {character.species}</h4>
                <h4>GENDER | {character.gender}</h4>
                <h4>ORIGIN | {character.origin.name}</h4>
                <img src={character.image} alt={character.name} />
            </>
        ): (
            <h2>Loading...</h2>
        )}
        </div>
    );
}

export default Detail;