import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

import { Theme } from './components/ThemeProvider/Theme';
import { Styles } from './components/styles/Styles';

function App () {
  return (
    <Theme>
      <Styles />
      <RouterProvider router={router} />
    </Theme>
  )
} 

export default App