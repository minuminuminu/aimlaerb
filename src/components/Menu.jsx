import styled from "styled-components";

const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  flex-direction: column;
`;

const Subheading = styled.h2`
  font-size: 2.5em;
  font-weight: 300;
  margin-top: 1em;
  margin-bottom: 5em;
  opacity: 0.2;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

const Title = styled.h1`
  font-family: "Rock 3D", cursive;
  font-size: 4.5em;
  font-weight: 500;
  text-transform: uppercase;
`;

const Button = styled.button`
  width: 10vw;
  height: 85px;
  border: none;
  border-radius: 8px;
  font-weight: 400;
  font-size: 1.8em;
  background-color: #00d9ff2f;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #00d9ff4b;
    cursor: pointer;
  }
`;

export const Menu = (props) => {
  const switchToMenu = () => {
    props.setViewSettings({ menu: false, modes: true, game: false });
  };

  return (
    <>
      {props.show ? (
        <TitleContainer>
          <Title>Aimlaerb</Title>
          <Subheading>Für League und so ...</Subheading>
          <Button onClick={() => switchToMenu()}>PLAY</Button>
        </TitleContainer>
      ) : null}
    </>
  );
};
