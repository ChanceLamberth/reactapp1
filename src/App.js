import './App.css';
import Tabs from './components/tabs';
import HomePage from './pages/homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/contentPage.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navigation from './components/Navbar';
import Error from './components/Error';
import LoginPage from './components/login';

// Information on how to deploy app:
// add it to git repo
// npm run deploy -- adds it to webpage
// https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f


function App() {
  return (
    <main>
      <Navigation/>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/error" element={<Error/>} />
          <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </main>
  );
}

export default App;