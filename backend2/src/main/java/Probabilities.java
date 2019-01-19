import java.util.*;

public class Probabilities {

  public Probabilities(List<Map<String, Double>> dDist,
                       Map<String, List<Double>> oPlayers) {
    deckDist = dDist;
    otherPlayers = oPlayers;
  }
  // the distribution for each card in the deck
  public List<Map<String, Double>> deckDist;
  // All players are treated as identical
  // the string is the type of card and the ith position in the list represents
  // the probabibility of having n of that cards.
  public Map<String, List<Double>> otherPlayers;
}
