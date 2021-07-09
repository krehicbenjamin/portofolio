import TextTyper from './components/TextTyper/TextTyper';
import Intro from './components/Introduction/Intro'
import './App.css';

function App() {
  return (
    <div className="App">
      <TextTyper 
        text = "Hello, my name is Benjamin!"
        subtitle = "Welcome :)"
      />
      <Intro />
    </div>
  );
}

export default App;
