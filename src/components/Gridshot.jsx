import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { ReviewStats } from "./ReviewStats";

const Gameboard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Header = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  text-transform: uppercase;
`;

const Dot = styled.div`
  position: absolute;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  box-shadow: 0px 0px 15px 0px #2359632d;
  background-color: #18dada;
  transform: ${(props) =>
    `translateX(${props.positionX}vw) translateY(${props.positionY}vh)`};

  &:hover {
    cursor: pointer;
  }
`;

export const Gridshot = (props) => {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const [hits, setHits] = useState(0);
  const [misses, setMisses] = useState(0);
  const [stats, setStats] = useState({
    hits: hits,
    misses: misses,
    accuracy: "100%",
  });
  const [hasStarted, setHasStarted] = useState(false);
  const [timer, setTimer] = useState(5);
  const intervalRef = useRef();

  const displayStats = () => {
    const accuracy = hits / (hits + misses);

    let tempObj = {
      hits: hits,
      misses: misses,
      accuracy: accuracy,
    };

    setStats(tempObj);
  };

  const stopGame = () => {
    console.log(stats);
    setHasStarted(false);
  };

  useEffect(() => {
    if (hasStarted == false) {
      return;
    }

    if (timer == 5) {
      intervalRef.current = setInterval(() => {
        setTimer((seconds) => seconds - 1);
      }, 1000);
    }

    if (timer == 0) {
      clearInterval(intervalRef.current);
      stopGame();
    }
  }, [hasStarted, timer]);

  const hit = () => {
    if (hasStarted == false) {
      setHasStarted(true);
    }

    setHits(hits + 1);
    displayStats();
    setPosX(Math.floor(Math.random() * 86) - 40);
    setPosY(Math.floor(Math.random() * 86) - 40);
  };

  const miss = () => {
    if (hasStarted == false) {
      return;
    }

    setMisses(misses + 1);
  };

  return (
    <>
      {props.show ? (
        <>
          <Gameboard onClick={(e) => miss()}>
            <Header>Time left: {timer}</Header>
            <Dot
              onClick={(e) => {
                hit();
                e.stopPropagation();
              }}
              positionX={posX}
              positionY={posY}
            />
          </Gameboard>
          <ReviewStats></ReviewStats>
        </>
      ) : null}
    </>
  );
};
