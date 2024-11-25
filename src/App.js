
import { Card } from './components/Card';
import { Styles } from './components/styles/Styles';
import { Theme } from './components/ThemeProvider/Theme';
function App() {
  return (
    <Theme>
      <Styles />
      <Card>
        <h1>Freelando</h1>
      </Card>
    </Theme>
  );
}

export default App;
