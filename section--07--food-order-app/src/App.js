import { GlobalStyles } from './components/';
import { Header, Meals } from './layouts/';

function App() {
  return (
    <GlobalStyles>
      <Header />
      <main>
        <Meals />
      </main>
    </GlobalStyles>
  );
}

export default App;
