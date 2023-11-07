import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 42px;
  margin: 0 auto;
  padding: ${props => props.theme.space[3]}px;

  max-width: 100%;
  width: 360px;

  border-radius: 8px;
  box-shadow: -1px -1px 1px #fff, 1px 1px 1px #8ca4a8;
  background-color: ${props => props.theme.colors.background};
`;
//todo ***************** color online *****************
export const Status = styled.span`
  display: block;
  margin-left: 1.6rem;
  width: 12px;
  height: 12px;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
}};
  border-radius: 50%;
`;

export const Image = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 60px;
  width: 60px;

  border-radius: 50%;
  box-shadow: -3px -3px 7px #ffffff, 3px 3px 5px #ceced1;

`;

export const Name = styled.p`
  margin-left: 10px;
  color: #9e0202;
  text-shadow: 1px 1px 1px #fff;
  font-size: 16px;
  font-weight: 700;
`;
