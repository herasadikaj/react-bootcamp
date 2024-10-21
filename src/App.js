
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Website from './components/Website';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="*" exact element={<Website />} />
          </Routes>
          </Router>
  );
}

export default App;
