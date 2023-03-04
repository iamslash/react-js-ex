import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Article from './Article';
import { useStore } from './store';

interface ArticleProps {
  title: string;
  content: string;
}

function App() {
  const { count, setCount } = useStore();

  useEffect(() => {
    console.log('mounted');
  }, []);

  useEffect(() => {
    console.log('updated');
  });

  useEffect(() => {
    return () => {
      console.log('unmount');
    };
  }, []);

  return (
    <div className="App">
      <div className="card">
        <button onClick={() => setCount(count + 1)}>count is {count}</button>
        <Article title="Trip Planning" content="Lorem ipsum dolor sit amet" />
        <Article title="Trip Planning2" content="Lorem ipsum dolor sit amet2" />
      </div>
    </div>
  );
}

export default App;
