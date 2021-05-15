import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const{id, name, email} = props.friend;
    const history = useHistory();
    const handleClick = (friendId) => {
        const url = `/friend/${friendId}`;
        history.push(url)
    }
    const friendStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '10px'
    }
    return (
        <div style={friendStyle}>
        <h2>Name: {name}</h2>
        <p>Email: {email}</p>
     
      <br />
      <button onClick ={() => handleClick(id)}>Click Me</button>
        </div>
    );
};

export default Friend;