import random

class Game:
    def __init__(self):
        self.cells = [[0 for _ in range(4)] for _ in range(4)]
        self.score = 0
        self.min = 0
        self.max = 4
        self.game_over = False
        self.available_cells = (self.max - self.min) ** 2

    def availableCells(self):
        return self.available_cells

    def copy(self):
        g = Game()
        g.cells = [row[:] for row in self.cells]
        g.score = self.score
        g.available_cells = available_cells
        return g

    def equal(self, other):
        return self.cells == other.cells

    def newGame(self):
        # Initialise the game state
        self.addValue()
        self.addValue()
        self.available_cells = (self.max - self.min) ** 2

    def possibilities(self, n):
        for y in range(self.min, self.max):
            for x in range(self.min, self.max):
                if self.cells[y][x] == 0:
                    self.cells[y][x] = n
                    self.available_cells -= 1
                    yield self
                    self.available_cells += 1
                    self.cells[y][x] = 0

    def possibleMoves(self):
        return [(self.copy().shiftLeft(), 'left'), (self.copy().shiftRight(), 'right'),
                (self.copy().shiftDown(), 'down'), (self.copy().shiftUp(), 'up')]


    @staticmethod
    def tighten(row):
        new_row = [i for i in row if i != 0]
        new_row += [0 for i in range(len(row) - len(new_row))]
        return new_row

    def merge(self, row):
        pair = False
        new_row = []
        for i in range(len(row)):
            if pair:
                new_row.append(2 * row[i])
                self.score += 2 * row[i]
                pair = False
            else:
                try:
                    if row[i] == row[i+1]:
                        pair = True
                        self.available_cells += 1
                        new_row.append(0)
                    else:
                        new_row.append(row[i])
                except IndexError:
                    new_row.append(row[i])
        return new_row

    def move_left(self, row):
        return self.tighten(self.merge(self.tighten(row)))

    @staticmethod
    def reflect_vertical(cells):
        return [row[::-1] for row in cells]

    @staticmethod
    def transpose(cells):
        return [list(row) for row in zip(*cells)]

    def shiftLeft(self):
        self.cells = [self.move_left(row) for row in self.cells]
        return self

    def shiftRight(self):
        self.cells = self.reflect_vertical(self.cells)
        self.shiftLeft()
        self.cells = self.reflect_vertical(self.cells)
        return self

    def shiftUp(self):
        self.cells = self.transpose(self.cells)
        self.shiftLeft()
        self.cells = self.transpose(self.cells)
        return self

    def shiftDown(self):
        self.cells = self.transpose(self.cells)
        self.shiftRight()
        self.cells = self.transpose(self.cells)
        return self

    def addValue(self):
        x = random.randint(self.min, self.max - 1)
        y = random.randint(self.min, self.max - 1)
        self.available_cells -= 1

        while self.cells[y][x] != 0:
            x = random.randint(self.min, self.max - 1)
            y = random.randint(self.min, self.max - 1)

        if random.random() > 0.9:
            self.cells[y][x] = 4
        else:
            self.cells[y][x] = 2

    def serialize(self):
        return {'squares': self.cells, 'score': self.score, 'game_over': self.game_over}

    def checkGameOver(self):
        return self.availableCells == 0

if __name__ == '__main__':
    g = Game()
    g.cells = [[0, 0, 8, 0],
               [2, 2, 0, 4],
               [0, 0, 8, 0],
               [4, 2, 2, 4]]
    g.shiftDown()

    print(g.score)
    print(g.cells)
