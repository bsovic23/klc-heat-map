import React from 'react';

// Pages
import Map from './pages/Map';
import ModuleStats from './pages/ModuleStats';
import FyTrends from './pages/FyTrends';

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
            < ModuleStats />
          </div>
          <div>
            < FyTrends />
          </div>
        </section>
        <footer>
          <Footer />
        </footer>
    </section>
  );
}

export default App;
