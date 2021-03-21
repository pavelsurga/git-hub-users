
const actionTypes = {
  LOAD_USERS: 'users/LOAD_USERS',
  CHANGE_PAGE: 'users/CHANGE_PAGE',
};

const log = (message) => async (dispatch, getState, extra) => {
  console.log('extra' ,extra);
  console.log('message', message);
  const api = extra.api.UsersApi;
  const response = await api.getUsers({ since: 10, per_page: 10 });
  console.log('response', response);
}

const loadPage = (newPage) => async (dispatch, getState, extra) => {
  const { range, users } = getState().users;
  const api = extra.api.UsersApi;
  dispatch({type: actionTypes.CHANGE_PAGE, payload: newPage });
  if(users[newPage]) {
    return;
  } else {
    const since = newPage === 0 ? 0 : (range * (newPage - 1)) -1;
    const response = await api.getUsers({ since, per_page: range});
    dispatch({ type: actionTypes.LOAD_USERS, payload: { page: newPage, userList: response }});
  }
}


export {
  actionTypes,
  log,
  loadPage,
};