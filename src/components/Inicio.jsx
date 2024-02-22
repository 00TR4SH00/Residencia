import React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import {Paper, List, ListItem, ListItemText } from '@mui/material';

function Inicio() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
        <div style={{ padding: '20px' }}>
      {/* Síntomas */}
      <Paper elevation={3} style={{ marginBottom: '20px', padding: '15px' }}>
        <h4>Síntomas</h4>
        <p>La pérdida de memoria es el síntoma clave de la enfermedad de Alzheimer. Los primeros signos incluyen dificultad para recordar eventos o conversaciones recientes, pero la memoria empeora y se desarrollan otros síntomas a medida que la enfermedad avanza.

Al principio, es posible que alguien con la enfermedad reconozca problemas para recordar las cosas y pensar con claridad. A medida que los síntomas empeoran, hay más posibilidades de que un familiar o amigo note los problemas.

Los cambios que la enfermedad de Alzheimer produce en el cerebro generan problemas cada vez mayores con lo siguiente:
</p>
        <h6>Memoria</h6>
        <p>Todas las personas tienen lagunas mentales por momentos, pero la pérdida de la memoria asociada con la 
          enfermedad de Alzheimer persiste y empeora. Con el tiempo, la pérdida de la memoria afecta la capacidad 
          de la persona para desenvolverse en el trabajo y en casa. Las personas con enfermedad de Alzheimer podrían 
          pasar por las siguientes situaciones:</p>
            <p>-Repetir afirmaciones y preguntas una y otra vez.</p>
            <p>-Olvidar conversaciones, citas médicas o eventos.</p>
            <p>-Extraviar artículos y, a menudo, ponerlos en lugares en los que no tiene sentido hacerlo.</p>
            <p>-Perderse en lugares que solían conocer bien.</p>
            <p>-Con el tiempo, olvidar los nombres de familiares y de objetos de uso cotidiano.</p>
            <p></p>
            <p>Tener problemas para encontrar el nombre adecuado de objetos, para expresar pensamientos o para participar en conversaciones.</p>

        <h6>Pensamiento y razonamiento</h6>
        <p>La enfermedad de Alzheimer dificulta concentrarse y pensar, en especial sobre conceptos abstractos, como los números.
        Hacer más de una tarea a la vez resulta especialmente difícil. Gestionar la economía, poner al día las cuentas y pagar las facturas 
        a tiempo puede ser complicado. A la larga, es posible que una persona con la enfermedad de Alzheimer no sea capaz de reconocer ni manejar los números.
        </p>

        <h6>Hacer valoraciones y tomar decisiones</h6>
        <p>La enfermedad de Alzheimer provoca un deterioro en la capacidad de tomar decisiones y juicios razonables en situaciones 
        cotidianas. Por ejemplo, la persona puede tomar malas decisiones en ámbitos sociales o usar ropa que no es adecuada para las 
        condiciones climáticas. Puede que a algunos les resulte más difícil responder a los problemas cotidianos. Por ejemplo, es posible 
        que la persona no sepa manipular alimentos que se están cocinando en una hornalla ni tomar decisiones al conducir un vehículo.
        </p>  

        <h6>Planificar y realizar actividades familiares</h6>
        <p>Las actividades rutinarias que requieren completar pasos en orden se convierten en un problema. Esto puede incluir planear 
        y elaborar una comida, o jugar un juego favorito. Con el tiempo, las personas con enfermedad de Alzheimer avanzada se olvidan 
        de cómo hacer tareas básicas, como vestirse y bañarse.
        </p> 

        <h6>Cambios en la personalidad y en la conducta</h6>
        <p>Los cambios que la enfermedad de Alzheimer produce en el cerebro pueden afectar el estado de ánimo y el comportamiento. 
        Los problemas pueden incluir lo siguiente:
        </p> 
            <p>-Depresión.</p>
            <p>-Pérdida de interés por actividades.</p>
            <p>-Aislamiento social.</p>
            <p>-Cambios del estado de ánimo.</p>
            <p>-Desconfía de otras personas.</p>
            <p>-Ira o agresividad.</p>
            <p>-Cambios en los hábitos de sueño.</p>
            <p>-Desorientación.</p>
            <p>-Desinhibición.</p>
            <p>-Delirios, como creer que le han robado algo.</p>
            <p></p>

        <h6>Habilidades preservadas</h6>
        <p>A pesar de los cambios importantes en la memoria y las habilidades, las personas que tienen la enfermedad de Alzheimer son 
        capaces de conservar ciertas habilidades, incluso cuando los síntomas empeoran. Entre las habilidades que se conservan pueden 
        estar leer o escuchar libros, contar historias, compartir recuerdos, cantar, escuchar música, bailar, dibujar o hacer manualidades.
        Estas habilidades pueden conservarse durante más tiempo porque las controlan partes del cerebro que se ven afectadas con el avance de la enfermedad.
        </p> 
      </Paper>


      <Paper elevation={3} style={{ marginBottom: '20px', padding: '15px' }}>
        <h4>Cuándo debes consultar con un médico</h4>
        <p>
        Varias afecciones pueden ocasionar la pérdida de la memoria u otros síntomas de demencia. Algunas de ellas pueden tratarse. Si estás preocupado por tu memoria u otras habilidades del pensamiento, habla con un profesional de atención médica.
        Si te preocupan las habilidades del pensamiento que observas en un familiar o amigo, habla sobre tus inquietudes y pregunta si pueden asistir juntos a una cita con un profesional de atención médica.
        </p>
      </Paper>


      <Paper elevation={3} style={{ marginBottom: '20px', padding: '15px' }}>
        <h4>Causas</h4>
        <p>Las causas exactas de la enfermedad de Alzheimer no se comprenden en su totalidad. Pero a un nivel básico, las proteínas del 
        cerebro no funcionan de la forma habitual. Esto interrumpe el trabajo de las células cerebrales, llamadas neuronas, y desencadena 
        una serie de eventos. Las neuronas se dañan y pierden las conexiones entre sí. Eventualmente, mueren.
        </p>
        <p>Los científicos creen que, en la mayoría de los casos, la enfermedad de Alzheimer es consecuencia de una combinación de 
        factores genéticos, ambientales y del estilo de vida que afectan el cerebro a lo largo del tiempo. En menos del 1 % de los 
        casos, la enfermedad de Alzheimer ocurre por cambios genéticos específicos que prácticamente garantizan que una persona 
        tendrá la enfermedad. En estos casos, la enfermedad generalmente comienza en la madurez.</p>
        <p>El desarrollo de la enfermedad comienza años antes de que aparezcan los primeros síntomas. El daño comienza más a menudo 
        en la región del cerebro que controla la memoria. La pérdida de neuronas se extiende en un patrón algo predecible a otras 
        regiones del cerebro. En la etapa avanzada de la enfermedad, el tejido cerebral está considerablemente reducido.</p>
        <p>Los investigadores que tratan de entender la causa de la enfermedad de Alzheimer se centran en el papel de dos proteínas:</p>
            <p>Placas: El beta amiloide es un fragmento de una proteína más grande. Cuando estos fragmentos se agrupan, parecen tener un efecto 
            tóxico en las neuronas e interrumpen la comunicación entre las neuronas cerebrales. Estos grupos forman depósitos más grandes 
            llamados placas amiloides, que también incluyen otros desechos celulares.</p>
            <p>Ovillos: Las proteínas juegan un papel en el sistema interno de apoyo y transporte de las neuronas cerebrales para transportar 
            nutrientes y otros materiales esenciales. En la enfermedad de Alzheimer, las proteínas cambian de forma y se organizan en 
            estructuras llamadas ovillos neurofibrilares. Los ovillos interrumpen el sistema de transporte y provocan daños en las neuronas.
            </p>
            <p></p>
      </Paper>


      <Paper elevation={3} style={{ marginBottom: '20px', padding: '15px' }}>
        <h4>Factores de riesgo</h4>

        <h6>Edad</h6>
        <p>La edad avanzada es el factor de riesgo más importante para la enfermedad de Alzheimer. La enfermedad de Alzheimer no es parte 
        del proceso normal de envejecimiento. Pero, al envejecer, aumentan las probabilidades de desarrollarla.
        </p> 
        <p>Según un estudio, cada año hubo cuatro nuevos diagnósticos por cada 1000 personas de 65 a 74 años. Entre las personas de 75 a 
        84 años, hubo 32 nuevos diagnósticos por cada 1000 personas. Para las personas de 85 años o más, hubo 76 nuevos diagnósticos por 
        cada 1000 personas.</p> 

        <h6>Antecedentes familiares y genética</h6>
        <p>El riesgo de desarrollar la enfermedad de Alzheimer es un poco más alto si un familiar de primer grado (un padre, una madre, 
        un hermano o una hermana) tiene la enfermedad. Aún no se sabe cómo los genes entre las familias influyen en el riesgo, y es 
        probable que los factores genéticos sean complejos.</p> 
        <p>Un factor genético más estudiado es una forma del gen apolipoproteína E (APOE). Una forma del gen APOE e4 aumenta el riesgo 
        de tener la enfermedad de Alzheimer. Aproximadamente del 25 % al 30 % de la población general es portadora de un alelo APOE e4. 
        Pero no todas las personas con esta forma del gen desarrollan la enfermedad.</p> 
        <p>Los científicos han encontrado cambios poco frecuentes en tres genes que prácticamente garantizan que una persona que hereda 
        uno de ellos desarrollará la enfermedad de Alzheimer. Sin embargo, estos cambios representan menos del 1 % de las personas con 
        enfermedad de Alzheimer.</p> 

        <h6>Deterioro cognitivo leve</h6>
        <p>Alguien con deterioro cognitivo leve muestra un empeoramiento en la memoria u otras habilidades de pensamiento que es mayor 
        a lo normal para la edad de esa persona, pero dicha pérdida no le impide desenvolverse en entornos sociales o laborales.
        </p> 
        <p>Sin embargo, las personas con un deterioro cognitivo leve corren un riesgo significativo de tener demencia. Cuando el 
        deterioro cognitivo leve afecta principalmente la memoria, es más probable que la afección avance hasta una demencia debida a 
        la enfermedad de Alzheimer. Un diagnóstico de deterioro cognitivo leve ofrece a las personas la posibilidad de enfocarse más en 
        hacer cambios para un estilo de vida saludable y en crear estrategias para compensar la pérdida de memoria. También pueden programar 
        citas médicas periódicas para controlar los síntomas.</p> 

        <h6>Traumatismo craneal</h6>
        <p>Varios estudios de gran magnitud hallaron que hubo un aumento en el riesgo de demencia o enfermedad de Alzheimer en personas de 
        50 años o más que tuvieron una lesión cerebral traumática. El riesgo es aún mayor en personas con lesiones cerebrales traumáticas 
        múltiples y de mayor gravedad. Algunos estudios demostraron que el riesgo más alto puede darse dentro de los primeros seis meses a 
        dos años después de la lesión.</p> 
      </Paper>


      <Paper elevation={3} style={{ marginBottom: '20px', padding: '15px' }}>
        <h4>Complicaciones</h4>
        <p>Los síntomas de la enfermedad de Alzheimer, como la pérdida de la memoria y del lenguaje, el deterioro del juicio y otros cambios 
        en el cerebro, pueden dificultar el control de otras enfermedades. Es posible que una persona con la enfermedad de Alzheimer no sea 
        capaz de hacer lo siguiente:</p>
            <p>-Hacer saber a alguien que siente dolor.</p>
            <p>-Explicar los síntomas de otra enfermedad.</p>
            <p>-Seguir un plan de tratamiento.</p>
            <p>-Explicar los efectos secundarios de los medicamentos.</p>

        <p>A medida que la enfermedad de Alzheimer avanza hacia las últimas etapas, los cambios en el cerebro comienzan a afectar las funciones 
        físicas. Estos cambios pueden afectar la capacidad de tragar, de mantener el equilibrio y de controlar los movimientos del intestino y 
        de la vejiga. Dichos efectos pueden derivar en otros problemas de salud, como los siguientes:</p> 
            <p>-Inhalación de alimentos o líquidos hacia los pulmones.</p>
            <p>-Gripe, neumonía y otras infecciones.</p>
            <p>-Caídas.</p>
            <p>-Fracturas.</p>
            <p>-Escaras.</p>
            <p>-Malnutrición o deshidratación.</p>
            <p>-Estreñimiento o diarrea.</p>
            <p>-Problemas dentales como llagas en la boca o caries dentaria.</p>
      </Paper>


      <Paper elevation={3} style={{ marginBottom: '20px', padding: '15px' }}>
        <h4>Prevención</h4>
        <p>La enfermedad de Alzheimer es una afección que no se puede prevenir. 
        Sin embargo, se pueden modificar varios factores de riesgo en el estilo de vida.</p>
        <p>Existe evidencia de que tomar medidas para reducir el riesgo para enfermedades 
        cardiovasculares también puede disminuir el riesgo de demencia.</p>
        <p>Estas son algunas opciones de un estilo de vida saludable para el corazón que 
        se pueden seguir para reducir el riesgo de demencia:</p>
            <p>-Hacer ejercicio con regularidad.</p>
            <p>-Llevar una alimentación de frutas y verduras frescas, aceites saludables 
            y alimentos bajos en grasas saturadas, como la dieta mediterránea.</p>
            <p>-Seguir las pautas de tratamiento para controlar la hipertensión arterial, 
            la diabetes y el colesterol alto.</p>
            <p>-Si fumas, pide al profesional de atención médica que te ayude a dejar el hábito.</p>
        <p>En un estudio grande y prolongado que se hizo en Finlandia, se descubrió que los cambios 
        en el estilo de vida ayudaban a reducir el deterioro cognitivo en personas que corrían el riesgo 
        de tener demencia. Se impartió a los sujetos del estudio sesiones individuales y grupales centradas 
        en alimentación, ejercicio y actividades sociales.</p>
        <p>En otro estudio que se llevó a cabo en Australia, a quienes corrían el riesgo de tener demencia 
        les ofrecieron sesiones de asesoramiento sobre alimentación, ejercicio y otros cambios en el estilo 
        de vida. Obtuvieron mejores resultados en las pruebas cognitivas después de uno, dos y tres años en 
        comparación con quienes no recibieron el asesoramiento.</p>
        <p>Otros estudios han demostrado que comprometerse mental y socialmente ayuda a conservar las habilidades 
        de pensamiento en el futuro y disminuir el riesgo para la enfermedad de Alzheimer. Esto incluye participar 
        en eventos sociales, leer, bailar, jugar juegos de mesa, realizar tareas artísticas, tocar un instrumento 
        y otras actividades.</p>

      </Paper>
    </div>
      </Paper>
    </Box>
  );
}


export default Inicio;