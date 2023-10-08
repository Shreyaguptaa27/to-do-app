// App.js
import './App.css';
import { TodoWrapper } from './components/TodoWrapper';

function App() {
  return (
    <div className="App">
      <figure className="image-container">
        <img src="/todo.png" alt="todologo" className="app-image" />
      </figure>
      <TodoWrapper />
    </div>
  );
}

export default App;

