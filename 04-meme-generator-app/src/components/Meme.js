import React from 'react';
//import memesData from '../memeData.js';

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: ""
  })
  // const [allMemeImages, setAllMemeImages] = React.useState(memesData)
  const [allMemeImages, setAllMemeImages] = React.useState([])

  function getMemeImage() {
    // const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * allMemeImages.length)
    const url = allMemeImages[randomNumber].url
    setMeme(prev => ({
      ...prev,
      randomImage: url
    }))
    //setMeme( memesArray[randomNumber].url)
    // const {url} = memesArray[randomNumber];
  }

  React.useEffect(() => {
    console.log("useEffect ran")
    // fetch("https://api.imgflip.com/get_memes")
    // .then(res => res.json())
    // .then(data => setAllMemeImages(data.data.memes))
    async function getMeme(){
      const res = await fetch("https://api.imgflip.com/get_memes")
      const data = await res.json()
      setAllMemeImages(data.data.memes)
    }
    getMeme()
  }, [])

  function handleChange(event) {
    const { name, value } = event.target
    setMeme(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <main>
      <div className='form'>
        <input
          type="text"
          placeholder="Top Text"
          className='form--input'
          name="topText"
          defaultValue={meme.topText}
          onChange={handleChange}
        />
        <input type="text"
          placeholder="Bottom Text"
          className='form--input'
          name="bottomText"
          defaultValue={meme.bottomText}
          onChange={handleChange}
        />
        <button className='form--button' onClick={getMemeImage}>Get a new meme image</button>
      </div>
      <div className='meme'>
        <img className='meme--image' src={meme.randomImage} />
        <h2 className='meme--text top'>{meme.topText}</h2>
        <h2 className='meme--text bottom'>{meme.bottomText}</h2>

      </div>
    </main>
  );
}
