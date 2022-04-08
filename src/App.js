import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Todos from './pages/Todos';
import Photos from './pages/Photos';
import Todo from './components/Todo';

const App = () => {
  return (
    <div>
      <ul>
        <li><Link to='/'>home</Link></li>
        <li><Link to='/todos'>todos</Link></li>
        <li><Link to='/photos'>photos</Link></li>
      </ul>
      <Routes>
        <Route path='/todos/:id' element={<Todo/>}/>
        <Route path='/todos' element={<Todos/>} />
        <Route path='/photos' element={<Photos/>} />
      </Routes>
    </div>
  );
}

export default App;
