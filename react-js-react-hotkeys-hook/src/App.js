import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

function MyComponent() {
  const [count, setCount] = useState(0);

  useHotkeys('a', () => setCount(count => count + 1));

  return (
    <span>Pressed 'a' key {count} times.</span>
  );
}

function App() {
  return (
    <div className="App">
      <MyComponent />
    </div>
  );
}

export default App;
