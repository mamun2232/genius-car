import logo from './logo.svg';
import './App.css';
import Header from './pages/Headar/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import AddCart from './pages/Home/AddCart/AddCart';
import RequireAuth from './pages/Sheard/RequireAuth/RequireAuth';
import ConfromOrder from './pages/Home/ConfromOrder/ConfromOrder';
import TotalOrder from './pages/Home/Home/TotalOder/TotalOrder';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/addCart/:id' element={
          <RequireAuth>
            <AddCart></AddCart>
          </RequireAuth>
        }></Route>
        <Route path='/confromOrder/:id' element={<ConfromOrder></ConfromOrder>}></Route>
        <Route path='/totalOrder' element={<TotalOrder></TotalOrder>}></Route>


      </Routes>
    </div>
  );
}

export default App;
