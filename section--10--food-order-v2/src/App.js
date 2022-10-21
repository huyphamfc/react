import { GlobalStyles } from './components';
import { Header, Meals, CartModal } from './layouts';

function App() {
  return (
    <GlobalStyles>
      <CartModal />
      <Header />
      <main>
        <Meals />
      </main>
    </GlobalStyles>
  );
}

export default App;
