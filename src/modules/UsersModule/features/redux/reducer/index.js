import initialState from '../initial';
import { actionTypes } from '../actions';

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_USERS:
      return {
        ...state,
        userList: action.payload.userList,
        total: action.payload.total,
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