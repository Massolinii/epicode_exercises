import './App.css';

import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ButtonComponent text="Clicca qui, se ti va"/>
        <h5>Buongiorno Epicode</h5>
        <ImageComponent source="https://placekitten.com/222" alt="placekitten.com/222"/>
        <ImageComponent source="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/SilburyHill_gobeirne.jpg/1200px-SilburyHill_gobeirne.jpg" alt="placekitten.com/222"/>
        <br></br>



      </header>
    </div>
  );
}

export default App;
