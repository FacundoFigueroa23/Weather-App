import React, {useState} from 'react'
import axios from 'axios'
import './App.css'
import SearchBar from './components/SearchBar'
import Cards from './components/Cards'

function App() {
  const [cities, setCities] = useState([])

  async function onSearch(cityName){
    try{
      const city = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
      const newCity = {
      name: city.data.name,
      min: Math.round(city.data.main.temp_min),
      max: Math.round(city.data.main.temp_max),
      img: city.data.weather[0].icon,
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
    </div>
  );
}

export default App
