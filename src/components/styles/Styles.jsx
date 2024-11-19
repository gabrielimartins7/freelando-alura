import { css, Global } from "@emotion/react";

const stylesGlobal = css`
    * {
        font-family: "Dosis", serif;
    }
`

export const Styles = () => {
    return(
        <Global styles={stylesGlobal} />
    )
}