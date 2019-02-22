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