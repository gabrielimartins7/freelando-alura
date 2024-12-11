
import { Col, Container, Row } from 'react-grid-system';

import { ButtonForm } from '../components/ButtonForm';
import { Card } from '../components/Card';
import { DropDown } from '../components/DropDown/DropDown';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Link } from '../components/Link';
import { Theme } from '../components/ThemeProvider/Theme';
import { Typography } from '../components/Typography';
import { Styles } from '../components/styles/Styles';

import { FreelandoLogo } from "../components/Icons/FreelandoLogo";


const states = [
  { "text": "Acre", "value": "AC" },
  { "text": "Alagoas", "value": "AL" },
  { "text": "Amapá", "value": "AP" },
  { "text": "Amazonas", "value": "AM" },
  { "text": "Bahia", "value": "BA" },
  { "text": "Ceará", "value": "CE" },
  { "text": "Distrito Federal", "value": "DF" },
  { "text": "Espírito Santo", "value": "ES" },
  { "text": "Goiás", "value": "GO" },
  { "text": "Maranhão", "value": "MA" },
  { "text": "Mato Grosso", "value": "MT" },
  { "text": "Mato Grosso do Sul", "value": "MS" },
  { "text": "Minas Gerais", "value": "MG" },
  { "text": "Pará", "value": "PA" },
  { "text": "Paraíba", "value": "PB" },
  { "text": "Paraná", "value": "PR" },
  { "text": "Pernambuco", "value": "PE" },
  { "text": "Piauí", "value": "PI" },
  { "text": "Rio de Janeiro", "value": "RJ" },
  { "text": "Rio Grande do Norte", "value": "RN" },
  { "text": "Rio Grande do Sul", "value": "RS" },
  { "text": "Rondônia", "value": "RO" },
  { "text": "Roraima", "value": "RR" },
  { "text": "Santa Catarina", "value": "SC" },
  { "text": "São Paulo", "value": "SP" },
  { "text": "Sergipe", "value": "SE" },
  { "text": "Tocantins", "value": "TO" }
]

export const SignUp = () => {
  return (
    <Theme>
      <Styles />
      <Container xxx={6} xxl={6} xl={6} lg={6} md={8} sm={12} style={{ margin: '80px 0' }}>
        <Row justify="center">
          <Col lg={6} md={8} sm={12}>
            <Card>
              <Typography variant="h1" component="h1" >Freelando</Typography>
              <Row>
                <Col>
                  <Input label="Nome Completo" />
                </Col>
              </Row>
              <Row>
                <Col lg={4} md={4} sm={4}>
                  <DropDown title="Estado" options={states} />
                </Col>
                <Col lg={4} md={4} sm={4}>
                  <Input label="Cidade" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Input label="Email" />
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6}>
                  <Input label="Senha" />
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <Input label="Repita a senha" />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
      
    </Theme>
  );
}
