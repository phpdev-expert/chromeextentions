import React from 'react';
import './App.css';
import theme from './theme/theme';
import SecureSharePage from './pages/SecureSharePage';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from './components/auth';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ChakraProvider resetCSS theme={theme}>
           <SecureSharePage />
        </ChakraProvider>
      </AuthProvider>
     </QueryClientProvider>
  );
}

export default App;
