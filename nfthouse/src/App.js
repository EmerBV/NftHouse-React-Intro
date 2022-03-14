import './index.css'

/* import Login from './components/login/Login' */
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Collection from './components/collection/Collection'


function App() {
  
  return (
    <div className='App m-0 min-w-full min-h-full block'>
      <Header />
      {/* <Login /> */}
      {/* <Hero /> */}
      <Collection />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
