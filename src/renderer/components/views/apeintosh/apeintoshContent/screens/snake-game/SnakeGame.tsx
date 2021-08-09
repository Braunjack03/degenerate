import { useRef } from "react";
import "./SnakeGame.scss";
import SnakeBody from "./snake components/snakeBody";
import SnakeFood from "./snake components/SnakeFood";
import BananaBiltzLogo from "../../../../../../../assets/images/pictures/games-snake/banana-blitz-logo.png";
import ApeintoshButton from "../../../../../common/apeintosh/apeintoshButton/ApeintoshButton";
import useScreen from "../../../../../../hooks/useScreen";
import useSnakeGame from "../../../../../../hooks/useSnakeGame/useSnakeGame";
export default function SnakeGame(): JSX.Element {
  const [, setScreen] = useScreen();
  const gameWrapRef = useRef<HTMLDivElement>(null);
  const {
    startGame,
    score,
    snakePos,
    foodPos,
    gameState,
    highestScore,
    attempt,
    width,
    isNewHighScore,
    handleDirectionChange,
    focusOnDiv,
    loading,
  } = useSnakeGame({
    container: gameWrapRef,
  });

  if (loading) {
    return <></>;
  }
  return (
    <>
      <div
        id="game-wrap"
        ref={gameWrapRef}
        onKeyDown={(e) => handleDirectionChange(e)}
        onMouseEnter={focusOnDiv}
        className={gameState ? "game-wrapper" : "game-wrapper active"}
        tabIndex={0}
      >
        <img
          src={BananaBiltzLogo}
          width={250}
          style={{ marginBottom: 5 }}
          alt=""
        />

        <div className="playArea">
          <SnakeBody position={snakePos} />
          <SnakeFood position={foodPos} />
        </div>
        <p id="score">Score: {score}</p>
      </div>
      {attempt > 0 ? (
        <div className={gameState ? "active" : "game-start-screen"}>
          <div className="start-screen-content-wrapper">
            <span
              onClick={() => {
                setScreen("HOME");
              }}
              id="closeButtonAfter"
            >
              x
            </span>
            <p>
              Game Over!
              <br />
            </p>
            {isNewHighScore ? (
              <p>
                HigestScore: {highestScore} <br />
                Score: {score} <br />
                Congratulations! You <br /> have the highest score..
              </p>
            ) : (
              <p>
                HigestScore: {highestScore} <br />
                Score: {score} <br />
                You should probably
                <br /> play again
              </p>
            )}

            <ApeintoshButton className="btn-play" onClick={() => startGame()}>
              Play
            </ApeintoshButton>
          </div>
        </div>
      ) : (
        <div className={gameState ? "active" : "game-start-screen"}>
          <div className="start-screen-content-wrapper">
            <span
              onClick={() => {
                setScreen("HOME");
              }}
              id="closeButton"
            >
              x
            </span>
            <p>Highest score: {highestScore}</p>
            {width < 800 ? (
              <p>
                Swipe to move
                <br /> Highest score by
                <br /> August 12th wins an ape.{" "}
              </p>
            ) : (
              <p>
                To play use arrow keys.
                <br /> Highest score by
                <br /> August 12th wins an ape.{" "}
              </p>
            )}

            <ApeintoshButton className="btn-play" onClick={() => startGame()}>
              Play
            </ApeintoshButton>
          </div>
        </div>
      )}
    </>
  );
}
