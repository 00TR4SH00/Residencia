import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import { Box, useMediaQuery, useTheme, Button, Grid } from '@mui/material';
import FormularioRegistro from './FormularioRegistro';
import DropzoneFoto from './DropzoneFoto';
import "../App.css";
import { anadirDiagnostico } from '../db/Firebase';
import CustomizedDialogs from './CustomizedDialogs';
import { useNavigate } from 'react-router-dom';

function Registro() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [modalOpen, setModalOpen] = useState(false);
  const [folio, setFolio] = useState("");

  const [datosDiagnostico, setDatosDiagnostico] = useState({
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    curp: "",
    fechaNacimiento: "",
    P0: "",
    P1: "",
    P2: "",
    P3: "",
    Foto: ""
  });

  const navigate = useNavigate();

  const irADiagnostico = () => {
    navigate('/Diagnostico');
  };

  const [botonHabilitado, setBotonHabilitado] = useState(false);

  useEffect(() => {
    const esValido = datosDiagnostico.nombre.trim() !== "" &&
                     datosDiagnostico.apellidoPaterno.trim() !== "" &&
                     datosDiagnostico.apellidoMaterno.trim() !== "" &&
                     datosDiagnostico.curp.trim().length === 18 &&
                     datosDiagnostico.fechaNacimiento.trim() !== "" &&
                     datosDiagnostico.Foto.trim() !== "" &&
                     datosDiagnostico.P0.trim() !== "" &&
                     datosDiagnostico.P1.trim() !== "" &&
                     datosDiagnostico.P2.trim() !== "" &&
                     datosDiagnostico.P3.trim() !== "";
    setBotonHabilitado(esValido);
  }, [datosDiagnostico]);

  const handleDatosFormulario = (datos) => {
    setDatosDiagnostico(prevState => ({
      ...prevState,
      ...datos
    }));
  };

  const generarFolio = () => {
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const letraAleatoria = letras.charAt(Math.floor(Math.random() * letras.length));
    const numeros = Math.floor(10000000 + Math.random() * 90000000); // 8 dígitos
    return `A${letraAleatoria}${numeros}`;
  };

  const handlePrediction = (prediction, fotoBase64) => {
    setDatosDiagnostico(prevState => ({
      ...prevState,
      P0: prediction[0].toString(),
      P1: prediction[1].toString(),
      P2: prediction[2].toString(),
      P3: prediction[3].toString(),
      Foto: fotoBase64
    }));
  };

  const handleUpload = async () => {
    const nuevoFolio = generarFolio();
    setFolio(nuevoFolio);

    const nuevosDatosDiagnostico = {
        ...datosDiagnostico,
        Folio: nuevoFolio
    };

    try {
        await anadirDiagnostico(nuevosDatosDiagnostico, nuevoFolio);
        console.log(`Diagnóstico añadido con éxito ${nuevoFolio}`);
        setModalOpen(true);
    } catch (error) {
        console.error("Error añadiendo diagnóstico:", error);
    }
};

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
          <h1>Registro de paciente</h1>
          <Grid container spacing={5}>
            <Grid item xs={6}>
              <FormularioRegistro onDatosChange={handleDatosFormulario} />
            </Grid>
            <Grid item xs={6}>
              <h4>Dropzone para cargar una foto</h4>
              <DropzoneFoto onPrediction={handlePrediction} />
              <div className="buttonContainer">
              <Button 
                  variant="contained"
                  onClick={handleUpload}
                  disabled={!botonHabilitado}
                  sx={{ margin: "5%" }}
              >
                Subir datos
              </Button>
            </div>
            </Grid>
          </Grid>
        </div>
        <CustomizedDialogs
          folio={folio}
          open={modalOpen}
          setOpen={setModalOpen}
          irADiagnostico={irADiagnostico}
        />
      </Paper>
    </Box>
  );
}

export default Registro;
