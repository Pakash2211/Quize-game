
import './App.css';
import { Routes,Route } from 'react-router-dom';
import{Quize} from './pages/quize'
import{Result} from './pages/quizeresult';
import{Dashboard} from './pages/dashboard';
import {Home} from './pages/home';

function App() {
  return (
    <>
    <h1 className='quiz'>Quize Game</h1>
    <div className="App">
       <Routes>
        <Route path={'/'} element={<Home/>}></Route>
         <Route path={'/quize'} element={<Quize/>}></Route>
         <Route path={'/result'} element = {<Result/>}></Route>
         <Route path={'/dashboard'} element = {<Dashboard/>}></Route>
       </Routes>
    </div>
    </>
  );
}

export default App;
