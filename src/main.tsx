import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Provider } from 'react-redux';
import store from './stores/store.ts';
import { DetailedWeatherPage } from './pages';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/:city" element={<DetailedWeatherPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
