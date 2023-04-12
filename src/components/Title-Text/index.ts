import styled from "styled-components"

export const Title = styled.h3`
    font-size: 16px;
    color: ${props=> props.theme.colors.text};
`

export const Text = styled.p`
    font-size: 12px;
    opacity: 75%;
    color: ${props=> props.theme.colors.text};
`