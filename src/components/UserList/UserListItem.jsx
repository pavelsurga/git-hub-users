import {
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
  ListItemText,
  Button,
  ListItem,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const UserListItem = ({ username, htmlUrl, avatarUrl }) => {
  const CustomLink = (props) => <Link to={`/user/${username}`} {...props} />;
  return (
    <ListItem button component={CustomLink}>
      <ListItemAvatar>
        <Avatar alt={username} src={avatarUrl} />
      </ListItemAvatar>
      <ListItemText primary={username} />
      <ListItemSecondaryAction>
        <Button variant="outlined" href={htmlUrl} target="_blank">
          Кнопка
        </Button>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default UserListItem;
