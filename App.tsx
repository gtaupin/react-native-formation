import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import WhatEverScreen from './src/screens/WhatEverScreen';
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()

const App = () => {
    // <LoginScreen title='SpaceCraft'/>
    return (
        <QueryClientProvider client={queryClient}>
            <WhatEverScreen />
        </QueryClientProvider>
    );
};

export default App;