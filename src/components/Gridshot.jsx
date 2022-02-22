import styled from "styled-components";
import { useState, useEffect } from "react";

const Gameboard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Dot = styled.div`
  /* position: absolute; */
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
  const [hasStarted, setHasStarted] = useState(false);
  const [timer, setTimer] = useState(5);
  let interval;

  const startTimer = () => {
    interval = setInterval(() => {
      setTimer((seconds) => seconds - 1);
    }, 1000);
  };

  useEffect(() => {
    if (timer != 5) {
      console.log(timer);
    }

    if (timer == 0) {
      console.log("0 reached");
      clearInterval(interval);
      console.log("interval cleared");
    }
  }, [timer]);

  useEffect(() => {
    if (hasStarted == false) {
      return;
    }

    startTimer();
  }, [hasStarted]);

  const hit = () => {
    if (hasStarted == false) {
      setHasStarted(true);
    }

    setHits(hits + 1);
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
        <Gameboard onClick={(e) => miss()}>
          <Dot
            onClick={(e) => {
              hit();
              e.stopPropagation();
            }}
            positionX={posX}
            positionY={posY}
          />
          {/* <button
            onClick={(e) => {
              e.stopPropagation();
              console.log(`hits ${hits} and misses ${misses}`);
            }}
          >
            show count
          </button> */}
        </Gameboard>
      ) : null}
    </>
  );
};
