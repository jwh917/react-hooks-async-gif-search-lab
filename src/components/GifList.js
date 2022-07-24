import React from "react";

function GifList({gifInfo}) {

  const displayedGifs = gifInfo.map((gif, idx) => {
    return(
      <ul key={idx}>
        <li key={idx}>{<img src={gif}/>}</li>
      </ul>
    )
  })
  

  return (
      <div>
        {displayedGifs}
      </div>
  );
}

export default GifList;