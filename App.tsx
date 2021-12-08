import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { NetworkProvider } from "react-native-offline";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

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
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#4e07db",
    },
  };

  return (
    <QueryClientProvider client={queryClient}>
      <NetworkProvider>
        <PaperProvider theme={theme}>
          <Navigator />
        </PaperProvider>
        <Offline name="Status : " />
      </NetworkProvider>
    </QueryClientProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
