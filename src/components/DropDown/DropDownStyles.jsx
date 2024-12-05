import styled from "@emotion/styled";

export const DropDownStyles = styled.ul`
    position: absolute;
    z-index: 1;
    top: 100%;
    left: 0;
    right: 0;
    margin: 0;
    padding: 0 ${props => props.theme.spacing.small};
    border: 1px solid ${props => props.theme.colors.neutral};
    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 18px;
    border-top: none;
    list-style: none;
    background-color: #FFFFFF;
`
