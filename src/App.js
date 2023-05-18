import './App.css';
import { useState, useEffect } from 'react';
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'

function App() {

  let [search, setSearch] = useState('')
  let [message, setMessage] = useState('Search for Music')
  let [data, setData] = useState([])

  useEffect( () =>{
    const fetchData = async () => {
      document.title = `${search} Music`
      const response = await fetch(`https://itunes.apple.com/search?term=${search}`)
      const resData = await response.json()
      console.log(resData)
      if(resData.results.length){
        setData(resData.results)
      }else{
        setMessage(`We couldn't find nothing for "${search}"`)
      }
    }

    if(search){
      fetchData()
    }

  }, [search])

const handleSearch = (e, term) =>{
  e.preventDefault()
  setSearch(term)
}

  return (
    <div className="App">
      <SearchBar handleSearch={handleSearch}/>
      {message}
      <Gallery data={data}/>
    </div>
  );
}

export default App;
