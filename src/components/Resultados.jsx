import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import MostrarFoto from './MostrarFoto';
import { obtenerDiagnosticoPorFolio } from '../db/Firebase';
import ModificarPDF from './ModificarPDF'

const Resultados = ({ folio }) => {
    const [diagnostico, setDiagnostico] = useState(null);

    useEffect(() => {
        const obtenerDatosDiagnostico = async () => {
            const resultado = await obtenerDiagnosticoPorFolio(folio);
            setDiagnostico(resultado);
        };

        obtenerDatosDiagnostico();
    }, [folio]);

    if (!diagnostico) {
        return <p>Cargando resultados...</p>;
    }

    const handleClick = () => {
        console.log(diagnostico.Foto)
    }

    const handleResult = (p0, p1, p2, p3) => {
        return Math.max(p0, p1, p2, p3)
    }

    return (
        <div style={{ width: '100%' }}>
            <Grid container spacing={3} style={{ marginTop: '20px' }}>
                <Grid item xs={6}>
                    <div>
                        <p>Nombre de pila: {diagnostico.nombre}</p>
                        <p>Apellido Paterno: {diagnostico.apellidoPaterno}</p>
                        <p>Apellido Materno: {diagnostico.apellidoMaterno}</p>
                        <p>Fecha de Nacimiento: {diagnostico.fechaNacimiento}</p>
                        <p>CURP: {diagnostico.curp}</p>
                        <ModificarPDF 
                            nombreCompleto={`${diagnostico.nombre} ${diagnostico.apellidoPaterno} ${diagnostico.apellidoMaterno}`}
                            curp={diagnostico.curp}
                            fechaHoy={"00-00-0000"}
                            P0={diagnostico.P0}
                            P1={diagnostico.P1}
                            P2={diagnostico.P2}
                            P3={diagnostico.P3}
                            imagen={diagnostico.Foto}
                            resultado={handleResult(diagnostico.P0, diagnostico.P1, diagnostico.P2, diagnostico.P3)}
                        />
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <MostrarFoto imageURL={diagnostico.Foto} />
                    <div style={{ margin: '10%', alignItems: 'center', textAlign: 'center', width: "80%" }}>
                       <h7>Demente leve</h7> <ProgressBar porcentaje={diagnostico.P0} />
                       <h7>Moderado Demente</h7> <ProgressBar porcentaje={diagnostico.P1} />
                       <h7>No demente</h7> <ProgressBar porcentaje={diagnostico.P2} />
                       <h7>Muy leve demente</h7> <ProgressBar porcentaje={diagnostico.P3} />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

const ProgressBar = ({ porcentaje }) => {
    const porcentajeTexto = `${(porcentaje * 100).toFixed(2)}%`;

    return (
        <div className="progress" role="progressbar" style={{ height: '30px', position: 'relative' }}>
            <div className="progress-bar progress-bar-lg" style={{ width: porcentajeTexto, height: '30px' }}>
            </div>
            <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 2 }}>
                {porcentajeTexto}
            </div>
        </div>
    );
};

export default Resultados;
