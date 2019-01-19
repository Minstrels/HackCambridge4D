package GameExceptions;

public class InvalidPlayerIDException extends Exception {

    public InvalidPlayerIDException(Integer playerID){
        super("GameExceptions.InvalidPlayerIDException: failed to find values for player " + playerID);
    }

}
