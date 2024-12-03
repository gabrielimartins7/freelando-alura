import { useState } from "react";
import styled from "@emotion/styled"

const StylesLabel = styled.label`
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    position: relative;
`

const StyledButton = styled.button`
    cursor: pointer;
    display: block;
    height: 40px;
    width: 100%;
    font-size: 18px;
    outline: none;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 400;
    border-radius: 18px;
    border-bottom-left-radius: ${props => props.open ? '0' : '18px'};
    border-bottom-right-radius: ${props => props.open ? '0' : '18px'};
    margin-top: ${props => props.theme.spacing.xs};
    padding: ${props => props.theme.spacing.small};
    background: ${props => props.theme.colors.primary.darkWhite};
    border: 1px solid ${props => props.theme.colors.neutral};
    &:focus {
        border-color: ${props => props.theme.colors.focus};
    }
`

export const DropDown = ({ title, options }) => {
    const [open, setOpen] = useState(false);
    return (
        <StylesLabel>
            {title}
            <StyledButton onClick={() => setOpen(!open)}>
                <div>
                    Selecione
                </div>
                <div>
                    <span>{open ? '▲' : '▼'}</span>
                </div>
            </StyledButton>
            {open && 
                <ul>
                    {
                        options.map(options => 
                            <li key={options.value}>
                                {options.text}
                            </li>
                        )
                    }
                </ul>
            }
        </StylesLabel>
    )
}