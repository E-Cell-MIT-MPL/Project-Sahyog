import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartupStage from './components/StartupStage';
import BusinessClinic from './components/BusinessClinic';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartupStage />} />
        <Route path="/business-clinic" element={<BusinessClinic />} />
      </Routes>
    </Router>
  );
}

export default App;