import { getRandomCoords } from "./getRandomCoords";

export const onGameOver = (
  state,
  setState,
  setGameState,
  setWidth,
  width,
  setDirection,
  PK,
  setHighestScore
) => {
  if (state.score > state.PB) {
    state.PB = state.score;
  }
  if (state.PB > state.highestScore) {
    setHighestScore({
      variables: {
        UserPK: PK,
        HighestScore: state.PB,
      },
    });
  }
  setWidth({
    ...width,
    isMob: false,
  });
  setState({
    ...state,
    snakePos: [[25, 25]],
    direction: "Right",
    speed: 120,
    foodPos: getRandomCoords(state.snakePos),
    attempt: state.attempt + 1,
    isNewHighScore: false
  });
  if (width.width < 800) {
    setDirection("Right");
  }
  setGameState(false);
};
