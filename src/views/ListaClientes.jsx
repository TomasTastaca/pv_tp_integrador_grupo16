import { useState, useEffect } from 'react';
import { Box, CircularProgress, Alert, Typography, TextField, InputAdornment} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

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

//Filtro por apellido o ciudad
const clientesFiltrados = clientes.filter((cliente) => {
      const apellido = cliente.name.lastname.toLowerCase();
      const ciudad = cliente.address.city.toLowerCase();
      const busquedaLower = busqueda.toLowerCase();

      return apellido.includes(busquedaLower) || ciudad.includes(busquedaLower);
    });
    
return (
        <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: '1400px', margin: '0 auto' }}>
            <Box sx={{ mb: 4, borderBottom: '2px solid #f1f5f9', pb: 2 }}>
                <Typography variant="h4" component="h2" sx={{ fontWeight: 700, color: '#0f172a', letterSpacing: '-0.5px' }}>
                    Listado de Clientes
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b', mt: 0.5 }}>
                    Visualizá y filtrá los usuarios registrados en el sistema central.
                </Typography>
            </Box>

            {/* Barra de Búsqueda*/}
            <Box sx={{ mb: 3 }}>
                <TextField
                    placeholder="Buscar por apellido o ciudad..."
                    variant="outlined"
                    size="small"
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    sx={{ 
                        width: '100%', maxWidth: '450px', backgroundColor: '#ffffff',
                        '& .MuiOutlinedInput-root': { borderRadius: '8px', '&:hover fieldset': { borderColor: '#1976d2' } }
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon sx={{ color: '#94a3b8' }} />
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>
        </Box>
    );
}

export default ListaClientes;