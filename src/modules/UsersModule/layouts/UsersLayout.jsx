import React, { useEffect } from 'react';
import { actions as UsersActions } from '../features';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { List, ListItem } from '@material-ui/core';
import UserList from '../../../components/UserList/UserList';

export const UsersLayout = ({ match }) => {
  const dispatch = useDispatch();
  const userList = useSelector(state => state.users.userList, shallowEqual);

  useEffect(() => {
    dispatch(UsersActions.loadPage(Number(match.params.page)));
  },[match.params.page]);

  return (<UserList users={userList}/>);
};