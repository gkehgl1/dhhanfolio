import './App.css';
import './bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Layout from './Layout/Layout';

function App() {
  return (
    <Layout>
      <Container style={{minHeight:'75vh', display: 'flex'}}>
        <div id="div1">
          <img style={{width:'100%'}} src={require("./main.jpg")} />;
        </div>
        <div id="div2">
          <h1>dddd</h1>
        </div>
      </Container>
    </Layout>
  );
}

export default App;
 