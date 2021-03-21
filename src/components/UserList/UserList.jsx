import {
  List,
  Divider,
} from "@material-ui/core";
import UserListItem from './UserListItem';

const UserList = ({ users }) => {
  return (
    <List>
      {users.map((user) => (
        <>
          <UserListItem avatarUrl={user.avatar_url} htmlUrl={user.html_url} username={user.login} />
          <Divider variant="inset" component="li" />
        </>
      ))}
    </List>
  );
};

export default UserList;
