import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import FileUpload from './components/FileUpload';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/file-upload" element={<FileUpload />} />
      </Routes>
    </Router>
  );
}

export default App;
