import GameExceptions.*;
import java.util.*;

public class GlobalState {
    public Map<Integer, Map<String, Integer>> cardHands;
    public List<String> deck;
    public Map<String, Integer> discardPile;
    public Map<Integer, Boolean> playersAlive;

    public GlobalState(Integer numPlayers){
        cardHands = new HashMap<>();
        deck = new LinkedList<>();
        discardPile = new HashMap<>();
        playersAlive = new HashMap<>();

        for(int i = 0; i < numPlayers; i++){
            cardHands.put(i, new HashMap<>()); // Initialise all Maps.
            playersAlive.put(i, true);
        }

    }

    public IndividualState deriveIndividual(Integer playerID) throws InvalidPlayerIDException {
        if (!cardHands.containsKey(playerID) || !playersAlive.containsKey(playerID) || playersAlive.get(playerID))
            throw new InvalidPlayerIDException(playerID); // If the player doesn't exist, or is dead, return null.
        return new IndividualState(discardPile,countCards(cardHands),cardHands.get(playerID),playersAlive,playerID);
    }

    private Map<Integer, Integer> countCards(Map<Integer, Map<String, Integer>> hands) {
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
        if (!playersAlive.containsKey(pID)) throw new InvalidPlayerIDException(pID);
        if (!playersAlive.get(pID)) throw new InvalidGameActionException();
    }

}
