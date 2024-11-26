import React from "react";

import { ThemeProvider } from "@emotion/react";

const theme = {
    colors: {
        primary: {
            blue: '#5754ED'
        },
        secondary: {
            light: '#EBEAF9'
        }
    },
    spacing: {
        small: '16px',
        normal: '32px'
    },
    fontFamily: "'Oswald', sans-serif"
}

export const Theme = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}