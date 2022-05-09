import styled from "styled-components";
import Dashboard from "./componets/Dashboard";
import Menu from "./componets/Menu";
import Notifications from "./componets/Notifications";

const Container = styled.div`
  width: 1280px;
  height: 720px;
  background: ${(props) => props.theme.colors.innerBgColor};

  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  display: flex;
  flex-direction: row;
`;

function App() {
  return (
    <Container>
      <Menu />
      <Dashboard />
      <Notifications />
    </Container>
  );
}

export default App;
