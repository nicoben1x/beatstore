import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Banner from './Banner';
import Beats from './Beats';
import Contact from './Contact';
import About from './About';

function App() {
  return (
    <>

      <div className="App">
        <Navbar />

        <Banner />
        <Beats />
        <Contact/>
        <About/>
      </div>

    </>
  );
}



export default App;
