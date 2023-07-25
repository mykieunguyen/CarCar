import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import TechnicianList from "./TechnicianList"
import TechnicianForm from "./TechnicianForm"
import ServiceForm from "./ServiceForm"
import ServiceList from "./ServiceList"
import VinList from "./VinForm"
import ManufacturerList from "./ManufacturerList"
import ManufacturerForm from "./ManufacturerForm"
import ServiceHistoryList from "./ServiceHistory"
import VehicleList from "./VehicleList"


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
          <Route path="vins">
            <Route index element={<VinList />} />
          </Route>
          <Route path="models">
            <Route index element={<VehicleList />} />
          </Route>
          <Route path="manufacturers">
            <Route index element={<ManufacturerList />} />
          </Route>
          <Route path="manufacturers/create">
            <Route index element={<ManufacturerForm />} />
          </Route>
          <Route path="technicians/create">
            <Route index element={<TechnicianForm />} />
          </Route>
          <Route path="appointments/create">
            <Route index element={<ServiceForm />} />
          </Route>
          <Route path="appointments">
            <Route index element={<ServiceList />} />
          </Route>
          <Route path="appointments/history">
            <Route index element={<ServiceHistoryList />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
