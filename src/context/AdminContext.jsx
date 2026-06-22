import { createContext, useContext, useEffect, useState } from "react";

const AdminContext = createContext();

const obtenerAdminInicial = () => {
  const adminGuardado = localStorage.getItem("admin");

  if (adminGuardado) {
    return JSON.parse(adminGuardado);
  }

  return null;
};

export const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(obtenerAdminInicial);

  const login = (datosAdmin) => {
    setAdmin(datosAdmin);
  };

  const logout = () => {
    setAdmin(null);
  };
  useEffect(() => {
    if (admin) {
      localStorage.setItem("admin", JSON.stringify(admin));
    } else {
      localStorage.removeItem("admin");
    }
  }, [admin]);

  return (
    <AdminContext.Provider value={{ admin, login, logout }}>
      {children}
    </AdminContext.Provider>
  );
};
export const useAdmin = () => {
  return useContext(AdminContext);
};
