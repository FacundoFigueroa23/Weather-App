import React, {useState} from 'react'
import { AddCircledOutline } from 'iconoir-react'

function SearchBar() {
    const [input, setInput] = useState("")

    const handleInput = (e) => {
        e.preventDefault()
        setInput(e.target.value)
    }

    const handleButton = (e) => {
        e.preventDefault()
        console.log(input)
        setInput("")
    }
    return (
        <div>
            <input value={input} onChange={handleInput} placeholder='City...' />
            <button onClick={handleButton} >
                <AddCircledOutline />
            </button>
        </div>
    )
}

export default SearchBar