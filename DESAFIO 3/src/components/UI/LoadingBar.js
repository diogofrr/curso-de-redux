import styled from 'styled-components';

export const LoadingBar = styled.div`
  height: 4px;
  background-color: black;
  overflow: hidden;
  width: 200px;
  margin: 0 auto;

  &:after {
    content: "";
    display: block;
    width: 75%;
    height: 4px;
    background-color: white;
    animation: loading 1s linear infinite;
  }

  @keyframes loading {
    from{
      transform: translateX(-100%);
    } to{
      transform: translateX(150%);
    }
  }
`;
