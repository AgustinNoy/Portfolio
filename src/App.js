import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Section from './components/Section';

function App() {
  return (
    <div className="App" id='Inicio'>
      <div className="Separador" id='InformacionPersonal'>
        <p>.</p>
      </div>
      <Header />
      <Section />
      <Footer />
    </div>
  );
}

export default App;