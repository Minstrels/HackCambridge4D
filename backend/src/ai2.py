import Game

class AI:
    def __init__(self,cells):
        self.score = 0
        self.cells = cells
        self.game = Game(self.cells)

    def expectiMax(self, game, isPlayer):

        previousScore = self.score
        previousState = self.cells

        left = Game(previousState).shiftLeft()
        right = Game(previousState).shiftRight()
        up = Game(previousState).shiftUp()
        down = Game(previousState).shiftDown()

        moveScores = [left.score, right.score, up.score, down.score]

        maxValue = max(moveScores)
        maxMove = moveScores.index(maxValue)

        return maxMove