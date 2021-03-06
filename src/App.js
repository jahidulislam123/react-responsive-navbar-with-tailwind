import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/navbar/Navbar';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <h1 className="text-6xl font-bold underline">
        Hello world!
      </h1>
      <Pricing></Pricing>

    </div>
  );
}

export default App;
