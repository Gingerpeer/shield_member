// Imports
import { Routes, Route } from 'react-router';
// Components
import Header from './components/Header';
// Pages
import Home from './pages/Home'
// Styles
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
