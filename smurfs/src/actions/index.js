import axios from 'axios'

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const START_POST = 'START_POST';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAILURE = 'POST_FAILURE';



// ACTION CREATORS
export const fetchSmurf = () => dispatch => {
    dispatch({ type: START_FETCHING });
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response}));
};

export const postSmurf = (newSmurf) => dispatch => {
    dispatch({ type: START_POST });
    axios
        .post(`http://localhost:3333/smurfs`, newSmurf)
        .then(res => dispatch({ type: POST_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: POST_FAILURE, payload: err.response}));
};















