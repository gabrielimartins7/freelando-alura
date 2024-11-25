import React from "react";

import styled from "@emotion/styled";

const BoxTotal = styled.div`
    padding: ${props => props.theme.spacing.normal};
    background: ${props => props.theme.colors.secondary.light};
    border: 1px solid ${props => props.theme.colors.primary.blue};
    border-radius: ${props => props.theme.spacing.small};
`;
export const Card = ({ children }) => {
    return (
        <BoxTotal>
            { children }
        </BoxTotal>
    )
}