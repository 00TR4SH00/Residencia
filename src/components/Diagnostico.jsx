import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import { Box, useMediaQuery, useTheme, Button, TextField } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import Resultados from './Resultados';

function Diagnostico() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [folio, setFolio] = useState('');
  const [buscando, setBuscando] = useState(false);

  const handleBuscarClick = () => {
    if (folio.length === 10) {
      setBuscando(true);
    } else {
      setBuscando(false);
    }
  };

  const handleChange = (text) => {
    setFolio(text)
    setBuscando(false)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100vh',
        bgcolor: '#007AEC',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          bgcolor: 'white',
          overflowY: 'auto',
          width: '90%',
          marginX: "5%",
          mb: isMobile ? '50%' : '5%',
          padding: isMobile ? 0 : '1rem',
          marginTop: isMobile ? '10vh' : '15vh'
        }}
      >
        <div>
          <h1>Diagnóstico</h1>
          <div style={{ marginTop: '25px', display: 'flex', alignItems: 'center', width: '100%' }}>
            <TextField
              id="outlined-basic"
              label="Folio"
              variant="outlined"
              value={folio}
              onChange={(e) => handleChange(e.target.value)}
              style={{ marginRight: '5px', height: '56px', width: '80%' }}
            />
            <Button variant="outlined" onClick={handleBuscarClick} style={{ height: '56px' }}>
              Buscar
            </Button>
          </div>
          {!buscando &&
            <p style={{ marginTop: "3%" }}>
              Los resultados obtenidos son una predicción de un grado de enfermedad en una radiografía de pacientes con Alzheimer.
              Ingrese el folio al que se le indicó sus resultados durante su registro, de haberlo olvidado vuelva a registrarlo con otro folio.
            </p>
          }
          {buscando &&
            <Resultados folio={folio} />
          }
        </div>
      </Paper>
    </Box>
  );
}

export default Diagnostico;
