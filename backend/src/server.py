from flask import Flask, jsonify

from game import *

app = Flask(__name__)
game = None

@app.route("/")
def getState():
    return jsonify({'gameState': game.serialize()})


if __name__ == '__main__':
    game = Game()
    app.run(debug=True)
