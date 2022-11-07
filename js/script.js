$(document).ready(function(){

	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
	$('.new-categories .new-category_item[category="all"]').addClass('newcls');

	// FILTRANDO PRODUCTOS  ============================================

	$('.new-category_item').click(function(){
		var catProduct = $(this).attr('category');
		console.log(catProduct);

		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.new-category_item').removeClass('newcls');
		$(this).addClass('newcls');

		// OCULTANDO PRODUCTOS =========================
		$('.new-prod').css('transform', 'scale(0)');
		function hideProduct(){
			$('.new-prod').hide();
		} setTimeout(hideProduct,650);

		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.new-prod[category="'+catProduct+'"]').show();
			$('.new-prod[category="'+catProduct+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,650);
	});

	// MOSTRANDO TODOS LOS PRODUCTOS =======================

	$('.new-category_item[category="all"]').click(function(){
		function showAll(){
			$('.new-prod').show();
			$('.new-prod').css('transform', 'scale(1)');
		} setTimeout(showAll,650);
	});
});