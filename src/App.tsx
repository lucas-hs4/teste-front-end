import { Header } from './components/Header/Header';
import { HeroBanner } from './components/HeroBanner/HeroBanner';
import { Categories } from './components/Categories/Categories';

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <Categories />
      </main>
    </>
  );
}

export default App;