import random

from game import *

def expectiMax(game, depth, isPlayer):
    if depth == 0 or game.availableCells() == 0:
        return game.score,-1

    if isPlayer:
        maxValue = -1
        direction = 'down'
        for newGame in game.possibleMoves():
            value = expectiMax(newGame[0], depth, not isPlayer)
            maxValue = max(value,maxValue)
            if value == maxValue:
                direction = newGame[1]

        return maxValue,direction

    else:
        expectedValue = 0
        size = game.availableCells()
        n_evaluated = 0

        for newGame in game.possibilities(2):
            if random.random() > 0.9 / (16 - size):
                continue
            n_evaluated += 1
            expectedValue += 0.9 * expectiMax(newGame, depth - 1, not isPlayer)[0]
        for newGame in game.possibilities(4):
            if random.random() < 0.9 / (16 - size):
                continue
            n_evaluated += 1
            expectedValue += 0.1 * expectiMax(newGame, depth - 1, not isPlayer)[0]

        if (n_evaluated == 0):
             return 0
        else:
             return expectedValue / (2 * n_evaluated)


if __name__ == '__main__':
    g = Game()
    g.cells = [[0, 0, 8, 0],
               [2, 2, 0, 4],
               [0, 0, 8, 0],
               [4, 2, 2, 4]]
    maxval,direct = expectiMax(g,3,True)
    print(direct)
