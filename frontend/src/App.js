import './App.css';
import UserForm from './components/UserForm';
import Home from './components/Home';
import Users from './components/Users';
import Delete from './components/Delete';
import React from "react";

import {
  BrowserRouter,
    Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Routes>
          <Route index element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/register" element={<UserForm />} />
          <Route path="/delete" element={<Delete />} />
      </Routes>
  );
}

export default App;
