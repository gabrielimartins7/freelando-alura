import styled from "@emotion/styled"

const LabelStyled = styled.label`
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
`;
const InputStyled = styled.input`
    display: block;
    width: 100%;
    box-sizing: border-box;
    margin-top: ${props => props.theme.spacing.xs};
    background: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.neutral.grayDark};
    border-radius: ${props => props.theme.spacing.small};
    height: 40px;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
`;
export const Input = ({ label }) => {
    return (
        <LabelStyled>
            {label}
            <InputStyled />
        </LabelStyled>
    )
}