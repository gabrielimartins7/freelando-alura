import styled from "@emotion/styled";


const StylesLabel = styled.label`
    display: flex;
    align-items: center;
    font-size: 16px;
    margin-left: ${props => props.theme.spacing.xs};
    margin-bottom: ${props => props.theme.spacing.normal};
    cursor: pointer;
    padding: ${props => props.theme.spacing.xs};
    &:hover {
        &:before {
            border-color: ${props => (props.theme.colors.focus)};
        }
    }
    &:before {
        content: '';
        height: 20px;
        width: 20px;
        border-radius: 50%;
        border: 2px solid ${props => props.theme.colors.neutral.gray};
        border-color: inherit;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        cursor: pointer;
        background-color: ${props => (props.checked ? props.theme.colors.primary.red : props.theme.colors.neutral.gray)};
        border-color: ${props => (props.checked ? props.theme.colors.primary.red : 'inherit')};
    }
`;

const Input = styled.input`
    appearance: none;
    opacity: 0;
    &:focus + label {
        border-radius: 16px;
        border: 1px solid;
        border-color: ${props => props.theme.colors.focus};
    }
`

const Radio = ({ value, label, checked, onClick }) => (
    <>
        <Input type="radio" valor={value} checked={checked} onChange={onClick} id={`radio-customizado-${value}`}/>
        <StylesLabel htmlFor={`radio-customizado-${value}`} checked={checked}>
            {label}
        </StylesLabel>
    </>
);

export default Radio;