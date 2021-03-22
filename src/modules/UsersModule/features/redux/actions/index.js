import constants from "../../../../../shared/constants.json";

const actionTypes = {
  LOAD_USERS: "users/LOAD_USERS",
  CHANGE_PAGE: "users/CHANGE_PAGE",
  LOAD_COUNT: "users/LOAD_COUNT",
  ACTION_PROCESSING: 'users/ACTION_PROCESSING',
};

const loadPage = (newPage) => async (dispatch, getState, extra) => {
  const { currentPage } = getState().users;
  const api = extra.api.UsersApi;
  dispatch({ type: actionTypes.CHANGE_PAGE, payload: newPage });
  if (newPage === currentPage) {
    return;
  }
  dispatch({ type: actionTypes.ACTION_PROCESSING, payload: true });
  const since = newPage === 1 ? 0 : constants.range * (newPage - 1) - 1;
  const userList = await api.getUsers({ since, per_page: constants.range });
  dispatch({ type: actionTypes.LOAD_USERS, payload: userList.data });
  dispatch({ type: actionTypes.ACTION_PROCESSING, payload: false });
};

const loadCount = () => async (dispatch, getState, extra) => {
  const { total } = getState().users;
  const api = extra.api.UsersApi;
  if (total) {
    return;
  }
  const countRequest = await api.getUsersCount();
  dispatch({ type: actionTypes.LOAD_COUNT, payload: countRequest.data });
};

export { actionTypes, loadPage, loadCount };
