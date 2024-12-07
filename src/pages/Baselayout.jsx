import { Outlet } from "react-router-dom";
import { Col, Container, Row } from "react-grid-system";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ItemListInLine } from "../components/List/ItemListInLine"
import { Link } from "../components/Link";
import { List } from "../components/List/List";
import { Typography } from "../components/Typography";

import { FreelandoLogo } from "../components/Icons/FreelandoLogo";
import { IconeWhatsApp } from "../components/Icons/IconeWhatsApp";
import { IconeTwitch } from "../components/Icons/IconeTwitch";
import { IconeInstagram } from "../components/Icons/IconeInstagram";
import { IconeTwitter } from "../components/Icons/IconeTwitter";

export const Baselayout = () => {
    return (
        <>
            <Header>
                <Container>
                    <Row align="center">
                        <Col>
                            <FreelandoLogo />
                        </Col>
                        <Col style={{ textAlign: 'right' }}>
                            <Link>Login</Link>
                        </Col>
                    </Row>
                </Container>
            </Header>
            <Outlet />
            <Footer>
                <Container>
                    <Row align="center">
                        <Col>
                            <FreelandoLogo height={40} width={176} />
                            <Typography variant="caption" component="caption" >Desenvolvido por Gabrieli Martins. Projeto fictício sem fins comerciais.</Typography>
                        </Col>
                        <Col style={{ textAlign: 'right' }}>
                            <Typography variant="caption" component="caption" >Acesse nossas redes:</Typography>
                            <List>
                               <ItemListInLine>
                                    <a href="/" aria-label="Link para o WhatsApp">
                                        <IconeWhatsApp />
                                    </a>
                                </ItemListInLine> 
                               <ItemListInLine>
                                    <a href="/" aria-label="Link para o WhatsApp">
                                        <IconeTwitch />
                                    </a>
                                </ItemListInLine> 
                               <ItemListInLine>
                                    <a href="/" aria-label="Link para o WhatsApp">
                                        <IconeInstagram />
                                    </a>
                                </ItemListInLine> 
                               <ItemListInLine>
                                    <a href="/" aria-label="Link para o WhatsApp">
                                        <IconeTwitter />
                                    </a>
                                </ItemListInLine> 
                            </List>
                        </Col>
                    </Row>
                </Container>
            </Footer>
        </>
    )
}