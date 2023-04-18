import styled from 'styled-components';

export const LogoutBtn = styled.button`
    height: 15px;
    width: 15px;
    cursor: pointer;
    border: 3px solid black;
    background-color: ${({color}) => color};
    border-radius: 50%;
    display: inline-block;
    content: "";

    &:hover{
        background-color: red;
    }
`;
