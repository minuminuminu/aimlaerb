import styled from "styled-components";
import { keyframes } from "styled-components";
import { Menu } from "./components/Menu";
import { Modes } from "./components/Modes";
import { Gridshot } from "./components/Gridshot";
import { useState } from "react";

const onPageLoad = keyframes`
  from{opacity:0}
  to{opacity:1}
`;

const FullBody = styled.div`
  width: 100vw;
  height: 100vh;
  animation: ${onPageLoad} 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  background-color: #cefcff;
`;

function App() {
  // const [viewSettings, setViewSettings] = useState({
  //   menu: true,
  //   modes: false,
  //   game: false,
  // });
  const [viewSettings, setViewSettings] = useState({
    menu: false,
    modes: false,
    game: true,
  });

  return (
    <FullBody>
      <Menu show={viewSettings.menu} setViewSettings={setViewSettings} />
      <Modes show={viewSettings.modes} setViewSettings={setViewSettings} />
      <Gridshot show={viewSettings.game} setViewSettings={setViewSettings} />
    </FullBody>
  );
}

export default App;
