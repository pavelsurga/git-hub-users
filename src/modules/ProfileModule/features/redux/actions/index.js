
const actionTypes = {
  LOAD_USER: 'profile/LOAD_USER',
  ERROR: 'profile/ERROR',
  ACTION_PROCESSING: 'profile/ACTION_PROCESSING',
};

const loadProfile = username => async (dispatch, getState, extra) => {
  const api = extra.api.ProfileApi;
  const currentUser = getState().profile.userData;
  if(currentUser && currentUser.login === username) {
    return
  }
  dispatch({ type: actionTypes.ACTION_PROCESSING, payload: true });
  const response = await api.getUserProfile(username);
  if (!response.success) {
    dispatch({type: actionTypes.ERROR, payload: response.message });
    return
  }
  dispatch({ type: actionTypes.LOAD_USER, payload: response.data });
  dispatch({ type: actionTypes.ACTION_PROCESSING, payload: false });

}



export {
  actionTypes,
  loadProfile,
};