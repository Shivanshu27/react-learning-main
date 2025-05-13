import React from 'react';
import { useQuery, useMutation, QueryClient, QueryClientProvider } from 'react-query';
import axios from 'axios';

// Initialize a QueryClient
const queryClient = new QueryClient();

function fetchUser(userId) {
  return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
}

function updateUser(userId, data) {
  return axios.put(`https://jsonplaceholder.typicode.com/users/${userId}`, data);
}

function User({ userId }) {
  // useQuery to fetch user data
  const { data, error, isLoading } = useQuery(['user', userId], () => fetchUser(userId), {
    staleTime: 60000, // 1 minute
    cacheTime: 300000, // 5 minutes
  });

  // useMutation to update user data
  const mutation = useMutation((newData) => updateUser(userId, newData), {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(['user', userId]);
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>{data.data.name}</h1>
      <button onClick={() => mutation.mutate({ name: 'New Name' })}>Update Name</button>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <User userId={1} />
    </QueryClientProvider>
  );
}

export default App;

/*
Explanation of React Query:
1. React Query is a library for fetching, caching, and updating server data in React applications.
2. It simplifies data fetching and state management by providing hooks like `useQuery` and `useMutation`.

Stale Time:
1. `staleTime` is the duration for which the data is considered fresh.
2. During this time, React Query will not refetch the data even if the component re-renders.
3. After the stale time expires, the data is considered stale, and React Query may refetch it on the next query.

Cache Time:
1. `cacheTime` is the duration for which the data remains in the cache after it becomes stale.
2. If the data is not used within this time, it is garbage collected.
3. This helps in managing memory and ensuring that the cache does not grow indefinitely.

useQuery:
1. `useQuery` is used to fetch data from a server.
2. It takes a query key, a function to fetch the data, and an options object.
3. It returns an object containing the data, error, and loading state.

useMutation:
1. `useMutation` is used to create or update data on the server.
2. It takes a function to perform the mutation and an options object.
3. It returns an object containing the mutation function and the mutation state.

Differences between useQuery and useMutation:
1. `useQuery` is used for fetching data, while `useMutation` is used for creating or updating data.
2. `useQuery` automatically caches and manages the data, while `useMutation` requires manual cache invalidation.
3. `useQuery` is typically used for GET requests, while `useMutation` is used for POST, PUT, PATCH, or DELETE requests.
*/
