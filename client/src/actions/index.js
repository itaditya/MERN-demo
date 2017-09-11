import axios from 'axios';
import {FETCH_USER} from './types';

export const fetchUser = () => {
    return async (dispatch) => {
        const res = await axios.get('/api/me');
        dispatch({
            type: FETCH_USER,
            payload: res.data
        });
    }
};

export const handleToken = (token) => {
    return async (dispatch) => {
        const res = await axios.post('/api/stripe',token);
        dispatch({
            type: FETCH_USER,
            payload: res.data
        });
    }
};

/*
Alternatively 

export const fetchUser = () => async dispatch => {
    dispatch({
        type: FETCH_USER,
        payload: await axios.get('/api/user')
    });
};*/
