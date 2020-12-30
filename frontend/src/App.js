import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import FormField from './components/Form'
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="container-fluid bg-light h-100 border pb-5">
      <Container
        className="pt-3"
      >
        <FormField />
      </Container>
    </div>
  );
}

export default App;
