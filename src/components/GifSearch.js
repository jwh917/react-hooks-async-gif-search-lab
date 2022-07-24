import React from "react";

function GifSearch({gifsearchInput}) {

  return (
    <div style={{ position: 'relative', float : "right", padding: 20 }}>
      <label> Enter a Search Term</label>
      <form onSubmit={gifsearchInput}>
        <input type="text" name="searchInput"></input>
        <br></br>
        <br></br>
        <button type="submit" value="Submit">Find Gifs</button>
      </form>
    </div>
  );
}

export default GifSearch;