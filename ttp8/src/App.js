import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import Results from "./components/GifResults";

function App() {
  const [Trending, setTrending] = useState([]);
  const [Search, setSearch] = useState([]);


  useEffect(() => {
    async function fetchTrendingGifs() {
      try {
        const list = await axios.get(
          "http://api.giphy.com/v1/gifs/trending?api_key=aoOHTOv4THJJ4XDSBcfFle0JWoJCu5Dc"
        );
        setTrending(list.data.data);
        setSearch([]);
        console.log(list);
      } catch (error) {
        console.error(error);
      }
    }
    fetchTrendingGifs();
  }, []);

  //Fetches gifs based on search
  async function fetchSearchGifs(search) {
    try {
      const gifData = await axios.get(
        "http://api.giphy.com/v1/gifs/search?q="
        + search +
          "&api_key=aoOHTOv4THJJ4XDSBcfFle0JWoJCu5Dc"
      );
      const arr = gifData.data.data;
      console.log("fetching...", arr);
      setSearch(arr);
      setTrending([]);
    } catch (error) {
      console.log(error);
    }
  }

  const handleInput = (event) => {
    event.preventDefault();
    fetchSearchGifs(Search);
    console.log("handleInput:", Search);
  };

  const handleInputChange = (event) => {
    setSearch(event.target.value);
    console.log("handleinputChange: ", event.target.value);
  };

  return (
    <>
      <form className="new-item-form" onSubmit={handleInput}>
        <div className="form-row">
          <label htmlFor="item"> Search Gifs </label>
          <input
            type="text"
            placeholder="GIFY!"
            id="item"
            value={Search ?? ""}
            onChange={handleInputChange}
          />
          <button className="btn">Search</button>
        </div>
      </form>

      <Results data={Search}/>
      <Results data={Trending}/>
    </>
  );
}

export default App;
