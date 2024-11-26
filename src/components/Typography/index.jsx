import styled from "@emotion/styled"

const components = {
    h1: 'h1',
    body: 'p'
}

const componentsStyles = {
    h1: `
        font-weight: 600;
        font-size: 40px;
        line-height: 49px;
    `,
    body: `
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
    `,
}

export const Typography = ({ component, variant, children }) => {
    const tag = components[component]
    const Component = styled[tag]`${componentsStyles[variant]}`

    return(
        <Component>
            {children}
        </Component>
    )
}