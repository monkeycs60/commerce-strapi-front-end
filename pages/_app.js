import Nav from "@/components/Nav";
import "@/styles/globals.css";
import { Provider, createClient } from "urql";
import { Provider as ReduxProvider } from "react-redux";
import { UserProvider as AuthProvider } from "@auth0/nextjs-auth0/client";
import { Reduxstore } from "@/store/store";
import { store, persistor } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";
import OpacityWrapper from "@/components/OpacityWrapper";

const client = createClient({
  url: process.env.NEXT_PUBLIC_BACKEND_API,
});

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Provider value={client}>
            <Nav />
            <OpacityWrapper>
              <Component {...pageProps} />
            </OpacityWrapper>
          </Provider>
        </PersistGate>
      </ReduxProvider>
    </AuthProvider>
  );
}
