import { createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

async function getColorWord(position, letter) {

    const id = useSelector(state => state.game.id);
    const data = {
        position,
        letter
    }

    const headers = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    
    try {
        const response = await fetch(`http://localhost:8888/guess/${id}`, headers);
        if(response.status < 200 || response.status > 299) { throw new Error(response.status); }
        const colorStatusLetter = await response.json();
        if(colorStatusLetter.error) throw new Error(colorStatusLetter.error);
        return colorStatusLetter.status;
    } catch (error) {
        throw error;
    }
}

const colorWordFetch = createAsyncThunk(
    'getColorWord',
    getColorWord
)

export default colorWordFetch;