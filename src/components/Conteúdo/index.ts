import styled from "styled-components";

interface RowI{
    reverse?: boolean
}

interface Img{
    src: string
}

export const ContentSection = styled.section`
    display: flex;
    flex-direction: column;
`

export const Row = styled.div<RowI>`
    display: flex;
    flex-direction: ${props=> props.reverse ? 'row-reverse' : 'row'};    
    height: 400px;
`
export const DivText = styled.div`
    padding: 80px;
    width: 50%;
    background-color: ${props=> props.theme.colors.lighterBG};
`
export const DivImg = styled.div<Img>`
    width: 50%;
    background-image: url(${props => props.src});
    background-size: cover;
`