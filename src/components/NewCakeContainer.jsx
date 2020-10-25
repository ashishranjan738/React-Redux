import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {buyCake} from "../redux";

function NewCakeContainer() {
    const [numOfCakes, setNumberOfCakes] = useState(1);
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Num of cakes - {numOfCakes}</h2>
            <input type="text" value={numOfCakes} onChange={e => setNumberOfCakes(Number(e.target.value))}/>
            <button onClick={() => dispatch(buyCake(numOfCakes))}>Buy {numOfCakes} cake</button>
        </div>
    )
}

export default NewCakeContainer