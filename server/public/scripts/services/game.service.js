app.service('GameService', ['$http', function($http) {
    var self = this;

    self.games = { list: [] };
    self.newGame = {
        name: '',
        duration: '',
        numberOfPlayers: '',
        publishedDate: ''
    }

    self.getGames = function() {
        $http({
            method: 'GET',
            url: '/game'
        }).then(function(response) {
            console.log('response', response);
            
            self.games.list = response.data;
        });
    };

    self.addNewGame = function(newGame) {
        $http({
            method: 'POST',
            url: '/game',
            data: newGame
        }).then(function(response) {
            console.log('response', response);
            self.getGames();
            self.newGame.name = '';
            self.newGame.duration = '';
            self.newGame.numberOfPlayers = '';
            self.newGame.publishedDate = '';
        });
    };
}]);