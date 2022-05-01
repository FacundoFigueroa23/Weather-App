import React, {useState} from 'react'
import axios from 'axios'
import './App.css'
import SearchBar from './components/SearchBar'
import Cards from './components/Cards'

function App() {
  const [cities, setCities] = useState([])

  async function onSearch(cityName){
    try{
      const city = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
      console.log("City: ", city.data)
      const newCity = {
      name: city.data.name,
      min: Math.round(city.data.main.temp_min),
      max: Math.round(city.data.main.temp_max),
      img: city.data.weather[0].icon,
      description: city.data.weather[0].main,
      id: city.data.id
      }
      setCities([...cities, newCity])
    }catch(e){
      alert("City not found")
    }
  }

  function onClose(id){
    setCities(cities.filter( city => city.id !== id))
  }
  return (
    <div className='App'>
      <h1 className='title'>WEATHER APP</h1>
      <SearchBar onSearch={onSearch}/>
      <Cards cities={cities} onClose={onClose}/>
      <nav className='footer'>
        <a className='link' href='https://www.linkedin.com/in/facundo-figueroa-dev' target ='_blank' rel="noreferrer">
          <p>LinkedIn</p>
        </a>
        <a className='link' href='https://github.com/FacundoFigueroa23' target ='_blank' rel="noreferrer">
          <p>GitHub</p>
        </a>
        <button className='link' onClick={() => alert("Currently working on it")}>
          <p>Portfolio</p>
        </button>
      </nav>
    </div>
  );
}

export default App
