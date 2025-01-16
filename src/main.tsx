import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/styles.scss';
import { Provider } from 'react-redux';
import { persistor, store } from './store/store.tsx';
import { PersistGate } from 'redux-persist/integration/react';
import Router from './router.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Создание экземпляра QueryClient
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<div>Loading</div>} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter basename='/market/'>
            <Router />
          </BrowserRouter>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
