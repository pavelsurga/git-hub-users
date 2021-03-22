import { useEffect, useState } from "react";
import constants from "../../../shared/constants.json";
import { actions as UsersActions } from "../features";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

const useUsersDataRequest = (page, navigateToPage) => {
  const dispatch = useDispatch();
  const userList = useSelector(state => state.users.userList, shallowEqual);
  const usersCount = useSelector(state => state.users.total, shallowEqual);
  const loading = useSelector(state => state.users.actionProcessing,shallowEqual);

  const pagesCount = usersCount ? Math.ceil(usersCount / constants.VisiblePagesCount) : 0;

  useEffect(() => {
    dispatch(UsersActions.loadCount());
  }, []);

  useEffect(() => {
    if (!usersCount) {
      return;
    }

    if (Number.isNaN(page)) {
      navigateToPage(1);
      return;
    }

    if (page > pagesCount) {
      navigateToPage(pagesCount);
      return;
    }

    dispatch(UsersActions.loadPage(page));
  }, [usersCount, page]);

  return {userList, pagesCount, loading};

}

export {useUsersDataRequest};