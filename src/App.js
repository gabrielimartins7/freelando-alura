
import { Card } from './components/Card';
import { Input } from './components/Input';
import { Styles } from './components/styles/Styles';
import { Theme } from './components/ThemeProvider/Theme';
import {Typography} from './components/Typography';
function App() {
  return (
    <Theme>
      <Styles />
      <Card>
        <Typography variant="h1" component="h1" >Freelando</Typography>
        <Typography variant="body" component="body" >Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.</Typography>
        <Input label="Nome Completo" />
      </Card>
    </Theme>
  );
}

export default App;
