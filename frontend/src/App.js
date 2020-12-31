//Styling
import "bootstrap/dist/css/bootstrap.min.css";

//Components
import Store from "./Store";
import Chart from "./components/Chart";
import StatDisplay from "./components/StatDisplay";
import FormField from "./components/Form";
import { Container } from "react-bootstrap";


function App() {
  return (
    <Store>
      <Container fluid className="bg-light h-100 border pb-5">
        <Container className="pt-3">
          <FormField />
        </Container>
        <Container className="bg-white border mt-3 p-3">
          <Chart />
        </Container>
        <Container className="border mt-3 p-3">
          <StatDisplay />
        </Container>
      </Container>
    </Store>
  );
}

export default App;
