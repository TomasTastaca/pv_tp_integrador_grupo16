import { Box, Typography } from "@mui/material";
import "../../css/Footer.css";

const Footer = () => {
  return (
    <Box component="footer" className="footer">
      <Typography variant="body2" className="footer__text">
        2026 Sistema de Gestión de Clientes - Grupo 16
      </Typography>
    </Box>
  );
};

export default Footer;