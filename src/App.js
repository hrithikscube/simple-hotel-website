import './App.css';
import Header from './components/Header/header';
import Navbar from './components/navbar/navbar';
import Figure from './components/section/figure';
import Roomsandrate from './components/grids/Roomsandrate';
import Section from './components/sections/section';
import Footer from './components/footer/footer';



function App() {
  return (
    <div className="App">
       <Header/>
      <div>
        <Navbar/>
        </div>
        <div>
          <Figure/>
        </div>
        <div>
          <Roomsandrate/>
        </div>
       <div>
          <Section/>
        </div>
        <div>
          <Footer/>
        </div> 
    </div>
  );
}

export default App;
