import { Link } from "react-router-dom";
import { Col, Row } from "react-grid-system";

import { ButtonForm } from "../../components/ButtonForm";
import { DropDown } from "../../components/DropDown/DropDown";
import { Input } from "../../components/Input";
import { Typography } from "../../components/Typography";

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

export const PersonalData = () => {
  return (
    <div>
      <Typography variant="h1" component="h1">Crie seu cadastro</Typography>
      <Typography variant="body" component="body" >Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.</Typography>
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
      <Row>
        <Col lg={6} md={6} sm={6}>
          <Link to='/Interests'>
            <ButtonForm variant='secundary'>
              Anterios
            </ButtonForm>
          </Link>
        </Col>
        <Col lg={6} md={6} sm={6}>
          <div style={{ textAlign: 'right' }}>
            <Link to='/completed'>
              <ButtonForm>
                Próxima
              </ButtonForm>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  )
}