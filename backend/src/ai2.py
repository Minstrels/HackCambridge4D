import random

from game import *

def edgeHeuristic(game):
    edgeSum = sum(game.cells[0]) + sum(game.cells[3]) + \
              sum([game.cells[y][0] for y in range(4)]) + \
              sum([game.cells[y][3] for y in range(4)]) / 4
    return edgeSum

def cornerHeuristic(game):
    maxV, maxSquare = max((game.cells[0][0], (0, 0)),
                          (game.cells[3][0], (0, 3)),
                          (game.cells[0][3], (3, 0)),
                          (game.cells[3][3], (3, 3)))
    corners = 0
    if maxSquare == (0, 0):
        corners += (game.cells[0][1] + game.cells[1][0]) * 1.3
        corners += sum(game.cells[0]) + sum([game.cells[y][0] for y in range(4)]) / 3
    elif maxSquare == (3, 0):
        corners += (game.cells[1][3] + game.cells[0][2]) * 1.3
        corners += sum(game.cells[0]) + sum([game.cells[y][3] for y in range(4)]) / 3
    elif maxSquare == (0, 3):
        corners += (game.cells[3][1] + game.cells[2][0]) * 1.3
        corners += sum(game.cells[3]) + sum([game.cells[y][0] for y in range(4)]) / 3
    elif maxSquare == (3, 3):
        corners += (game.cells[2][3] + game.cells[3][2]) * 1.3
        corners += sum(game.cells[3]) + sum([game.cells[y][3] for y in range(4)]) / 3


    return maxV * 2 + corners / 3

def emptySquares(game):
    emptySum = len([y for (y, x) in zip(range(4), range(4)) if game.cells[y][x] == 0])
    return emptySum

def h(game):
    return edgeHeuristic(game) + emptySquares(game) + cornerHeuristic(game)

def expectiMax(game, depth, isPlayer):
    if depth == 0 or game.availableCells() == 0:
        return game.score + h(game),-1

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
