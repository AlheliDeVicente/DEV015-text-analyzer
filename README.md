# Analizador de texto
📚 _Text Analyzer_ es una aplicación cuyo objetivo es inspeccionar una porción de texto proporcionada por la usuaria en una text-area, para posteriormente arrojar una serie de métricas que puedan ser de su interés y le permitan comprender dichos textos de mejor forma. 
Esta aplicación se creó 🛠️ usando las herramientas de html, CSS y JavaScript Vainilla. 
## ⚙️ Uso de la aplicación
🚀 Para hacer uso de _Text Analyzer_ la usuaria deberá:
1. Ingresar un texto al textarea de la pagina web ⌨️
2. Conforme la usuaria vaya escribiendo e ingresando nuevos caracteres y palabras, las métricas se irán actualizado en las cajas que se encuentran a un costado del text area.
2. Si la usuaria desea borrar el contenido de text area, se cuenta con un botón de limpiar, este borrará el texto ingresado y las métricas se devolverán a su valor _por default_, es decir, 0.
## 🔧 Funcionalidad de la página
_Text Analyzer_ cuenta con seis funciones que arrojan métricas distintas. 
-* ``GetWordCount``: Obtiene el total de palabras del texto ingresado por la usuaria 
-* ``GetTotalCharacter``: Arroja el total de carácteres
-* ``GetTotalCharactersWithoutSpaces``: Arroja el total de carácteres, excluyendo los signos de puntuación y espacios 
-* ``GetWordAverage``: Calcula el promedio de caracteres por palabras en el texto ingresado
-* ``GetNumCount``: Proporciona la cantidad de números que fueron ingresados en el texto -Nota, esta función NO toma encuenta casos como 3949292ahsjsj- 
-* ``GetNumSum``: Calcula la suma de los números ingresados en el texto.
## 🖼️ Diseño de la página
El diseño de la página tomó en cuenta las reglas básicas del diseño visual
-* Se eligió una imágen de fondo que se relacionara con el tema de la página, en este caso libros, y conforme a los colores de la imagen se creó una paleta de colores 🎨 con los suficientes contrastes como para que la visión de las usuarias no se viera forzada o afectada al momento de navegar y usar la página. 
-* Se bajó la opacidad de la imágen de fondo para que no interfiriera con el resto de los elementos
-* Se intentó crear un diseño intuitivo, con una area de texto lo suficientemente grande para que la usuaria pudiera ver la mayoria del texto que ingresó, un botón de limpiar que se situara debajo de esta caja de texto en un color lo suficientemente contrastante para hacer más rápida su ubicación.
- Se tomó la decisión de que las cajas con las métricas se encontraran a lado de la caja de texto para que la usuaria no tuviera que desplazarse dentro de la página para ver cómo éstas se iban modificando. 
## Autores ✒️
Alhelí De Vicente García❤️