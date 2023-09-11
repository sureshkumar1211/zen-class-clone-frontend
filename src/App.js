import { BrowserRouter, Routes, Route } from "react-router-dom";
import Provider from "./AuthContext";
import Class from "./Class";

import MainLayout from "./Layout";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import Register from "./Register";
import "./styles.css";
import TaskList from "./Tasks";
import Dashboard from "./Dashboard";

export default function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
          <Route
            element={
              <ProtectedRoute>
                <MainLayout>
                  <Class />
                </MainLayout>
              </ProtectedRoute>
            }
            path="/"
          />
          <Route
            element={
              <ProtectedRoute>
                <MainLayout>
                  <Dashboard />
                </MainLayout>
              </ProtectedRoute>
            }
            path="/dashboard"
          />
          <Route
            element={
              <ProtectedRoute>
                <MainLayout>
                  <TaskList />
                </MainLayout>
              </ProtectedRoute>
            }
            path="/tasks"
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
