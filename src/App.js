import './App.css';
import dnd from './dnd.js';

function App() {
  dnd();
  return (
    <div>
      <div class="container">
        <div draggable="true" class="box">A</div>
        <div draggable="true" class="box">B</div>
        <div draggable="true" class="box">C</div>
      </div>
    </div>
  );
}

export default App;
