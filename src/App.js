
import { Col, Container, Row } from 'react-grid-system';
import { ButtonForm } from './components/ButtonForm';
import { Card } from './components/Card';
import { Input } from './components/Input';
import { Styles } from './components/styles/Styles';
import { Theme } from './components/ThemeProvider/Theme';
import { Typography } from './components/Typography';
function App() {
  return (
    <Theme>
      <Styles />
      <Container>
        <Row justify='center'>
          <Col lg={6} md={8} sm={12}>
            <Card>
              <Typography variant="h1" component="h1" >Freelando</Typography>
              <Typography variant="body" component="body" >Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.</Typography>
              <Row>
                <Col>
                  <Input label="Nome Completo" />
                </Col>
              </Row>
              <Row>
                <Col lg={4} md={4} sm={4}>
                  <Input label="Estado" />
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
                  <ButtonForm variant='secundary'>
                    Anterios
                  </ButtonForm>
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <div style={{ textAlign: 'right' }}>
                    <ButtonForm>
                      Próxima
                    </ButtonForm>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </Theme>
  );
}

export default App;
