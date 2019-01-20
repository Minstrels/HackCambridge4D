from flask import Flask, jsonify
from flask_cors import CORS


from game import *
from ai2 import *

app = Flask(__name__)
CORS(app)
game = None

degs = {'left': 270, 'up': 0, 'right': 90, 'down': 180}

@app.route("/show")
def showState():
    return jsonify({'gameState': game.serialize()})

@app.route("/play/<action>")
def getState(action):
    global game
    if action == 'new':
        game = Game()
        game.newGame()
    else:

        game.checkGameOver()
        if game.game_over:
            return jsonify({'gameState': game.serialize()})

        oldGame = game.copy()
        if action == 'left':
            game.shiftLeft()
        elif action == 'right':
            game.shiftRight()
        elif action == 'down':
            game.shiftDown()
        elif action == 'up':
            game.shiftUp()
        if not oldGame.equal(game):
            game.addValue()

    game.checkGameOver()
    move, probabilities = expectiMax(game, 3, True)[1:3]
    normalise_const = sum(probabilities.values())
    print(probabilities)
    probabilities = [probabilities['up']/normalise_const, probabilities['right']/normalise_const, probabilities['down']/normalise_const, probabilities['left']/normalise_const] 


    return jsonify({'gameState': game.serialize(), 'direction': degs[move], 'moves': probabilities})


if __name__ == '__main__':
    app.run(debug=True)
