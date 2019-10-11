import {
  START_FETCHING,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  START_POST,
  POST_SUCCESS,
  POST_FAILURE
} from '../actions';

const initialState = {
  smurfs: [],
  isFetching: false,
  isPosting: false,
  error: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        smurfs: action.payload
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case START_POST:
      return {
        ...state,
        isPosting: true,
        error: ''
      };
    case POST_SUCCESS:
      return {
        ...state,
        isPosting: false,
        smurfs: action.payload
      };
    case POST_FAILURE:
      return {
        ...state,
        isPosting: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
