import "./styles.css";
import { useState } from "react";
import Search from "./components/Search";
import Results from "./components/GifResults";

function App() {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setNewItem(event.target.value);
    console.log(newItem);
    //Search(newItem);
  };

  return (
    <>
      <form className="new-item-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="item"> Search Gifs </label>
          <input
            type="text"
            placeholder="GIFY!"
            value={newItem ?? ""}
            onChange={(event) => setNewItem(event.target.value)}
            id="item"
          />
        </div>
        <button className="btn">Search</button>
      </form>
    </>
  );
}

export default App;
