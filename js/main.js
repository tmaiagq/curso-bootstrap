// setTimeout(function(){
// 	$("#cadastro_modal").modal("show");
// }, 1000)
// setTimeout(function(){
// 	$("#cadastro_modal").modal("hide");
// }, 5000)
$('#vendas_collapse').on('show.bs.collapse', function () {
	$('a[href="#vendas_collapse"]').text("Ver menos")
})
$('#vendas_collapse').on('hidden.bs.collapse', function () {
	$('a[href="#vendas_collapse"]').text("Ver mais")
})
$(window).on("scroll", function() {
	var distanciaDoTopo = $(window).scrollTop();
	if (distanciaDoTopo > 300) {
		distanciaDoTopo = 300
	}
	$("#header_shadow").css("top", (distanciaDoTopo / 10) + "px")
	// console.log(distanciaDoTopo);
	// if (distanciaDoTopo > 150) {
	// 	$("#header").addClass("shadow");		
	// } else {
	// 	$("#header").removeClass("shadow");
	// }
	// console.log($(window).scrollTop());
	// console.log("scrolou");
})
var opcoesSR = {
	delay: 100,
	duration: 900,
	distance: '50px',
	origin: 'bottom',
	viewOffset: {
		bottom: 300
	}
}
ScrollReveal().reveal('#clientes-box', opcoesSR)
ScrollReveal().reveal('.feature', opcoesSR)
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})
$("#salvar_cadastro").on("click", function() {
	var valorNome = $("#input_nome").val()
	// console.log(valorNome.length)
	if (valorNome.length > 0) {
		$(".alert.alert-success").show()
	} else {
		$(".alert.alert-warning").show()
	}
})