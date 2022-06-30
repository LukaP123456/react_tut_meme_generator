import React from "react";
import memesData from "../memesData";

export default function Meme(props) {

    function getImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url;
        console.log(url)
    }

    return (
        <main>
            <div className={'form'}>
                <input
                    type="text"
                    className={'form--input'}
                    placeholder={'Top text'}
                />
                <input
                    type="text"
                    className={'form--input'}
                    placeholder={'Bottom text'}
                />
                <button
                    className={'form--button'}
                    onClick={getImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
        </main>
    )
}