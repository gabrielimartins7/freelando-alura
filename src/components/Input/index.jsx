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
    margin-bottom: ${props => props.theme.spacing.small};
    background: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.neutral.grayDark};
    border-radius: ${props => props.theme.spacing.small};
    height: 40px;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
`;
export const Input = ({ label, value, onChange, type = 'text' }) => {
    return (
        <LabelStyled>
            {label}
            <InputStyled
                value={value}
                onChange={evento => onChange(evento.target.value)}
                type={type}
            />
        </LabelStyled>
    )
}