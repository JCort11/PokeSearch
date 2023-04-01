import Form from './components/Form';
import './App.css';
import { Nav } from './components/Nav';

function App() {
  return (
    <>
    <Nav />
    <div className="App">      
      <header className="App-header">        
        <Form />
      </header>
    </div>
    </>
  );
}

export default App;
