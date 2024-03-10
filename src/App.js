import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import HomeCard from './pages/HomeCard';
import HomeCardDescription from './pages/HomeCardDescription';
import CardDescriptionIndividual from './pages/CardDescriptionIndividual';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route element={<Home/>} index />
    <Route element={<HomeCardDescription/>} path='/course-details/:course'/>
    <Route element={<CardDescriptionIndividual/>} path='/course-individual-page/:courseDetails'/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
