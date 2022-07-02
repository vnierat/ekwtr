import "./App.css";
import Header from "./components/header/Header";
import { Fragment } from "react";
import { Container } from "./App.style";
import UserDashboard from "./components/userInformations/UserDashboard";

const App = () => (
  <Fragment>
    <Header />
    <Container>
      <UserDashboard />
    </Container>
  </Fragment>
);

export default App;
