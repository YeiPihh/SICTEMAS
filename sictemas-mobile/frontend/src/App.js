import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';
import IndexComponent from './components/Indexcomponent/IndexComponent.jsx';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<IndexComponent />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;