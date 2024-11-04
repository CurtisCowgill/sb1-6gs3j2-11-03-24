import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import Layout from './components/Layout';
import ErrorFallback from './components/ErrorFallback';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Schedule from './pages/Schedule';
import Customers from './pages/Customers';
import CustomerDetail from './pages/CustomerDetail';
import Crews from './pages/Crews';
import CrewDetail from './pages/CrewDetail';
import Employees from './pages/Employees';
import EmployeeDetail from './pages/EmployeeDetail';
import Vendors from './pages/Vendors';
import VendorDetail from './pages/VendorDetail';
import Locations from './pages/Locations';
import Safety from './pages/Safety';
import SafetyResources from './pages/safety/SafetyResources';
import ToolboxTalks from './pages/safety/ToolboxTalks';
import Incidents from './pages/safety/Incidents';
import Certifications from './pages/safety/Certifications';
import Fleet from './pages/Fleet';
import Vehicles from './pages/fleet/Vehicles';
import Equipment from './pages/fleet/Equipment';
import VehicleDetail from './pages/fleet/VehicleDetail';
import EquipmentDetail from './pages/fleet/EquipmentDetail';

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/customers/:id" element={<CustomerDetail />} />
            <Route path="/crews" element={<Crews />} />
            <Route path="/crews/:id" element={<CrewDetail />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/employees/:id" element={<EmployeeDetail />} />
            <Route path="/vendors" element={<Vendors />} />
            <Route path="/vendors/:id" element={<VendorDetail />} />
            <Route path="/locations/*" element={<Locations />} />
            
            {/* Safety Routes */}
            <Route path="/safety" element={<Safety />} />
            <Route path="/safety/resources" element={<SafetyResources />} />
            <Route path="/safety/toolbox-talks" element={<ToolboxTalks />} />
            <Route path="/safety/incidents" element={<Incidents />} />
            <Route path="/safety/certifications" element={<Certifications />} />

            {/* Fleet Routes */}
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/fleet/vehicles" element={<Vehicles />} />
            <Route path="/fleet/equipment" element={<Equipment />} />
            <Route path="/fleet/vehicles/:id" element={<VehicleDetail />} />
            <Route path="/fleet/equipment/:id" element={<EquipmentDetail />} />
          </Routes>
        </Layout>
      </Router>
    </ErrorBoundary>
  );
}

export default App;