import React from "react";
// import memesData from "../memesData";

export default function Meme() {

    // const [memeImage,setImageUrl] = React.useState("https://i.imgflip.com/30b1gx.jpg")

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        imageUrl: "https://i.imgflip.com/30b1gx.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {

        async function getMemes(){
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }

        //TODO:Verzija koja nije async
        // fetch("https://api.imgflip.com/get_memes")
        //     .then(res => res.json())
        //     .then(data => setAllMemes(data.data.memes))
        getMemes()

    }, [])


    function getImage() {

        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url;

        setMeme(prevMeme => ({
            ...prevMeme,
            imageUrl: url
        }))
    }

    //Old getImage()
    // function getImage(){
    //     const memesArray = allMemes.data.memes
    //     const randomNumber = Math.floor(Math.random() * memesArray.length)
    //     const url = memesArray[randomNumber].url;
    //
    //     //TODO:Ne treba mi prethodna vrednost url koji je u ovom slucaju prazan string tkd ne radim ovako
    //     // setImageUrl(memeImage => memeImage = url)
    //
    //     //TODO:Ovako odredjuem vrednost url
    //     setMeme( prevMeme =>({
    //         ...prevMeme,
    //         imageUrl: url
    //     }))
    //
    //     console.log(meme.imageUrl)
    // }




    function handleChange(event) {
        const {name, value} = event.target;

        setMeme(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    return (
        <main>
            <div className={'form'}>
                <input
                    type="text"
                    className={'form--input'}
                    placeholder={'Top text'}
                    name={'topText'}
                    onChange={handleChange}
                    value={meme.topText}
                />
                <input
                    type="text"
                    className={'form--input'}
                    placeholder={'Bottom text'}
                    name={'bottomText'}
                    onChange={handleChange}
                    value={meme.bottomText}
                />
                <button
                    className={'form--button'}
                    onClick={getImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className={"meme"}>
                <img src={meme.imageUrl} className={'form--image'}/>
                <h2 className={"meme--text top"}>{meme.topText}</h2>
                <h2 className={"meme--text bottom"}>{meme.bottomText}</h2>
            </div>
        </main>
    )
}