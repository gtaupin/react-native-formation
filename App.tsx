import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { NetworkProvider } from "react-native-offline";

import { Navigator } from "./src/navigation/Navigator";
const queryClient = new QueryClient();
import Offline from "./src/components/Offline";
// import AppLayout from "./AppLayout";

const App = () => {
  // <LoginScreen title='SpaceCraft'/>
  /*
    <AppLayout title="Starships">
        <Offline name="hello" />
      </AppLayout>
     */
  return (
    <QueryClientProvider client={queryClient}>
      <NetworkProvider>
        <Navigator />
        <Offline name="Status : " />
      </NetworkProvider>
    </QueryClientProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
