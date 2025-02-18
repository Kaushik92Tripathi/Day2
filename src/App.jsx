import "./App.css";
import { useState } from 'react';
import NavButton from './components/NavButton';
import AuthToggle from "./components/AuthToggle";
import TodoList from "./components/TodoList";
import Counter2 from "./components/Counter2";
import Counter1 from "./components/Counter1";
import Parent from "./components/Parent";

const components = {
  counter1: Counter1,
  counter2: Counter2,
  parent: Parent,
  auth: AuthToggle,
  todo: TodoList
};

function App() {
  const [current, setCurrent] = useState('counter1');
  const Component = components[current];

  return (
    <div>
      <nav style={{
        padding: '20px',
        backgroundColor: '#f8fafc',
        marginBottom: '20px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0
      }}>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <NavButton name="counter1" current={current} onClick={() => setCurrent('counter1')}>Counter 1</NavButton>
          <NavButton name="counter2" current={current} onClick={() => setCurrent('counter2')}>Counter 2</NavButton>
          <NavButton name="parent" current={current} onClick={() => setCurrent('parent')}>Parent</NavButton>
          <NavButton name="auth" current={current} onClick={() => setCurrent('auth')}>Auth Toggle</NavButton>
          <NavButton name="todo" current={current} onClick={() => setCurrent('todo')}>Todo List</NavButton>
        </div>
      </nav>

      <main>
        <Component />
      </main>
    </div>
  );
}

export default App;
