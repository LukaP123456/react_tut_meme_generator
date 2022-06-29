import React from "react";

export default function Header(){
    return(
        <header className={'header'}>
            <img
                src={require('../img/Troll Face.png')}
                className={'header--image'}
            />
            <h2 className={'header--title'}>Meme generator</h2>
            <p className={'header--project'}>React course - project 3</p>
        </header>
    )
}
