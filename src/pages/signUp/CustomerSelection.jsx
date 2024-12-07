import { Col, Row } from "react-grid-system";
import { Typography } from "../../components/Typography";

import client from "../../assets/cliente.png";
import freela from "../../assets/freela.png";

export const CustomerSelection = () => {
    return(
        <>
            <Typography variant="h1" component="h1">Crie seu cadastro</Typography>
            <Typography variant="h3" component="h2">Como podemos te ajudar?</Typography>
            <Row>
                <Col md={6} sm={12}>
                    <img src={client} alt="Mulher de pele negra, cabelo black trabalhando" />
                </Col>
                <Col md={6} sm={12}>
                    <img src={freela} alt="Homem de pele brnca, cabelo e barba curta em uma reunião" />
                </Col>
            </Row>
        </>
    )
}