import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

const People = (props) => {
    const [peoples, setPeoples] = useState([])
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/people/${id}`)
            .then(response => {
                console.log(response.data);
                setPeoples(response.data)
            })
            .catch(error => {
                console.log(error);
                setPeoples("");
            })
    }, [id]);

    
        return (
            <div>
                <div>
                    {peoples.length <= 0 ? 
                    <h2>These are not the droids you're looking for</h2>
                    :
                    <div>
                        <h1>{peoples.name}</h1>
                        <p>Height: {peoples.height}</p>
                        <p>Mass: {peoples.mass}</p>
                        <p>Hair Color: {peoples.hair_color}</p>
                        <p>Skin Color: {peoples.skin_color}</p>
                    </div>
                        } 
                </div>
            </div>
        );
    
    

    
};

export default People;