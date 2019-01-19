import java.util.*;

public class IndividualState {
    public Map<String, Integer> discardPile;
    public Map<Integer, Integer> numberOfCards;
    public Map<String, Integer> hand;
    public Map<Integer, Boolean> playersAlive;

    public IndividualState(Integer numPlayers){
        discardPile = new HashMap<>();
        numberOfCards = new HashMap<>();
        hand = new HashMap<>();
        playersAlive = new HashMap<>();

        /*for(int i = 0; i < numPlayers){

        }*/

    }

}
