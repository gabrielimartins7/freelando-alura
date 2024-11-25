import React from "react";

import { ThemeProvider } from "@emotion/react";

const theme = {
    colors: {
        primary: {
            bluet: '#5754ED'
        },
        secondary: {
            light: '#EBEAF9'
        }
    },
    spacing: {
        small: '16px',
        normal: '32px'
    }
}

export const Theme = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}