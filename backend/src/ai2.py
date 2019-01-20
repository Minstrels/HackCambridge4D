from game import *

def expectiMax(game, depth, isPlayer):
    if depth == 0 or game.availableCells() == 0:
        return game.score,-1

    if isPlayer:
        maxValue = -1
        direction = ''
        for newGame in game.possibleMoves():
            value = expectiMax(newGame[0], depth, not isPlayer)
            maxValue = max(value,maxValue)
            if value == maxValue:
                direction = newGame[1]

        return maxValue,direction

    else:
        expectedValue = 0
        availableCells = game.availableCells()
        size = availableCells
        for newGame in game.possibilities(2):
            expectedValue += (1.0 / size) * 0.9 * expectiMax(newGame, depth - 1, not isPlayer)[0]
        for newGame in game.possibilities(4):
            expectedValue += (1.0 / size) * 0.1 * expectiMax(newGame, depth - 1, not isPlayer)[0]

        return expectedValue


if __name__ == '__main__':
    g = Game()
    g.cells = [[0, 0, 8, 0],
               [2, 2, 0, 4],
               [0, 0, 8, 0],
               [4, 2, 2, 4]]
    maxval,direct = expectiMax(g,3,True)
    print(direct)
