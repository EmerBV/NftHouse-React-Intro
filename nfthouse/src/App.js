import './globals.css';

import Login from './components/login/Login';
import Header from './components/header/Header';

function App() {
  const container = true;
  return (
    <div className={('App', { container })}>
      <Header />
      <Login />
    </div>
  );
}

export default App;
