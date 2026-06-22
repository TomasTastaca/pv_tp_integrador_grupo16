import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import { AdminProvider } from "./context/AdminContext";
import Header from "./components/layout/Header";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import ListaClientes from "./views/ListaClientes";
import DetalleCliente from "./views/DetalleCliente";

const App = () => {
  return (
    <AdminProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          <Route path="/login" element={<Login />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Header />
                <Container sx={{ marginTop: 4 }}>
                  <Dashboard />
                </Container>
              </ProtectedRoute>
            }
          />

          <Route
            path="/clientes"
            element={
              <ProtectedRoute>
                <Header />
                <Container sx={{ marginTop: 4 }}>
                  <ListaClientes />
                </Container>
              </ProtectedRoute>
            }
          />

          <Route
            path="/clientes/:id"
            element={
              <ProtectedRoute>
                <Header />
                <Container sx={{ marginTop: 4 }}>
                  <DetalleCliente />
                </Container>
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AdminProvider>
  );
};

export default App;