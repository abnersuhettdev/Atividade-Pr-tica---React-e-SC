import styled from "styled-components";

interface BannerI{
    height: string,
    fontSize: string
}

export const Banner = styled.figure<BannerI>`
    height: ${props => props.height};
    background-image: url('https://images.pexels.com/photos/13069714/pexels-photo-13069714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    background-size: cover;
    display:flex;
    align-items: center;
    justify-content: center;
    color: #5CF64A;

    & > h1, h2{
        font-size: 50px;
    }
`

