import Game

class AI:
    def __init__(self,cells):
        self.score = 0
        self.cells = cells
        self.game = Game(self.cells)

    def expectiMax(self, game, depth, isPlayer):
        if depth == 0:
            # evaluate stuff
        previousState = game.cells

        if isPlayer:
            maxValue = -1
            moved = False

            for i in range(4):
                newGame = self.nextMove(previousState,i)
                
                value = self.expectiMax(newGame, depth - 1, not isPlayer)
                maxValue = max(value, maxValue)
        
        else:
            expectedValue = 0
            availableCells = game.availableCells()
            size = len(availableCells)
            for i in range(size):
                cells = previousState
                cells[availableCells[i]] = 2
                newGame = Game(cells)
                expectedValue += (1.0 / size) * 0.9 * self.expectiMax(newGame, depth - 1, not isPlayer)



        maxValue = max(moveScores)
        maxMove = moveScores.index(maxValue)

        return maxMove

    def nextMove(previousState,direction):
        if direction == 0:
            return Game(previousState).shiftLeft()
        elif direction == 1:
            return Game(previousState).shiftRight()
        elif direction == 2:
            return Game(previousState).shiftUp()
        else:
            return Game(previousState).shiftDown()
