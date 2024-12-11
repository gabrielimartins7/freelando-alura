import { Link } from "react-router-dom";
import { Col, Row } from "react-grid-system";

import { ButtonForm } from "../../components/ButtonForm";
import { Typography } from "../../components/Typography";

export const PersonalData = () => {
    return(
        <div style={{ textAlign: 'center'}}>
            <Typography variant="h1" component="h1">Crie seu cadastro</Typography>
            <Typography variant="body" component="body" >Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.</Typography>
            <Row>
                <Col lg={6} md={6} sm={6}>
                  <ButtonForm variant='secundary'>
                    Anterios
                  </ButtonForm>
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <div style={{ textAlign: 'right' }}>
                    <Link to='/personal-data'>
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