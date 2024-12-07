import { Col, Row } from "react-grid-system";

import { Typography } from "../../components/Typography";
import { Link } from "../../components/Link";

import client from "../../assets/cliente.png";
import freela from "../../assets/freela.png";

export const CustomerSelection = () => {
    return(
        <div style={{ textAlign: 'center'}}>
            <Typography variant="h1" component="h1">Crie seu cadastro</Typography>
            <Typography variant="h3" component="h2">Como podemos te ajudar?</Typography>
            <Row>
                <Col md={6} sm={12}>
                    <img src={client} alt="Mulher de pele negra, cabelo black trabalhando" />
                    <Typography variant="body" component="body">Sou cliente e preciso de um freela!</Typography>
                </Col>
                <Col md={6} sm={12}>
                    <img src={freela} alt="Homem de pele branca, cabelo e barba curta em uma reunião" />
                    <Typography variant="body" component="body">Sou freela e preciso de clientes!</Typography> 
                </Col>
            </Row>
            <Typography variant="bodySecundary" component="bodySecundary">Já tem conta?</Typography>
            <p>
                <Link variant="secundary">Faça login!</Link>
            </p>
        </div>
    )
}