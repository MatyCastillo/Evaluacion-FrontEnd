# Evaluación-FrontEnd

 - Solicitud R2:
	Crear una web R2.html, y maquetar la tabla de datos de ejemplo, responsive mobile, tablet y web, y debe cumplicar
  con las siguientes caracteristicas de diseño web, en este ejemplo solo utilizar html y css.
	
	Para esta solicitud, se elaboró una tabla sencilla, con estilos para llegar al resultado pedido.
	
	- R2.html-
  Contiene la creación de la tabla con los datos de relleno.
  	- style.css-
  Contiene el estilo de la tabla antes mencionada, dicho estilo, declara la fuente, colores intercalados entre filas y evita que cuando la pantalla se achique la tabla pierda su forma habilitando el desplazamiento horizontal, y así, hace que la tabla tengo un diseño resposivo en todos los dispositivos.
  
   
- Solicitud R3:
Crear una web R3.html, y maquetar el diseño suministrado. Al dar click en el play reproducir un video en un modal.
Las fotografias y video, a consideracion del candidato. Se evaluara Metatagas, Favicon, Codificacion (html, css y
javascript), y responsive.

	En esta parte, opté por utilizar el plugin Bootstrap para manejar la resposividad del sitio, también se aprovechan sus estilos para darle un mejor aspecto, por otro lado, se 	utiliza JavaScript y JQuery para manejar el comportamiento de los objetos en pantalla. 
	 - R3.html- Contiene la una preview del video que se va a reproducir con un texto que simula la descripción del video.
	- style.css- Aquí se encuentra en estilo del botón de reproducción, el cual está centrado con la previsualización del video y tiene un efecto de Hover cuando se pasa el puntero por arriba. También dentro de este archivo hay un atributo que impide que el video deje de estar contenido por el modal en dispositivos más chicos.
	- play.js- Contiene el comportamiento del botón de "play", así también, funciones para detener el video cuando el modal no está visible.
	
- Solicitud R4:
Crear una página R4.html, y consumir un servicio gratuito de datos (Rest Api - GET), para listar informacion, en una
tabla con diseño similar a la solicitada en R2.

	En este punto, además de usar nuevamente Bootstrap y JQuery, agregué otro plugin, DataTables, un plugin que permite manejar las tables de una manera muy flexible, y así, 	gracias a sus solicitudes ajax, poder utilizar la API de Weatherstack.
	- R4.html- Contiene la tabla que mostrará los datos. 
	- R4.js- Acá se inicializa la tabla, antes de esto y al estar utilizando el pulgin de DataTable, se realiza la traducción pertinente al español. Se accede por medio de una solicitud ajax a la API y se extraen los datos para llenar la tabla.
