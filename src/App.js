// Imports
import { Routes, Route } from 'react-router';
// Components
import Header from './components/Header';
// Pages
import Home from './pages/Home'
import No from './pages/No';
import Information from './pages/Information';
// Styles
import './App.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/no' element={<No />} />
        <Route path='/instructions' element={<Information />} />
        <Route path='/1' />
        <Route path='/2' />
        <Route path='/3' />
        <Route path='/4' />
        <Route path='/5' />
      </Routes>
    </div>
  );
}

export default App;
