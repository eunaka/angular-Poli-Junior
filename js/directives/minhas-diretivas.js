angular.module('minhasDiretivas', [])

.directive('meuPainel', function() {
	// directive definition object
	var ddo = {};

	// Atribute, Element, Comment
	ddo.restrict = 'AE';

	ddo.scope = {
		titulo: '@titulo',
		legenda: '@legenda'
	};

	ddo.transclude = true;

	ddo.templateUrl = 'js/directives/meu-painel.html';

	return ddo;
})

.directive('minhaFoto', function() {
	// directive definition object
	var ddo = {};

	// Atribute, Element, Comment
	ddo.restrict = 'AE';

	ddo.scope = {
		titulo: '@titulo',
		url: '@url'
	};

	ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';

	return ddo;
});