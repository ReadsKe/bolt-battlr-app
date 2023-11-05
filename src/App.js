import './App.css';
import BotCollection from './component/BotCollection';
import YourBotArmy from './component/YourBotArmy';

function App() {
  return (
    <div className="App">
    <h1>Your Bot Army</h1>
    <div className="container">
      <BotCollection />
      <YourBotArmy />
    </div>
  </div>
  );
}

export default App;
