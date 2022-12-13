import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
     <h3 id='intro'>Hello REACT </h3>
      <div id='formulaire'>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <footer id='footer'>
      <hr></hr>
        <h6>&copy; GoMyCode 2022</h6>
      </footer>
    </div>
  );
}

export default App;
