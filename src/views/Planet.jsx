import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

const Planet = (props) => {
    const [planet, setPlanet] = useState([])
    const { id } = useParams();
    const [error, setError] = useState(false);

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/planets/${id}`)
            .then(response => {
                console.log(response.data);
                setPlanet(response.data)
                setError(false);
            })
            .catch(error => {
                console.log(error);
                setError(true);
            })
    }, [id]);
    
    return (
        <div>
            {error ? 
            <h2>These are not the droids you are looking for</h2>
            :
            <div>
                <h1>{planet.name}</h1>
                <p>Height: {planet.climate}</p>
                <p>Mass: {planet.terrain}</p>
                <p>Hair Color: {planet.surface_water}</p>
                <p>Skin Color: {planet.population}</p>
            </div>
            }
        </div>
    )
}

export default Planet;