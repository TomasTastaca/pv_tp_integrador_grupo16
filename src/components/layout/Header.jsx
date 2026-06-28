import { AppBar, Box, Button, Toolbar, Typography, Avatar } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout'
import { useNavigate } from "react-router-dom";
import { useAdmin } from "../../context/AdminContext";

const Header = () => {
  const { admin, logout } = useAdmin();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!admin) {
    return null;
  }

  return (
    <AppBar position="static"
    sx={{
      backgroundColor:"#1976d2", 
      boxShadow: "0 2px 4px rgba(0,0,0,0.08)",
      borderBottom: "1px solid rgba(255, 255, 255, 0.2)"
    }}>
      <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 4 } }}>
        <Typography variant="h5" component="h1" sx={{ fontFamily: "'Inter', 'Segoe UI', sans-serif",
    fontWeight: 600,
    fontSize: { xs: "1.2rem", md: "1.45rem" }, 
    color: "#ffffff",
    letterSpacing: "-0.3px" }}>

          Panel de Control de Clientes
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Avatar sx={{ 
        width: 32, 
        height: 32, 
        backgroundColor: "#73c9d8", 
        color: "#ffffff",
        fontSize: "0.9rem",
        fontWeight: 600,
        border: "1px solid rgba(255, 255, 255, 0.4)",
        textTransform: "uppercase"
      }}
    >
      {admin.nombre.charAt(0)}
          </Avatar>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <Typography 
        variant="body2" 
        sx={{ 
          color: "#ffffff", 
          fontWeight: 600, 
          textTransform: "capitalize",
          lineHeight: 1.2
        }}
      >
        {admin.nombre}
      </Typography>
      <Typography 
        variant="caption" 
        sx={{ 
          color: "rgba(255, 255, 255, 0.7)", 
          fontWeight: 500, 
          textTransform: "uppercase",
          fontSize: "0.7rem",
          letterSpacing: "0.5px"
        }}
      >
        {admin.sector}
      </Typography>
        </Box>
      </Box>

          <Button variant="text" onClick={handleLogout}
          startIcon={<LogoutIcon sx={{ fontSize: "1.1rem", opacity: 0.8 }} />}
          sx={{ 
              color: "rgba(255, 255, 255, 0.85)", 
              textTransform: "none",
              fontWeight: 600,
              fontSize: "0.85rem",
             px: 2,
             py: 0.6,
            borderRadius: "20px", // Formato píldora, igual que las plataformas SaaS modernas
            transition: "all 0.2s ease-in-out",
    
            "&:hover": {
      color: "#ffffff",
      backgroundColor: "rgba(255, 23, 23, 0.15)", // Un rojo translúcido sutil que indica "acción de salida"
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
              }
            }}
          >
            Cerrar sesión
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;