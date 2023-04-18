import styled from 'styled-components';

export const ListItem = styled.li`
  display: grid;
  align-items: center;
  gap: 10px;
  grid-template-rows: 50px;
  grid-template-columns: 50px 1fr auto;

  background: #f9f9f9;
  border-radius: 4px;
  margin-bottom: 20px;;

  opacity: 0;
  transform: translateY(-20px);
  animation: showAnimation 1s forwards;

  @keyframes showAnimation {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`;
