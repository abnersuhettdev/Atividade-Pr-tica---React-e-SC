import styled from "styled-components";

export const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 20vh;
    padding: 40px;
  
`
export const Links = styled.div`
    display: flex;
    flex-direction: column;

    & > small { 
        font-size: 10px;
        color: ${props => props.theme.colors.text};
    }
`

export const ListLinks = styled.ul`
    display: flex;
    list-style: none;
    gap: 5px;

    & > li{
        font-size: 12px;
        color: ${props => props.theme.colors.secondary};
    }

    & > li::after{
        content: ' - ';
        color: ${props => props.theme.colors.primary};
    }

    &> li:last-child::after{
        content: '';
    }

`

export const MediaLinks = styled.ul`
    display: flex;
    gap: 3px;
    list-style: none;
    
    &> li > img {
        width: 40px;
        height: 40px;
    }
`