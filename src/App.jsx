import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { Dashboard } from './pages/DashBoard';
import { Login } from './pages/Login';
import { SignUp } from "./pages/Signup";
import { CreateGlobalStyle } from './styles';


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="*" element={<><p>Page not found! Error 404</p> <Link to="/"><span>Retornar</span></Link></>}/>
      </Routes>
    </Router>
    <CreateGlobalStyle />
    </>
  );
}

export {App};
