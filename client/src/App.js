import React from 'react';

// Pages
import Map from './pages/Map';
import Trends from './pages/Trends';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <section class='app'>
        <header>
          <Header />
        </header>
        <section class='app-body'>
          <div>
            < Map />
          </div>
          <div>
            < Trends />
          </div>
        </section>
        <footer>
          <Footer />
        </footer>
    </section>
  );
}

export default App;
