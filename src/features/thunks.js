import { createAsyncThunk } from "@reduxjs/toolkit";

async function getGameId() {
    try {
        const data = await fetch('http://localhost:8888/new', { method: 'POST' });
        const gameId = await data.json();
        return gameId.id;
    } catch (error) {
        throw error;
    }
}

const idFetch = createAsyncThunk(
    'id',
    getGameId
)

export default idFetch;