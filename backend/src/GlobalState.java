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

    public IndividualState deriveIndividual(Integer playerID){
        if (!cardHands.containsKey(playerID) || !playersAlive.containsKey(playerID))
            return null; // If the player doesn't exist, return null.
        else if (!playersAlive.get(playerID))
            return null; // If the player is dead, return null.
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

}
