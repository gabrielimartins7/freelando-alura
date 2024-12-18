import { useState } from "react";
import styled from "@emotion/styled"

import { DropDownStyles } from "./DropDownStyles";
import { ItemList } from "./ItemList";

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

export const DropDown = ({ title, options, value, onChange }) => {
    const [open, setOpen] = useState(false);
    const [focus, setFocus] = useState(null);

    const manipulateKey = (evento) => {
        setOpen(true);
        // eslint-disable-next-line default-case
        switch (evento.key) {
            case 'ArrowDown':
                evento.preventDefault();
                setFocus(oldFocus => {
                    if (oldFocus === null) {
                        return 0;
                    }
                    if (oldFocus === (options.length - 1)) {
                        return options.length - 1;
                    }
                    return oldFocus += 1;
                })
            break;
            case 'ArrowUp':
                evento.preventDefault();
                setFocus(oldFocus => {
                    if (!oldFocus) {
                        return 0;
                    }
                    return oldFocus -= 1;
                })
            break;
            case 'Enter':
                    evento.preventDefault();
                    setFocus(null)
                    setOpen(false)
                    onChange(options[focus])
            break;
            case 'Tab':
                setFocus(null)
                setOpen(false)
            break;
            case 'Escape':
                evento.preventDefault();
                setFocus(null)
                setOpen(false)
            break;
            default:
                break;

        }
    }

    return (
        <StylesLabel>
            {title}
            <StyledButton 
                open={open}
                onClick={() => setOpen(!open)}
                onKeyDown={manipulateKey}
                type="button"
            >
                <div>
                    { value ? value.text : 'selected'}
                </div>
                <div>
                    <span>{open ? '▲' : '▼'}</span>
                </div>
            </StyledButton>
            {open &&
                <DropDownStyles>
                    {
                        options.map((options, index) => <ItemList
                            key={options.value}
                            activeFocus={index === focus}
                            onClick={() => onChange(options)}
                            >
                            {options.text}
                        </ItemList>
                        )
                    }
                </DropDownStyles>
            }
        </StylesLabel>
    )
}