import React from 'react';
import {useHistory } from 'react-router-dom'

const GameMenu = props => {
    let history = useHistory();
    return (
        <div className='text-center'>
            <h1>Welcome to TypeSpeed</h1>
            <button type="button" onClick={()=> history.push('/game/create')}></button>
            
        </div>
    )
}

export default GameMenu