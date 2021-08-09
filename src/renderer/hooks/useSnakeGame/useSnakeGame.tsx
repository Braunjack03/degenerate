import {
  useState,
  useEffect,
  RefObject,
  KeyboardEvent,
  useCallback,
} from "react";
import {
  changeDirectionWeb,
  changeDirectionMobile,
} from "./utils/changeDirection.js";
import Hammer from "hammerjs";
import { onGameOver } from "./utils/gameOver";
import { getRandomCoords } from "./utils/getRandomCoords";
import { StartGame } from "./utils/startGame";
import { checkIfEat, checkIfOutOfBorders } from "./utils/checkIfEat";
import useInterval from "./utils/useInterval";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { FETCH_HIGHEST_SCORE } from "../../../graphql/queries";
import { SEND_HIGHEST_SCORE } from "../../../graphql/mutation";
import useReduxState from "../useReduxState";

/* eslint-disable react-hooks/exhaustive-deps*/
interface IGameState {
  snakePos: number[][];
  speed: number;
  foodPos: number[];
  highestScore: number;
  PB: number;
  score: number;
  attempt: number;
  isNewHighScore: boolean;
}

export default function useSnakeGame({
  container,
}: {
  container: RefObject<HTMLDivElement> | null;
}) {
  const [state, setState] = useState<IGameState>({
    snakePos: [[25, 25]],
    speed: 120,
    foodPos: getRandomCoords([25, 25]),
    highestScore: 0,
    PB: 0,
    score: 0,
    attempt: 0,
    isNewHighScore: false,
  });
  const { data, loading } = useQuery(FETCH_HIGHEST_SCORE);
  const [setHighestScore] = useMutation(SEND_HIGHEST_SCORE, {
    onCompleted: (data) => {
      if (data.setHighestScore.Flag) {
        setState({
          ...state,
          highestScore: data.setHighestScore.HighestScore,
          isNewHighScore:true
        });
      }
      else{
        setState({
          ...state,
          highestScore: data.setHighestScore.HighestScore,
          isNewHighScore: false
        })
      }
    },
  });
  const [{ wallet }] = useReduxState((state) => state.globalData);
  var PK = wallet?.publicKey?.toBase58();
  const [width, setWidth] = useState({
    width: 0,
    isMob: false,
  });

  useEffect(() => {
    if (!loading) {
      setState({
        ...state,
        highestScore: data.getHighestScore,
      });
    }
  }, [loading]);

  const [gameState, setGameState] = useState(false);
  const [direction, setDirection] = useState<"Right" | "Left" | "Up" | "Down">(
    "Right"
  );

  const handleDirectionChange = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      setDirection(
        changeDirectionWeb(e, direction) as "Right" | "Left" | "Up" | "Down"
      );
    },
    [direction]
  );

  const handleMobileDirectionChange = (
    e: "swipedown" | "swipeup" | "swipeleft" | "swiperight"
  ) => {
    if (width.width < 800) {
      setDirection(
        changeDirectionMobile(e, state) as "Right" | "Left" | "Up" | "Down"
      );
    }
  };

  const handleSizingAndEvents = () => {
    setWidth({ ...width, width: window.innerWidth });
  };
  function enableScroll() {
    window.onscroll = function () {};
  }
  useEffect(() => {
    handleSizingAndEvents();
    return () => {
      enableScroll();
    };
  }, []);

  useEffect(() => {
    setWidth({ ...width, width: window.innerWidth });
    if (container && container.current) {
      const mc = new Hammer(container.current);

      // let the pan gesture support all directions.
      // this will block the vertical scrolling on a touch-device while on the element
      mc.get("swipe").set({ direction: Hammer.DIRECTION_ALL });

      // listen to events...
      mc.on("swipeup swipedown swipeleft swiperight ", function (ev) {
        console.log(`currentState:${state.snakePos}`);
        handleMobileDirectionChange(
          ev.type as "swipedown" | "swipeup" | "swipeleft" | "swiperight"
        );
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.innerWidth]);

  useEffect(() => {
    checkIfOutOfBorders(
      state,
      setState,
      setGameState,
      setWidth,
      width,
      setDirection,
      PK,
      setHighestScore
    );
    checkIfEat(state, setState);
    checkIfCollapsed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.snakePos, direction]);

  function noScroll() {
    // if any scroll is attempted, set this to the previous value
    window.onscroll = function () {
      window.scrollTo(0, 0);
    };
  }
  const focusOnDiv = () => {
    if (container && container.current) {
      container.current.focus();
    }
    noScroll();
  };

  const moveSnake = () => {
    let dots = [...state.snakePos];
    let head = dots[dots.length - 1];

    switch (direction) {
      case "Right":
        head = [head[0] + 5, head[1]];
        break;
      case "Left":
        head = [head[0] - 5, head[1]];
        break;
      case "Down":
        head = [head[0], head[1] + 5];
        break;
      case "Up":
        head = [head[0], head[1] - 5];
        break;
    }

    dots.push(head);
    dots.shift();

    setState({
      ...state,
      snakePos: dots,
    });
  };
  function checkIfCollapsed() {
    let snake = [...state.snakePos];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach((dot, index) => {
      console.log(index);
      if (head[0] === dot[0] && head[1] === dot[1]) {
        onGameOver(
          state,
          setState,
          setGameState,
          setWidth,
          setDirection,
          width,
          PK,
          setHighestScore
        );
      }
    });
  }

  const startGame = () => {
    StartGame(width, setWidth, setGameState, setState, state);
  };

  useInterval(moveSnake, state.speed, gameState);

  return {
    startGame,
    gameState,
    snakePos: state.snakePos,
    score: state.score,
    foodPos: state.foodPos,
    highestScore: state.highestScore,
    PB: state.PB,
    isNewHighScore: state.isNewHighScore,
    attempt: state.attempt,
    width: width.width,
    loading,
    handleDirectionChange,
    focusOnDiv,
  };
}
