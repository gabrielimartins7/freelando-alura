import React from "react";

import styled from "@emotion/styled";

const HeaderContainer = styled.header`
    background: ${props => props.theme.colors.primary.blue};
    padding: ${props => props.theme.spacing.normal};
`;

export const Header = () => {
    return (
        <HeaderContainer>
            <h1>Meu site</h1>
        </HeaderContainer>
    )
}