import { createAsyncThunk } from "@reduxjs/toolkit";

async function getValidWord(word) {
    try {
        if(word.length !== 5)throw new Error('No hay suficientes letras');
        const data = await fetch(`http://localhost:8888/check/${word}`, { method: 'GET' });
        if(data.status < 200 || data.status > 299) { throw new Error(data.status); }
        const checkWord = await data.json();
        return checkWord.valid;
    } catch (error) {
        throw error;
    }
}

const wordFetch = createAsyncThunk(
    'checkWord',
    getValidWord
)

export default wordFetch;