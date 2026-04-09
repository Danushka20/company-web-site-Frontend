import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes.tsx';
import './App.css';

/**
 * APP ENTRY POINT
 * We wrap the whole app in <Router> to enable navigation.
 * All route logic is handled inside <AppRoutes />
 */
function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
