app.controller('GameController', ['GameService', function(GameService){
    var self = this;
    self.games = GameService.games;
    self.addNewGame = GameService.addNewGame;
    self.newGame = GameService.newGame;

    GameService.getGames();
}]);