import { useState, useEffect } from 'react';
import { Box, CircularProgress, Alert, Typography } from '@mui/material';

function ListaClientes() {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    const obtenerClientes = async () => {
      try {
            const respuesta = await fetch('https://fakestoreapi.com/users');
            if (!respuesta.ok) throw new Error();
            const datos = await respuesta.json();

            setClientes(datos);
            setLoading(false); // Estado: Éxito
      } catch {
            setError('Error al obtener los clientes de la plataforma'); // Estado: Error
            setLoading(false);
          }
    };

        obtenerClientes();
    }, []);

//Estado de Carga
    if (loading === true) {
        return (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '300px', mt: 6 }}>
                <CircularProgress size={50} thickness={4} sx={{ color: '#1976d2' }} />
                <Typography sx={{ mt: 2, color: 'text.secondary', fontWeight: '500' }}>
                    Cargando clientes...
                </Typography>
            </Box>
        );
    }

//Estado de Error
    if (error !== null) {
        return (
            <Box sx={{ p: 2, maxWidth: '800px', margin: '40px auto' }}>
                <Alert severity="error" variant="filled" sx={{ borderRadius: '8px', boxShadow: 2 }}>
                    {error}
                </Alert>
            </Box>
        );
    }

return (
        <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: '1400px', margin: '0 auto' }}>
            Lista Clientes
        </Box>
    );
}

export default ListaClientes;