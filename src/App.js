import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css" 
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import ProductPage from './pages/ProductPage';
import NotFoundPage from './pages/NotFoundPage';
import { Route, Routes } from 'react-router-dom';
import ViewUserProfile from './pages/ViewUserProfile';
import MyNavBar from './components/MyNavBar';

function App() {
  return (
    <>
      <MyNavBar />
      <Routes>
        <Route path='/' index element={<HomePage/>} />
        <Route path='/user' element={<UserPage/>} />
        <Route path='/user/:id' element={<ViewUserProfile/>} /> 
        <Route path='/product' element={<ProductPage/>} />
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
    </>
      
   
  )
}

export default App;
