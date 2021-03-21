import constants from '../../../../../shared/constants.json';

const actionTypes = {
  LOAD_USERS: 'users/LOAD_USERS',
  CHANGE_PAGE: 'users/CHANGE_PAGE',
};

const loadPage = (newPage) => async (dispatch, getState, extra) => {
  const { currentPage } = getState().users;
  const api = extra.api.UsersApi;
  dispatch({type: actionTypes.CHANGE_PAGE, payload: newPage });
  if(newPage === currentPage) {
    return;
  } else {
    const response = await api.getUsers({ page: newPage, per_page: constants.range});
    dispatch({ type: actionTypes.LOAD_USERS, payload: { page: newPage , userList: response.items, total:response.total_count }});
  }
}


export {
  actionTypes,
  loadPage,
};