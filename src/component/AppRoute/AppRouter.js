import { Box, Toolbar } from "@mui/material";
import React, { useState, Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../layouts/Navbar/Navbar";
import Dashboard from "../pages/Dashboard";
import Enquires from "../pages/Enquires";
import PaymentsTim from "../pages/Payment";
import Profile from "../pages/Profile/Profile";

function AppRouter() {
  const [current, setCurrent] = useState(false);
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Navbar />
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Toolbar />

          <Routes>
            <Route path="/" element={<Navigate to="/profile" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/enquires" element={<Enquires />} />
            <Route path="/pay" element={<PaymentsTim />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Box>
      </Box>
    </div>
  );
}

export default AppRouter;
