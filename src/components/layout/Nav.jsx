import { Box, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';

const Nav = () => {
  const location = useLocation();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
        px: 2,
        py: 0,
        backgroundColor:"#ffffff",
        borderBottom: "1px solid #e2e8f0",
        boxShadow: "0 1px 3px rgba(0,0,0,0.02)"
    
      }}
    >
      <Button
        component={Link}
        to="/dashboard"
        variant="text"
        startIcon={<DashboardIcon sx={{fontSize: "1.1rem"}}/>}
        sx={{ color: location.pathname === "/dashboard" ? "#1976d2" : "#64748b", 
          fontSize: "0.9rem",
          fontWeight: 600,
          textTransform: "none", 
          px: 1,
          py: 1.5,
          borderRadius: "0px",
          borderBottom: location.pathname === "/dashboard" ? "3px solid #1976d2" : "3px solid transparent",
          transition: "all 0.2s ease",
          "&:hover": {
            backgroundColor: "transparent",
            color: "#1967d2"
            }
         }}
      >
        Inicio
      </Button>

      <Button
        component={Link}
        to="/clientes"
        variant="text"
        startIcon={<PeopleIcon sx={{ fontSize: "1.1rem" }} />}
        sx={{ color: location.pathname === "/clientes" ? "#1976d2" : "#64748b", 
          fontSize: "0.9rem",
          fontWeight: 600,
          textTransform: "none",
          px: 1,
          py: 1.5,
          borderRadius: "0px",
          borderBottom: location.pathname === "/clientes" ? "3px solid #1976d2" : "3px solid transparent",
          transition: "all 0.2s ease",
          "&:hover": {
            backgroundColor: "transparent",
            color: "#1976d2"
            }
         }}
      >
        Clientes
      </Button>
    </Box>
  );
};

export default Nav;