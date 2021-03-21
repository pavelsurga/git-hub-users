import initialState from '../initial';
import { actionTypes } from '../actions';

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_USER:
      return {
        ...state,
        userData: action.payload,
      };
  
    default: return { ...state};
  }
}

export default reducer;