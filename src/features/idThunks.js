import { createAsyncThunk } from "@reduxjs/toolkit";

async function getGameId() {
    try {
        const data = await fetch('http://localhost:8888/new', { method: 'POST' });
        if(data.status < 200 || data.status > 299) { throw new Error(data.status); }
        const gameId = await data.json();
        return gameId.id;
    } catch (error) {
        throw error;
    }
}

const idFetch = createAsyncThunk(
    'getGame',
    getGameId
)

export default idFetch;