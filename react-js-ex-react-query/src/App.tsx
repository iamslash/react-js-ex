import { useEffect } from 'react';
import './App.css';
import Article from './Article';
import { useStore } from './store';
import Button from '@mui/material/Button';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools/build/lib/devtools';
import axios from 'axios';

interface ArticleProps {
  title: string;
  content: string;
}

interface Profile {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}

const apiClient = axios.create({
  baseURL: 'https://api.realworld.io/api',
  headers: {
    'Content-type': 'application/json',
  },
});

const findById = async (id: any) => {
  const response = await apiClient.get<Profile>(`/profiles/${id}`);
  return response.data;
};

function App() {
  const { count, setCount } = useStore();

  const { isLoading: isLoadingProfile, refetch: getProfileById } = useQuery<Profile, Error>(
    'query-profile-by-id',
    async () => {
      return await findById(1);
    },
    {
      enabled: false,
      retry: 1,
      onSuccess: (res) => {
        console.log(res);
      },
      onError: (err: any) => {
        console.error(err.response?.data || err);
      },
    },
  );

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
        <Button variant="contained" onClick={() => setCount(count + 1)}>
          count is {count}
        </Button>
        <Button variant="contained" onClick={() => getProfileById()}>
          axios
        </Button>
        <Article title="Trip Planning" content="Lorem ipsum dolor sit amet" />
        <Article title="Trip Planning2" content="Lorem ipsum dolor sit amet2" />
      </div>
    </div>
  );
}

export default App;
