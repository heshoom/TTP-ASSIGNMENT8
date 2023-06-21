import axios from "axios";
import "../styles.css";
import Results from "./GifResults";
import React, { useEffect, useState } from "react";

function Search() {
  useEffect(() => {
    async function fetchSearch(props) {
      try {
        const gifAPI = await axios.get(
          "http://api.giphy.com/v1/gifs/search?q=" +
            props +
            "&api_key=aoOHTOv4THJJ4XDSBcfFle0JWoJCu5Dc"
        );
        const arr = gifAPI.data.data;
        console.log(arr);
      } catch (error) {
        console.error(error);
      }
    }
  }, [props]);
}
return <Results data={props} />;

export default Search;
