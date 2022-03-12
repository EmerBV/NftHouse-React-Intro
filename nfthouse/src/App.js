import './index.css';

/* import Login from './components/login/Login'; */
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';

function App() {
  
  return (
    <div className='App'>
      <Header />
      {/* <Login /> */}
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
