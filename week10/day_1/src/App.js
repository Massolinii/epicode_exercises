import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="App">
      <Container>
        <MyNav />
        <Welcome />
        <BookList />
        <MyFooter />
      </Container>
    </div>
  );
}

export default App;
