import React from 'react';
import logo from './logo.svg';
import './null.css';
import './App.scss';
import {Todo__list} from './components/todo-list/todo'
import { Redaction } from './components/redaction/redaction';

function App() {
  return (


    <div className="todo">
      {/* //создаем компоненту с списком задач */}
      <Todo__list  />
      {/* //разделитель */}
      <div className="line"></div>
      {/* //создаем компоненту с редактированием */}
<Redaction/>
<div className="todo__redaction">

</div>
    </div>

  );
}

export default App;
