import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
        px: 1,
        py: 0.5,
        borderBottom: "1px solid #ffffff",
        backgroundColor: "#2ab2db",
        color: "#ffffffec",
    
      }}
    >
      <Button
        component={Link}
        to="/dashboard"
        variant="text"
        sx={{ color: "#ffffff", fontSize: "1rem", 
            bottom: "2px",
            //backgroundColor: "#8edbf3",
            ":hover": {
                backgroundColor: "#31caf8"
            }
         }}
      >
        Inicio
      </Button>

      <Button
        component={Link}
        to="/clientes"
        variant="text"
        sx={{ color: "#ffffff" , fontFamily: "Arial, sans-serif", fontSize: "1rem", 
            bottom: "2px",
            ":hover": {
                backgroundColor: "#31caf8"
            }
         }}
      >
        Clientes
      </Button>
    </Box>
  );
};

export default Nav;