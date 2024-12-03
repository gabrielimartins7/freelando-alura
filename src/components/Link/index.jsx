import styled from "@emotion/styled";

const LinkPrimary = styled.a`
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-decoration: none;
    cursor: pointer;
    color: ${props => props.theme.colors.primary.darkWhite};
    &:hover {
        background: ${props => props.theme.colors.dark};
    }
`

const LinkSecondary = styled.a`
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-decoration: none;
    cursor: pointer;
    color: ${props => props.theme.colors.primary.red};
    &:hover {
        border-bottom: 1px solid ${props => props.theme.colors.dark};
        font-weight: bold;
    }
`

export const Link = ({children, variant = 'primary'}) => {
    if(variant === 'primary') {
        return <LinkPrimary>{children}</LinkPrimary>
    }
    return <LinkSecondary>{children}</LinkSecondary>
}