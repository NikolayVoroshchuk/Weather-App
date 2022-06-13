import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import DetailsPage from './pages/detailsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details" element={<DetailsPage />} />
    </Routes>
  );
}

export default App;
