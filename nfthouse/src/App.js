import './index.css';

import Login from './components/login/Login';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  const container = true;
  return (
    <div className={('App', { container })}>
      <Header />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
