from flask import Flask, jsonify
from flask_cors import CORS


from game import *

app = Flask(__name__)
CORS(app)
game = None

@app.route("/play/<action>")
def getState(action):
    global game
    if action == 'new':
        game = Game()
        game.newGame()
    else:
        if action == 'left':
            game.shiftLeft()
        elif action == 'right':
            game.shiftRight()
        elif action == 'down':
            game.shiftDown()
        elif action == 'up':
            game.shiftUp()
        game.addValue()
    return jsonify({'gameState': game.serialize()})


if __name__ == '__main__':
    app.run(debug=True)
