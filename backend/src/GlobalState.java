import GameExceptions.*;
import java.util.*;

public class GlobalState {
    public Integer currentPlayer; // Whose go is it?
    public Integer maxPlayers; // How many players do we have?
    public Map<Integer, Map<CardType, Integer>> cardHands; // What cards does each player have?
    public List<CardType> deck; // What cards are in the deck?
    public Map<CardType, Integer> discardPile; // What cards have been discarded?
    public Map<Integer, Boolean> playersAlive; // Which players are still in the game?

    public GlobalState(Integer numPlayers){
        currentPlayer = 0;
        maxPlayers = numPlayers;
        cardHands = new HashMap<>();
        deck = new LinkedList<>();
        discardPile = new HashMap<>();
        playersAlive = new HashMap<>();

        for(int i = 0; i < numPlayers; i++){
            cardHands.put(i, new HashMap<>()); // Initialise all Maps.
            playersAlive.put(i, true);
        }

    }

    public IndividualState deriveIndividual(Integer playerID) throws InvalidPlayerIDException, InvalidGameActionException {
        if (playerID >= maxPlayers)
            throw new InvalidPlayerIDException(playerID); // If the player doesn't exist.
        else if (!playersAlive.get(playerID))
            throw new InvalidGameActionException(); // If the player we're trying to run as is dead.
        return new IndividualState(discardPile,countCards(cardHands),cardHands.get(playerID),playersAlive,playerID);
    }

    private Map<Integer, Integer> countCards(Map<Integer, Map<CardType, Integer>> hands) {
        Map<Integer, Integer> counts = new HashMap<>();
        for (Integer i : hands.keySet()) {
            Integer total = 0;
            for (Integer j : hands.get(i).values()) {
                total += j;
            }
            counts.put(i, total);
        }
        return counts;
    }

    private void killPlayer(Integer pID) throws InvalidPlayerIDException, InvalidGameActionException{
        if (pID >= maxPlayers)
            throw new InvalidPlayerIDException(pID); // Non-existent player
        else if (!playersAlive.get(pID))
            throw new InvalidGameActionException();  // Player already dead
        playersAlive.put(pID, false);
    }



}
