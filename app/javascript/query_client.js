import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // Data is stale after 5 minutes
      refetchOnWindowFocus: true, // Refetch on window focus
      retry: 3, // Retry failed queries 3 times
    },
  },
});

export default queryClient;