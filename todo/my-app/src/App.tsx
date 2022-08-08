import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {Todo__list} from './todo-list/todo'
import { Redaction } from './redaction/redaction';

function App() {
  return (
    <div className="todo">
      {/* //создаем компоненту с списком задач */}
      <Todo__list/>
      {/* //создаем компоненту с редактированием */}
<Redaction/>
<div className="todo__redaction">

</div>
    </div>
  );
}

export default App;
