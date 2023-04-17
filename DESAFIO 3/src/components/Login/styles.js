import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 350px;
`;

export const FormControl = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
`;

export const Label = styled.label`
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 500;
    color: black;
`;

export const Input = styled.input`
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 500;
    color: black;
    outline: none;
    border: solid 3px black;
    border-radius: 5px;
    background-color: white;
    padding: 8px;
    width: 100%;
`;

export const LogoutBtn = styled.button`
    height: 15px;
    width: 15px;
    cursor: pointer;
    border: 3px solid black;
    background-color: transparent;
    border-radius: 50%;
    display: inline-block;
    content: "";
`;

export const LoginBtn = styled.button`
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    color: white;
    cursor: pointer;
    background-color: black;
    border: solid 3px black;
    outline: none;
    padding: 10px 30px;
    border-radius: 5px;
    align-self: start;

    &:hover{
        background-color: white;
        color: black;
    }
`;

export const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    color: black;
    font-size: 20px;
    font-weight: 700;
    text-align: start;
`;

export const FormHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

export const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`;