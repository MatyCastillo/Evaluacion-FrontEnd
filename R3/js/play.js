// funciones para el video
var video = $("#video").get(0); 

// Abre el modal y reproduce el video 
function reproducirVideo(){
	$('#videoModal').modal('show');
	video.play(); 
}

// pausa el video cuando se cierra el modal
function pararVideo(){
	video.pause(); 
}

//asoscia el evento hiden del modal de bootstrap a una funcion
$('#videoModal').on('hidden.bs.modal', function (e) {
pararVideo()
})