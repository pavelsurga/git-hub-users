import React, { useEffect } from 'react';
import { actions as UsersActions } from '../features';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

export const UsersLayout = () => {
  const dispatch = useDispatch();

  const curentPage = useSelector(state => state.users.currentPage, shallowEqual);
  const usersList = useSelector(state => state.users.users, shallowEqual);

  useEffect(() => {
    console.log('curentPage', curentPage);
    dispatch(UsersActions.loadPage(curentPage));
  },[]);
  useEffect(() => {
    dispatch(UsersActions.loadPage(curentPage));
  },[curentPage]);

  return (<div>USERS LAYOUT</div>);
};