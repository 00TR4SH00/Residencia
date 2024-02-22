import React, { useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import * as tf from '@tensorflow/tfjs';

const DropzoneFoto = ({ onPrediction }) => {
  const [foto, setFoto] = useState(null);
  const [modelo, setModelo] = useState(null);

  useEffect(() => {
    const cargarModelo = async () => {
      try {
        const modeloCargado = await tf.loadLayersModel('./model.json');
        setModelo(modeloCargado);
      } catch (error) {
        console.error('Error al cargar el modelo:', error);
      }
    };
    cargarModelo();
  }, []);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        const tensor = tf.browser.fromPixels(img)
          .resizeNearestNeighbor([176, 176])
          .toFloat()
          .div(tf.scalar(255.0))
          .expandDims();

        if (modelo) {
          modelo.predict(tensor).data().then(prediction => {
            console.log(prediction);
            onPrediction(prediction, reader.result);
          });
        }
      };
    };
    reader.readAsDataURL(file);
    setFoto(file);
  }, [modelo, onPrediction]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop,
  });

  const dropzoneStyles = {
    border: '2px dashed #ccc',
    borderRadius: '4px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
  };

  const imageStyles = {
    maxWidth: '100%',
    maxHeight: '150px',
    marginTop: '20px',
  };

  return (
    <div {...getRootProps()} style={dropzoneStyles}>
      <input {...getInputProps()} />
      {foto ? (
        <img
          src={URL.createObjectURL(foto)}
          alt="Foto seleccionada"
          style={imageStyles}
        />
      ) : (
        <p>Arrastra y suelta tu resonancia magnética aquí, o haz clic para seleccionar</p>
      )}
    </div>
  );
};

export default DropzoneFoto;
