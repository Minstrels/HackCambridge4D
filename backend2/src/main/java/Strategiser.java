import java.util.*;

public class Strategiser {

  public Decision decide(Probabilities ps, Map<String, Integer> hand) {
    if (ps.deckDist.get(0).get("exploding") > 0.7) {
      if (hand.get("shuffle") > 0) return new Decision("shuffle");
      else return new Decision("pickup");
    } else return new Decision("pickup");
  }
}
