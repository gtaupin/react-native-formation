import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Navigator } from "./src/navigation/Navigator";

const queryClient = new QueryClient();
import AppLayout from "./AppLayout";
import Offline from "./src/components/Offline";

const App = () => {
  // <LoginScreen title='SpaceCraft'/>
  return (
    <QueryClientProvider client={queryClient}>
      <Navigator />
    </QueryClientProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
