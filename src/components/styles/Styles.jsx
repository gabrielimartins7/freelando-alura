import { Global } from "@emotion/react";

const stylesGlobal = theme => {
    return {
        html: {
            fontFamily: theme.fontFamily
        },
        body: {
            margin: 0
        }
    }
}

export const Styles = () => {
    return(
        <Global styles={stylesGlobal} />
    )
}