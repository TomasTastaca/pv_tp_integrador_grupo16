import { useState } from "react";
import { Box, Paper, Typography, TextField, Button, Snackbar, Alert } from "@mui/material";

const AltaCliente= ({ onClienteCreado }) => {
  const [nuevoCliente, setNuevoCliente] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    city: "",
  });

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    setNuevoCliente({
      ...nuevoCliente,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoCliente),
      });

      const data = await res.json();

       console.log("Cliente creado:", data);

       setMensaje(`Cliente creado exitosamente . ID: ${data.id}`);
       setOpen(true);

      if (onClienteCreado) {
        onClienteCreado ({
             id: data.id || Date.now(),
             name: {
                firstname: nuevoCliente.firstname,
                lastname: nuevoCliente.lastname
             },
             email: nuevoCliente.email,
             phone: nuevoCliente.phone,
             address: {
                city: nuevoCliente.city
             }
        })
      }

      setNuevoCliente({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        city: "",
      });

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#40495f' }}>
        Ingrese los datos del cliente
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ display: "grid", gap: 2 }}>
        
        <TextField
          name="firstname"
          label="Nombre"
          value={nuevoCliente.firstname}
          onChange={handleChange}
        />

        <TextField
          name="lastname"
          label="Apellido"
          value={nuevoCliente.lastname}
          onChange={handleChange}
        />

        <TextField
          name="email"
          label="Email"
          value={nuevoCliente.email}
          onChange={handleChange}
        />

        <TextField
          name="phone"
          label="Teléfono"
          value={nuevoCliente.phone}
          onChange={handleChange}
        />

        <TextField
          name="city"
          label="Ciudad"
          value={nuevoCliente.city}
          onChange={handleChange}
        />

        <Button type="submit" variant="contained" disabled={loading}>
          {loading ? "Creando..." : "Crear Cliente"}
        </Button>
      </Box>

      <Snackbar open={open}
       autoHideDuration={3000}
       anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
       onClose={() => setOpen(false)}>
        <Alert severity="success" sx={{ width: "100%" ,backgroundColor: "#4caf50", color: "white"}}>
         {mensaje} {/*mensaje con el id del cliente creado para el snackbar*/}
        </Alert>
      </Snackbar>
    </Paper>
  );
}

export default AltaCliente;