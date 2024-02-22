import React from 'react';

const MostrarFoto = ({ imageURL }) => {
  return (
    <div style={containerStyles}>
      <h2>Resonancia Magnética</h2>
      {imageURL ? (
        <img src={imageURL} alt="Foto del cliente" style={imageStyles} />
      ) : (
        <p>No hay foto disponible</p>
      )}
    </div>
  );
};

const containerStyles = {
  border: '2px solid #ccc',
  borderRadius: '8px',
  padding: '20px',
  textAlign: 'center',
  maxWidth: '400px',
  margin: 'auto',
};

const imageStyles = {
  maxWidth: '100%',
  maxHeight: '300px',
  marginTop: '20px',
};

export default MostrarFoto;
