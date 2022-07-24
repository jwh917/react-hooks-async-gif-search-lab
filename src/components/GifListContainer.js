import React, {useState} from "react";
import GifSearch from "./GifSearch";
import GifList from "./GifList";


function GifListContainer() {

  const [gifInfo, setgifInfo] = useState(
    ["https://i.pinimg.com/originals/f4/3a/d4/f43ad4ffeb3deea2b691f6edc002bfe1.gif",
    "https://thumbs.gfycat.com/FormalSlushyJellyfish-size_restricted.gif",
    "https://rankedbyvotes.com/wp-content/uploads/Cool-Kid....gif"])

  function gifsearchInput(event){
    event.preventDefault()
    console.log(event.target[0].value)
    const searchInput = event.target[0].value
    const apiKey = "6Uh8WUsrxdb7NguFiuEu7vGaZ4czsGN4"

    fetch(`https://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=${apiKey}&rating=g`)
    .then((r) => r.json())
    .then((gifData) => {
      const firstThreeGifs = gifData.data.filter((gif,idx) => idx < 3).map((gif) => gif.images.original.url)

      
      setgifInfo(firstThreeGifs)
    });

  }

  return (
  
    <div>
      <GifSearch gifsearchInput={gifsearchInput}/>
      <GifList gifInfo={gifInfo}/>
    </div>

  );
}

export default GifListContainer;