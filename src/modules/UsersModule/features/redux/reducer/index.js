import initialState from '../initial';
import { actionTypes } from '../actions';

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_USERS:
      return {
        ...state,
        users: {...state.users, [action.payload.page]: action.payload.userList },
      };
    case actionTypes.CHANGE_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      }
  
    default: return { ...state};
  }
}

export default reducer;