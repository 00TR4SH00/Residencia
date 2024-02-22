import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  
export default function CustomizedDialogs({ folio, open, setOpen, irADiagnostico }) {

  const handleClose = () => {
    setOpen(false);
  };

  const handleAceptar = () => {
    // Lógica para manejar "Aceptar"
    handleClose();
  };

  const handleIrADiagnostico = () => {
    // Lógica para manejar "Ir a Diagnóstico"
    irADiagnostico();
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Datos subidos con éxito
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Sus datos se están analizando en este momento, revise la pestaña de diagnóstico para obtener sus resultados. Ingrese el siguiente folio: {folio}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAceptar}>Aceptar</Button>
          <Button onClick={handleIrADiagnostico}>Ir a Diagnóstico</Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
