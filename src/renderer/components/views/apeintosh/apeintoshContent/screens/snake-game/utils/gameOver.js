import {getRandomCoords} from "./getRandomCoords"

export const  onGameOver = (state, setState, setGameState,setWidth, width) => {
    if (state.score > state.PB) {
      state.PB = state.score;
    }
    setWidth({
      ...width,
      isMob: false,
    });
    setState({
      ...state,
      snakePos: [[20, 25]],
      direction: "Right",
      speed: 120,
      foodPos: getRandomCoords(state.snakePos),
      attempt: state.attempt + 1,
    });
    setGameState(false);
  }