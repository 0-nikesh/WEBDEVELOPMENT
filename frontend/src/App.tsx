import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import Form from './Pages/test';
// import ExampleV3 from './Pages/test';

function App() {
  return (
    
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route path="/test" element={<Form/>} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
