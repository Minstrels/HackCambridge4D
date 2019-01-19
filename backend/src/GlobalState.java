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

}
