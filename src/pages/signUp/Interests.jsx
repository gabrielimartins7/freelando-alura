import { Link, useNavigate } from "react-router-dom";
import { Col, Row } from "react-grid-system";

import { useSignUpUserContext } from "../../context/SignUpUser";

import { ButtonForm } from "../../components/ButtonForm";
import GrupRadio from "../../components/Radio/GrupRadio";
import { Typography } from "../../components/Typography";
import { useEffect } from "react";

const options = [
  {
    valor: 1,
    label: 'TI e Programação',
    },
    {
        valor: 2,
        label: 'Design e Multimídia',
    },
    {
        valor: 3,
        label: 'Revisão',
    },
    {
        valor: 4,
        label: 'Tradução',
    },
    {
        valor: 5,
        label: 'Transcrição',
    },
    {
        valor: 6,
        label: 'Marketing',
    },
]

export const Interests = () => {
  const {
    user,
    setInterests,
    selectInterests } = useSignUpUserContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (!selectInterests()) {
      navigate('goBack')
    }
  }, [navigate, selectInterests]);

    return(
        <div style={{ textAlign: 'center'}}>
            <Typography variant="h1" component="h1">Crie seu cadastro</Typography>
            <Typography variant="h3" component="h2">Qual a área de interesse?</Typography>
            <GrupRadio 
              opcoes={options}
              valor={user.interests}
              onChange={setInterests}
            />
            <Row>
                <Col lg={6} md={6} sm={6}>
                  <Link to='..'>
                    <ButtonForm variant='secundary'>
                      Anterios
                    </ButtonForm>
                  </Link>
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