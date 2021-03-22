import React, { useCallback } from "react";
import { useUsersDataRequest } from '../hooks/useUsersDataRequest';
import UserList from "../../../components/UserList/UserList";
import Pagination from "@material-ui/lab/Pagination";
import { ListWrapper } from "./UsersLayout.style";
import { useHistory } from "react-router";
import Spinner from "../../../components/Spinner/Spinner";

export const UsersLayout = ({ match }) => {

  const history = useHistory();

  const navigateToPage = useCallback(page => {
    history.push(`/users/${page}`);
  }, [history]);

  const page = Number(match.params.page);

  const {userList, pagesCount, loading} = useUsersDataRequest(page, navigateToPage);

  if (loading) {
    return <Spinner />
  }

  return (
    <>
      <ListWrapper>
        <UserList users={userList} />
      </ListWrapper>
      <Pagination
        count={pagesCount}
        page={page}
        onChange={(_, page) => navigateToPage(page)}
        showFirstButton
        showLastButton
      />
    </>
  );
};
