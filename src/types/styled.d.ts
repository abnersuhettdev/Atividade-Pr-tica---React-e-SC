import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme{
        fontSize: string;
        colors : {
            primary: string,
            secondary: string,
            bgColor: string,
            lighterBG: string,
            text: string
        },
    }
}