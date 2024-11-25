import { css, Global } from "@emotion/react";

const stylesGlobal = css`
    * {
        font-family: "Oswald", sans-serif;
    }
`

export const Styles = () => {
    return(
        <Global styles={stylesGlobal} />
    )
}