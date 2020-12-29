import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Chart from './components/Chart'
import FormField from './components/Form'
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="container-fluid bg-light vh-100 border">
      <Container
        className="pt-5"
      >
        <FormField />
      </Container>
      <div className="container bg-white border mt-3 p-3">
        <Chart />
      </div>
    </div>
  );
}

export default App;
