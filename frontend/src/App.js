import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Chart from './components/Chart'
import Form from './components/Form'

function App() {
  return (
    <div className="container-fluid bg-light vh-100 border">
      <div className="container bg-white border mt-3 p-3">
        <Chart />
      </div>
      <Form />
    </div>
  );
}

export default App;
