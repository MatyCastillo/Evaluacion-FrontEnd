// traduccion de la tabla
var esp={
      "search":"",
      "searchPlaceholder":'Filtrar',
      sProcessing: "Procesando...",
      sLengthMenu: "Mostrar _MENU_ datos",
      sZeroRecords: "No se encontraron resultados",
      sEmptyTable: "Ningún dato disponible en esta tabla",
      sInfo:
        "Mostrando datos del _START_ al _END_ de un total de _TOTAL_ datos",
      sInfoEmpty: "Mostrando datos del 0 al 0 de un total de 0 datos",
      sInfoFiltered: "(filtrado de un total de _MAX_ datos)",
      sInfoPostFix: "",
      sSearch: "Buscar:",
      sUrl: "",
      sInfoThousands: ",",
      sLoadingRecords: "Cargando...",
      oPaginate: {
        sFirst: "Primero",
        sLast: "Ãšltimo",
        sNext: "Siguiente",
        sPrevious: "Anterior"
      },
      oAria: {
        sSortAscending: ": Activar para ordenar la columna de manera ascendente",
        sSortDescending: ": Activar para ordenar la columna de manera descendente"
      },
      buttons: {
        copyTitle: "Informacion copiada",
        copySuccess: {
          _: "%d filas copiadas al portapapeles",
          "1": "1 fila copiada al portapapeles"
        },

        pageLength: {
          _: "Mostrar %d filas",
          "-1": "Mostrar Todo"
        }
      }
    };




var tabla = $('#tabla').DataTable({"language": esp});
var clave_api = 'aa3deada592f3d55b2c5b36064c4d963';
var ciudades = ['New York', 'London', 'Spain', 'Argentina', 'Peru', 'Miami', 'Paris'];

$.extend( $.fn.dataTable.defaults, {
    responsive: true
} );

// inicialización de la tabla
$(document).ready(function() {
  
  // recorre el arreglo de ciudades
  $.each( ciudades, function( clave, valor ) {
    $.ajax({
        url: "http://api.weatherstack.com/current",
        method: "GET",
        data: { access_key: clave_api,
                query: valor },
        success: function (data) {
            tabla.row.add( [
                data.location.name,
                data.current.observation_time,
                data.current.temperature
            ] ).draw( false );
        }
    });
  });

  

});


