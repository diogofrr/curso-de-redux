import styled from 'styled-components';

export const Input = styled.input`
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 500;
    color: ${({color}) => color ?? 'black'};
    outline: none;
    border: solid 3px black;
    border-radius: 5px;
    border-color: ${({color}) => color ?? 'black'};
    background-color: white;
    padding: 8px;
    width: 100%;
`;
