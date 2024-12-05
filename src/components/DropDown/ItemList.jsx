import styled from "@emotion/styled";

export const ItemList = styled.li`
    text-align: left;
    padding: 0 ${props => props.theme.spacing.small};
    border-bottom: 1px solid #373737;
    cursor: pointer;
    &:last-child {
        border: none;
    }
`