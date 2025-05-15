import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Tables from "./pages/Tables";
import Billing from "./pages/Billing"; // ✅ Billing page
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn"; 
import Profile from "./pages/Profile";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Routes with layout */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="tables" element={<Tables />} />
            <Route path="billing" element={<Billing />} />
            <Route path="/profile" element={<Profile />} />
          </Route>

          {/* Route without layout */}
          
          <Route path="/signup" element={<Signup />} /> {/* ✅ SignUp page route */}
          <Route path="/signIn" element={<SignIn />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
