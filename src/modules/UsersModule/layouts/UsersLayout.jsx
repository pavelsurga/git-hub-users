import React, { useEffect } from "react";
import { actions as UsersActions } from "../features";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import UserList from "../../../components/UserList/UserList";
import Paginator from "../features/pagination/Paginator";

export const UsersLayout = ({ match }) => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.userList, shallowEqual);
  const usersCount = useSelector((state) => state.users.total, shallowEqual);

  useEffect(() => {
    dispatch(UsersActions.loadPage(Number(match.params.page)));
  }, [match.params.page]);

  return (
    <>
      <UserList users={userList} />
      <Paginator currentPage={match.params.page} usersCount={usersCount} />
    </>
  );
};
