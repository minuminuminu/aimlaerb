import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  background-color: #00000073;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StatsWindow = styled.div`
  width: 70%;
  height: 75%;
  background-color: #ffffffa2;
  border-radius: 15px;
`;

export const ReviewStats = () => {
  return (
    <Container>
      <StatsWindow></StatsWindow>
    </Container>
  );
};
