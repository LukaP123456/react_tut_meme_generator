import React from "react";
import memesData from "../memesData";

export default function Meme(props) {

    const [memeImage,setImageUrl] = React.useState(" ")

    function getImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url;

        //TODO:Ne treba mi prethodna vrednost url koji je u ovom slucaju prazan string tkd ne radim ovako
        // setImageUrl(memeImage => memeImage = url)

        //TODO:Ovako odredjuem vrednost url
        setImageUrl( url)

        console.log(memeImage)
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
            <img src={memeImage} className={'form--image'}/>
        </main>
    )
}