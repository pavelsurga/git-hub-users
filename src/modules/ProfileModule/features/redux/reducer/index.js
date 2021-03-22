import initialState from '../initial';
import { actionTypes } from '../actions';

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_USER:
      return {
        ...state,
        userData: action.payload,
        error: null,
      };

    case actionTypes.ERROR:
      return {
        ...state,
        userData: {},
        error: action.payload,
      }
    case actionTypes.ACTION_PROCESSING: 
      return {
        ...state,
        actionProcessing: action.payload,
      }
  
    default: return { ...state};
  }
}

export default reducer;