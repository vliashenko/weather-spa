import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import store from './stores/store';
import { DetailedWeatherPage, HomePage } from './pages';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:city" element={<DetailedWeatherPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
