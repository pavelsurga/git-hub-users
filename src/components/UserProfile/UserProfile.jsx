import { Paper, Avatar, Typography} from '@material-ui/core';
import React from 'react';
import {Layout, AvatarContainer, TextContainer, TypographyContainer } from './UserProfile.style';

const UserProfile = ({ avatarUrl, name, location, from }) => {
  return (
    <Layout >
      <AvatarContainer>
        <Avatar alt={name} src={avatarUrl} />
      </AvatarContainer>
      <TextContainer>
        <TypographyContainer>
          <Typography variant="h6">{name}</Typography>
        </TypographyContainer>
        <TypographyContainer>
        <Typography variant="h6">{location}</Typography>
        </TypographyContainer>
        <TypographyContainer>
        <Typography variant="h6">{from}</Typography>
        </TypographyContainer>
      </TextContainer>
    </Layout>
  )
};

export default UserProfile;