import Game

class AI:
    def __init__(self,cells):
        self.score = 0
        self.cells = cells
        self.game = Game(self.cells)

    def expectiMax(self, game, depth, isPlayer):
        previousState = game.cells
        if depth == 0 or len(game.availableCells) == 0:
            return game.score(),-1

        if isPlayer:
            maxValue = -1
            for i in range(4):
                newGame = self.nextMove(previousState,i)
                value = self.expectiMax(newGame, depth, not isPlayer)
                maxValue = max(value,maxValue)
            return maxValue,i

        
        else:
            expectedValue = 0
            availableCells = game.availableCells()
            size = len(availableCells)
            for i in range(size):
                cells = previousState
                cells[availableCells[i]] = 2
                newGame = Game(cells)
                expectedValue += (1.0 / size) * 0.9 * self.expectiMax(newGame, depth - 1, not isPlayer)[0]
                
                cells[availableCells[i]] = 4
                newGame = Game(cells)
                expectedValue += (1.0 / size) * 0.1 * self.expectiMax(newGame, depth - 1, not isPlayer)[0]
            
            return expectedValue

    def nextMove(self,previousState,direction):
        if direction == 0:
            return Game(previousState).shiftLeft()
        elif direction == 1:
            return Game(previousState).shiftRight()
        elif direction == 2:
            return Game(previousState).shiftUp()
        else:
            return Game(previousState).shiftDown()
