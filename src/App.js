import logo from './logo.svg';
import './App.css';
import HomeResume from './pages/HomeResume';
import { Route, Routes } from 'react-router-dom';
import Detail from './pages/Detail';
import Create from './component/ResumeCreator'
import ResumeList from './pages/ResumeList';
import EditResume from './component/ResumeEditor'

function App() {
  return (
    <div className='App'>
      <Routes>
      <Route path='/' element={<ResumeList />} />
        <Route path='/homeResume/:id' element={<HomeResume />} />
        <Route path='/employee/:id' element={<Detail />} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit/:id' element={<EditResume />} />

      </Routes>
    </div>
  );
}

export default App;
