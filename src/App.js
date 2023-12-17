
import './App.scss';
import { BrowserRouter, Switch, Route, Link, Routes  } from 'react-router-dom';
import HomePage from './components/homepage/homepage';

function App() {


return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* 👈 Renders at /app/ */}
        <Route path="/:id" element={<HomePage />} /> {/* 👈 Renders at /app/ */}
      </Routes>
    </BrowserRouter>
  );
}


export default App;
