import React from 'react';
import {useState} from 'react';
import { useHistory } from 'react-router';

const Search = (props) => {

    const [category, setCategory] = useState("");
    const [id, setId] = useState("");
    const history = useHistory();
    
    const onSubmitHandler = (event) => {
        event.preventDefault();
        history.push(`/${category}/${id}`)
    }
    return (

        <div>
            <form onSubmit={onSubmitHandler}>
                <label>Search For</label>
                <select onChange={(event) => setCategory(event.target.value)}>
                    <option value="people">people</option>
                    <option value="planets">planets</option>
                </select>
                <br/>
                <label> Id:</label>
                <input type="text" onChange={(event) => setId(event.target.value)} />
                <input type="submit" className="btn btn-lg btn-warning" />
            </form>
        </div>
    )
}

export default Search;