import './App.css';
import { Routes, Route } from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";
import SignInArea from './components/sign-in';
import SignUpArea from './components/sign-up';

function App() {
  return (
    <div className="App-header">
        <Router>
          <Routes>
            <Route path='/' element={<SignInArea />} />
            <Route path='/sign-up' element={<SignUpArea />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
