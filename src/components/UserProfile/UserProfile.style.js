import { Paper } from '@material-ui/core';
import styled from 'styled-components';

const Layout = styled(Paper)`
  display:flex;
  width: 100%;
  flex-direction:row;
  padding: 0.5rem;
  border: 1px solid black;
`;

const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  flex: 1;
`;

const TypographyContainer = styled.div`
  display: flex;
  flex: 1;
`;

export {Layout, AvatarContainer, TextContainer, TypographyContainer }
