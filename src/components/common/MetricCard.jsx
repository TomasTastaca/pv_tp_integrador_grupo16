import { Card, CardContent, Typography, Box } from "@mui/material";

const MetricCard = ({ titulo, valor, descripcion, icono }) => {
  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: 3,
        border: "1px solid #e0e0e0",
        boxShadow: 3,
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: 6,
        },
      }}
    >
      <CardContent>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="subtitle1"
            fontWeight="bold"
          >
            {titulo}
          </Typography>

          <Box
            sx={{
              width: 50,
              height: 50,
              borderRadius: 2,
              backgroundColor: "#E3F2FD",
              color: "#1976d2",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {icono}
          </Box>
        </Box>

        <Typography
          variant="h3"
          color="primary"
          fontWeight="bold"
          sx={{ mt: 2 }}
        >
          {valor}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 1 }}
        >
          {descripcion}
        </Typography>

      </CardContent>
    </Card>
  );
};

export default MetricCard;