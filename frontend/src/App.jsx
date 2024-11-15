import React from 'react';
import FormPost from './pages/FormPost';
import Dashboard from './pages/Dashboard';
import EditForm from './pages/EditForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import './App.css'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/newForm" element={<FormPost />} />
          <Route path="/editForm" element={<EditForm />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;