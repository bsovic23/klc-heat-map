import React from 'react';

// Pages
import Map from './pages/Map';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <section class='app'>
        <header>
          <Header />
        </header>
        <div>
          < Map />
        </div>
        <footer>
          <Footer />
        </footer>
    </section>
  );
}

export default App;
