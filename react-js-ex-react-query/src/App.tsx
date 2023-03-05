import { useEffect } from 'react';
import './App.css';
import Article from './Article';
import { useStore } from './store';
import Button from '@mui/material/Button';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Article {
  id: number;
  title: string;
  description: string;
}

const apiClient = axios.create({
  baseURL: 'https://api.realworld.io/api',
  headers: {
    'Content-type': 'application/json',
  },
});

const fetchArticles = async () => {
  const response = await apiClient.get<Article>(`/articles`);
  return response.data;
};

function App() {
  const { count, setCount } = useStore();

  const { isLoading, error, data } = useQuery<Article[]>(['articles'], fetchArticles, {
    keepPreviousData: true,
  });

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

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching feeds</div>;

  return (
    <div className="App">
      <div className="card">
        <Button variant="contained" onClick={() => setCount(count + 1)}>
          count is {count}
        </Button>
        <Article title="Trip Planning" content="Lorem ipsum dolor sit amet" />
        <Article title="Trip Planning2" content="Lorem ipsum dolor sit amet2" />
      </div>
      <div>
        {data &&
          data.articles?.map((article: Article) => (
            <Article title={article.title} content={article.description} />
          ))}
        {/* <button onClick={() => setPage((old) => old + 1)}>Next Page</button> */}
      </div>
    </div>
  );
}

export default App;
