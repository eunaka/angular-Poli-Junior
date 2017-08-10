angular.module('poliJunior')

.controller('NewController', function($scope, $http) {
	$scope.foto = {};
	
	$scope.salvar = function() {
		$http.post('/v1/fotos', $scope.foto)
		.success(function(data) {
			console.log($scope.foto);
			alert('Imagem salva com sucesso!');
		})
		.error(function(erro) {
			console.log(erro);
		});
	};
});