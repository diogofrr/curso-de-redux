import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 350px;

    opacity: 0;
    transform: translateX(-10px);
    animation: showAnimation 1s forwards;

    @keyframes showAnimation {
      to {
        opacity: 1;
        transform: initial;
      }
    }
`;
