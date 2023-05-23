import "./App.css";
import { useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./components/Gallery";
import SearchBar from "./components/SearchBar";
import ArtistView from "./components/ArtistView";
import AlbumView from "./components/AlbumView";
import { DataContext } from "./contexts/DataContext";
import { SearchContext } from "./contexts/searchContexts";

function App() {
  let [message, setMessage] = useState("Search for Music");
  let [data, setData] = useState([]);
  let searchInput = useRef("");

  const handleSearch = (e, search) => {
    e.preventDefault();
    const fetchData = async () => {
      try {
        document.title = `${search} Music`;
      const response = await fetch(`https://itunes.apple.com/search?term=${search}`);
      const resData = await response.json();
      console.log(resData);
      if (resData.results.length) {
        setData(resData.results);
      } else {
        setMessage(`We couldn't find nothing for "${search}"`);
      }
      } catch (e) {
        console.log(e)
      }
      
    };

    if (search) {
      fetchData()
    }
  };

  return (
    <div className="App">
      {message}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchContext.Provider
                  value={{
                    term: searchInput,
                    handleSearch
                  }}
                >
                  <SearchBar />
                </SearchContext.Provider>

                <DataContext.Provider value={data}>
                  <Gallery />
                </DataContext.Provider>
              </>
            }
          ></Route>

          <Route path="/album/:id" element={<AlbumView/>} />
          <Route path="/artist/:id" element={<ArtistView/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
