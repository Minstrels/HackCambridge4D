import java.util.*;

public class IndividualState {
    public Integer playerID;
    public Map<String, Integer> discardPile;
    public Map<Integer, Integer> numberOfCards;
    public Map<String, Integer> hand;
    public Map<Integer, Boolean> playersAlive;

    public IndividualState(Map<String,Integer> discard, Map<Integer, Integer> cardCounts,
                            Map<String, Integer> myHand, Map<Integer, Boolean> liveStatus, Integer id){
        discardPile = discard;
        numberOfCards = cardCounts;
        hand = myHand;
        playersAlive = liveStatus;
        playerID = id;
    }

}
