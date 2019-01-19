import java.util.*;

public class IndividualState {
    public Integer playerID;
    public Map<CardType, Integer> discardPile;
    public Map<Integer, Integer> numberOfCards;
    public Map<CardType, Integer> hand;
    public Map<Integer, Boolean> playersAlive;

    public IndividualState(Map<CardType,Integer> discard, Map<Integer, Integer> cardCounts,
                            Map<CardType, Integer> myHand, Map<Integer, Boolean> liveStatus, Integer id){
        discardPile = discard;
        numberOfCards = cardCounts;
        hand = myHand;
        playersAlive = liveStatus;
        playerID = id;
    }

}
