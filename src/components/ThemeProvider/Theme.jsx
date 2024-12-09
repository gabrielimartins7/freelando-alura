import React from "react";

import { ThemeProvider } from "@emotion/react";

const theme = {
    colors: {
        primary: {
            blue: '#5754ED',
            red: '#D93114',
            darkWhite: '#f9fafb'
        },
        secondary: {
            light: '#EBEAF9'
        },
        neutral: {
            gray: '#F5F5F5',
            grayMedium: '#E8E8E8',
            grayDark: '#373737',
        },
        white: '#FFFFF',
        dark: '#B61B00',
        focus:'#B009FF'
    },
    spacing: {
        xs: '8px',
        small: '16px',
        normal: '32px',
        large: '48px'
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