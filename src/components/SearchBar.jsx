import React, {useState} from 'react'
import styles from './SearchBar.module.css'

function SearchBar(props) {
    const [input, setInput] = useState("")

    const handleInput = (e) => {
        e.preventDefault()
        setInput(e.target.value)
    }

    const handleButton = (e) => {
        e.preventDefault()
        if(input !== ""){
            props.onSearch(input)
            setInput("")
        }else{
            alert("¡You must enter a city!")
        }
    }
    return (
        <div className={styles.search}>
            <input 
                className={styles.input} 
                type='text' 
                value={input} 
                onChange={handleInput} 
                placeholder='City...'
            />
            <button 
                className={styles.btn} 
                onClick={handleButton}
            >
            Search
            </button>
        </div>
    )
}

export default SearchBar