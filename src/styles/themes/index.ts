import { DefaultTheme } from "styled-components";


const light: DefaultTheme = {
    fontSize: '16px',
    colors:{
        bgColor: '#f1f1f1',
        lighterBG: '#fff',
        primary: '#01BAEF',
        secondary: '#0B4F6C',
        text: '#3a3a3a'
    }
}


const dark: DefaultTheme = {
    colors:{
        bgColor: '#3a3a3a',
        lighterBG: '#272D2D',
        primary: '#61FF7E',
        secondary: '#5EEB5B',
        text: '#fff'
    },
    fontSize: '16px'
}

export {light, dark}