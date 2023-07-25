import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import TechnicianList from "./TechnicianList"
import TechnicianForm from "./TechnicianForm"

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="technicians">
            <Route index element={<TechnicianList />} />
          </Route>
          <Route path="technicians/create">
            <Route index element={<TechnicianForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
