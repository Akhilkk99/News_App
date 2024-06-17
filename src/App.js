import Main from './Components/Main/Main';
import Login from './Components/Login/Login';
import './index.css';

import { Route, Routes } from 'react-router-dom';
import NewsDetails from './Components/NewsDetails/NewsDetails';

function App() {
  return (
    <>
    <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Main/>}/>
        <Route path='/details' element={<NewsDetails/>}/>

    </Routes>
    </>
  );
}

export default App;
