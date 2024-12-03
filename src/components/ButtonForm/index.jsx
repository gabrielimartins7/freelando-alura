import styled from '@emotion/styled'

const ButtonPrimary = styled.button`
    background-color: ${props => props.theme.colors.primary.red};
    color: ${props => props.theme.colors.primary.darkWhite};
    border-radius: ${props => props.theme.spacing.small};
    padding: ${props => props.theme.spacing.small};
    box-sizing: border-box;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    border: none;
    cursor: pointer;
    &:hover {
        background: ${props => props.theme.colors.dark};
    }
`

const ButtonSecondary = styled.button`
    background: transparent;
    color: ${props => props.theme.colors.primary.red};
    border: 2px solid ${props => props.theme.colors.primary.red};
    border-radius: ${props => props.theme.spacing.small};
    padding: ${props => props.theme.spacing.small};
    box-sizing: border-box;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    cursor: pointer;
    &:hover {
        border-color: ${props => props.theme.colors.dark};
        color: ${props => props.theme.colors.dark};
    }
`

export const ButtonForm = ({children, variant = 'primary'}) => {
    if(variant === 'primary') {
        return <ButtonPrimary>{children}</ButtonPrimary>
    }
    return <ButtonSecondary>{children}</ButtonSecondary>
}