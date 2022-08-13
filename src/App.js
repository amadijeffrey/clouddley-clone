import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/home';
import Signup from './components/signup'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/auth/signup' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
