import './App.css';
import CompanyInfo from './components/companyPage';

// Information on how to deploy app:
// add it to git repo
// npm run deploy -- adds it to webpage
// https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f


function App() {
  return (
    <div className="App">
      <CompanyInfo/>
    </div>
  );
}

export default App;