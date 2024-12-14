import styled from "@emotion/styled"
import { Col, Row } from "react-grid-system"

import { Typography } from "../../components/Typography";

import concluido from "../../assets/concluido.png";
import { Link } from "react-router-dom";
import { ButtonForm } from "../../components/ButtonForm";

const StyleImage  = styled.img`
    max-width: 100%;
    border-radius: 16px;
`

export const Completed = () => {
    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <Typography variant="h1" component="h1">Seu perfil esta completo!</Typography>
                <Typography variant="h3" component="h3">Agora é só começar a se conectar com os melhores freelancers do mercado!</Typography>
            </div>
            <figure>
                <StyleImage src={concluido} />
            </figure>
            <Row justify="center">
                <Col lg={6} md={6} sm={6} style={{ textAlign: 'center' }}>
                    <Link to='..'>
                        <ButtonForm variant="ButtonSecondary">
                            Voltar para a home
                        </ButtonForm>
                    </Link>
                </Col>
            </Row>
        </>
    )
}