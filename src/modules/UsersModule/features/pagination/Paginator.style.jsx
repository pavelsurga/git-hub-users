import styled from 'styled-components';
import { Link }  from 'react-router-dom'; 

const PaginationContainer = styled.div`
  width:30rem;
  height: 4rem;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid black;
  border-radius: 0.625rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.3rem 0;
`;

const PaginakaWindowContainer = styled.div`
  width: 100%;
  overflow: hidden;
  border: 2px solid rgba(0, 0, 0, 0.22);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 0.3rem 0.5rem;
  background: rgba(0, 0, 0, 0.12);

`

const PaginakaItemContainer = styled(Link)`
  height: 1.875rem;
  width: 1.875rem;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  color: black;
  border-radius: 50%;
  border: ${props => props.isActive ? '2px solid rgba(0, 0, 0, 0.32)' : `none`};
  &:hover {
    background: rgba(0, 0, 0, 0.12);
    border: 1px solid black;
  }
`;

const PaginakaControlContainer = styled.img`
  width: 4rem;
  height: 2.7rem;
  box-sizing: border-box;
  padding: 0.5rem;
  border-top-right-radius: ${props => props.rightDirection ? '10px': '0'};
  border-top-left-radius: ${props => !props.rightDirection ? '10px': '0'};
  border-bottom-right-radius: ${props => props.rightDirection ? '10px': '0'};
  border-bottom-left-radius: ${props => !props.rightDirection ? '10px': '0'};
  &:hover {
    background: rgba(0, 0, 0, 0.12);
  }
`;


export {PaginationContainer, PaginakaWindowContainer, PaginakaItemContainer, PaginakaControlContainer}