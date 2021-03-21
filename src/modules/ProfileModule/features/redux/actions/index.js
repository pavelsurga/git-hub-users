
const actionTypes = {
  LOAD_USER: 'profile/LOAD_USER',
  
};

const loadProfile = username => async (dispatch, getState, extra) => {
  const api = extra.api.ProfileApi;
  const currentUser = getState().profile.userData;
  if(currentUser && currentUser.login === username) {
    return
  }
  const response = await api.getUserProfile(username);
  dispatch({ type: actionTypes.LOAD_USER, payload: response })
}



export {
  actionTypes,
  loadProfile,
};