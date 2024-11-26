import styled from "@emotion/styled"

const components = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    body: 'p',
    bodyBold: 'strong',
    bodySecundary: 'p',
    bodySecundaryBold: 'strong',
    caption: 'p'
}

const componentsStyles = {
    h1: `
        font-weight: 600;
        font-size: 40px;
        line-height: 49px;
    `,
    h2: `
        font-weight: 600;
        font-size: 32px;
        line-height: 39px;
    `,
    h3: `
        font-weight: 500;
        font-size: 24px;
        line-height: 29px;
    `,
    body: `
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
    `,
    bodyBold: `
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
    `,
    bodySecundary: `
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
    `,
    bodySecundaryBold: `
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
    `,
    caption: `
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
    `
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