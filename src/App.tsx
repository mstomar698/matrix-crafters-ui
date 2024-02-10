import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './AllRoutes';

function App() {
  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;