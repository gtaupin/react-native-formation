import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import WhatEverScreen from './src/screens/WhatEverScreen';
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()
import AppLayout from './AppLayout';
import Offline from "./src/components/Offline";

const App = () => {
    // <LoginScreen title='SpaceCraft'/>
    return (
        <QueryClientProvider client={queryClient}>
            <AppLayout title="Starships">
                <WhatEverScreen />
                <Offline></Offline>
            </AppLayout>
        </QueryClientProvider>
    );
};

export default App;