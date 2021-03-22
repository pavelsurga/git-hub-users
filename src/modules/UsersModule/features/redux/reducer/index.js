import initialState from '../initial';
import { actionTypes } from '../actions';

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_USERS:
      return {
        ...state,
        userList: action.payload,
      };
    case actionTypes.LOAD_COUNT:
      return {
        ...state,
        total: action.payload,
      }
    case actionTypes.CHANGE_PAGE:
      return {
        ...state,
        currentPage: action.payload,
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