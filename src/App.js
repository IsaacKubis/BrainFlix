
import './App.scss';
import { BrowserRouter, Switch, Route, Link, Routes  } from 'react-router-dom';
import HomePage from './components/homepage/homepage';
import UploadPage from './components/uploadpage/uploadpage';
import Header from './components/header/header';
function App() {


return (
  <div>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<HomePage />} />
        <Route path='/upload' element={<UploadPage />} /> 
      </Routes>
    </BrowserRouter>
  </div>
  );
}


export default App;
