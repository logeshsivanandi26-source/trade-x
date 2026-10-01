import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/Reg.js';
import '@fontsource/inter';
import Terms from './components/Terms.js';
import Login from './components/Login.js';
import Dashboard from './components/Dashboard.js';
function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register></Register>}></Route>
          <Route path='/terms&conditions' element={<Terms></Terms>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
