import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ContactMe from "../pages/ContactMe";
import Success from "../pages/Success";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import ProjectPlanner from "../pages/ProjectPlanner";
import ProjectsPage from "../pages/ProjectsPage";
import Error from "../pages/Error";

function ProtectedRoute({ sent, children }) {
  if (sent) return children;
  else return <Navigate to={"/"} />;
}

function Routers() {
  const [sent, setSent] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<Home setSent={setSent} />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/contact" element={<ContactMe setSent={setSent} />} />
      <Route
        path="/project-planner"
        element={<ProjectPlanner setSent={setSent} />}
      />
      <Route
        path="/success"
        element={
          <ProtectedRoute sent={sent}>
            <Success />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default Routers;
