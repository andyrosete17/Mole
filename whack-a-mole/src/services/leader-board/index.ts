import { createAsyncThunk } from "@reduxjs/toolkit"
import { apiUrl } from "../../constants"
import { IUserRecord } from "../../models"

export const fetchLeaderboard = createAsyncThunk('fetch-leaderboard', async () => {
    const response = await fetch(apiUrl.apiDomainUrl)
    return response.json()
})

export const saveUserRecord = createAsyncThunk('save-user-record', async (user: IUserRecord) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    const response = await fetch(apiUrl.apiDomainUrl, requestOptions);
    return response.json();
})