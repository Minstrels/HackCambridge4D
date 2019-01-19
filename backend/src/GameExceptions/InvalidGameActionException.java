package GameExceptions;

public class InvalidGameActionException extends Exception {

    public InvalidGameActionException(){
        super("GameExceptions.InvalidGameActionException: attempted impossible update to game state.");
    }

}
