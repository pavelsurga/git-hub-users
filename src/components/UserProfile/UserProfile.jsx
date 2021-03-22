import { Paper, Avatar, Typography} from '@material-ui/core';
import React from 'react';
import {format} from 'date-fns';
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
        <Typography variant="subtitle2">{location}</Typography>
        </TypographyContainer>
        <TypographyContainer>
        <Typography variant="caption" color="textSecondary">From {format(new Date(from),'dd/mm/yyyy')}</Typography>
        </TypographyContainer>
      </TextContainer>
    </Layout>
  )
};

export default UserProfile;