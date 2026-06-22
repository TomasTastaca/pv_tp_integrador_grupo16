import { Paper, Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <Paper elevation={3} sx={{ padding: 3 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Dashboard
      </Typography>

      <Typography variant="body1">
        Bienvenido al panel principal del sistema.
      </Typography>
    </Paper>
  );
};

export default Dashboard;