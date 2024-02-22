import React from 'react';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

const ModificarPDF = ({ nombreCompleto, curp, fechaHoy, P0, P1, P2, P3, imagen, resultado }) => {
  const handleCrearPDF = async () => {
    try {
      const url = './ResultadosPDF.pdf'
      const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer());
      const pdfDoc = await PDFDocument.load(existingPdfBytes);

      const page = pdfDoc.getPage(0);
      const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
      const fontSize = 12;
      const dateSize = 24;

      const tiempoTranscurrido = Date.now();
      const hoy = new Date(tiempoTranscurrido);
      
      const dd = String(hoy.getDate()).padStart(2, '0');
      const mm = String(hoy.getMonth() + 1).padStart(2, '0'); // Enero es 0
      const yy = hoy.getFullYear().toString().slice(-2)
      
      const fechaFormateada = dd + '-' + mm + '-' + yy;
      
      console.log(fechaFormateada);
      
      page.drawText(`${nombreCompleto}`, { x: 59, y: 690, size: fontSize, font: timesRomanFont, color: rgb(0, 0, 0) });
      page.drawText(`${curp}`, { x: 59, y: 675, size: fontSize, font: timesRomanFont, color: rgb(0, 0, 0) });
      page.drawText(`${dd}`, { x: 428, y: 678, size: dateSize, font: timesRomanFont, color: rgb(0, 0, 0) });
      page.drawText(`${mm}`, { x: 470, y: 678, size: dateSize, font: timesRomanFont, color: rgb(0, 0, 0) });
      page.drawText(`${yy}`, { x: 505, y: 678, size: dateSize, font: timesRomanFont, color: rgb(0, 0, 0) });
      page.drawRectangle({
        x: 404,
        y: 223,
        width: 178 * P0,
        height: 23,
        color: rgb(241/255, 196/255, 15/255),
        opacity: 0.5
      })
      page.drawRectangle({
        x: 404,
        y: 185,
        width: 178 * P1,
        height: 23,
        color: rgb(203/255, 67/255, 53/255),
        opacity: 0.5
      })
      page.drawRectangle({
        x: 404,
        y: 147,
        width: 178 * P2,
        height: 23,
        color: rgb(133/255, 193/255, 233/255),
        opacity: 0.5
      })
      page.drawRectangle({
        x: 404,
        y: 109,
        width: 178 * P3,
        height: 23,
        color: rgb(23/255, 165/255, 137/255),
        opacity: 0.5
      })
      page.drawText(`${P0 * 100}`, { x: 420, y: 230, size: fontSize, font: timesRomanFont, color: rgb(0, 0, 0) });
      page.drawText(`${P1 * 100}`, { x: 420, y: 190, size: fontSize, font: timesRomanFont, color: rgb(0, 0, 0) });
      page.drawText(`${P2 * 100}`, { x: 420, y: 155, size: fontSize, font: timesRomanFont, color: rgb(0, 0, 0) });
      page.drawText(`${P3 * 100}`, { x: 420, y: 115, size: fontSize, font: timesRomanFont, color: rgb(0, 0, 0) });

      if (imagen) {
        const imageData = imagen.split(',')[1];
        const imageBytes = atob(imageData);
        const uint8Array = new Uint8Array(imageBytes.length);
        for (let i = 0; i < imageBytes.length; i++) {
          uint8Array[i] = imageBytes.charCodeAt(i);
        }

        const embeddedImage = await pdfDoc.embedJpg(uint8Array);
        page.drawImage(embeddedImage, {
          x: 50,
          y: 60,
          width: 200,
          height: 200,
        });
      }

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url2 = URL.createObjectURL(blob);
      window.open(url2, '_blank');
    } catch (error) {
      console.error("Error al crear PDF:", error);
    }
  };

  return (
    <button onClick={handleCrearPDF}>Generar PDF</button>
  );
};

export default ModificarPDF;
