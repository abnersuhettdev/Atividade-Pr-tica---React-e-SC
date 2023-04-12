import styled from "styled-components";

export const Container = styled.section`
    height: 40vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 80px;
    background-color: ${props => props.theme.colors.bgColor};
`

export const Card = styled.div`
    width: 350px;
    height: 200px;
    display:flex ;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
`

export const Icon = styled.img`
    width: 80px;
    height: 80px;   
`

