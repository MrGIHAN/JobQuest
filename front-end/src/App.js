import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/home';
import Login from './Pages/LoginPage';
import SignUp from './Pages/SignUpPage';
import UserDashboard from './Pages/User/UserDashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  return (
    <Router>
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/User' element={<UserDashboard />} />
       </Routes>
    </Router>
  );
}

export default App;
