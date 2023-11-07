import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

const EnlistedBots = () => {
  const [botArmy, setBotArmy] = useState([]);
  const [bots, setBots] = useState([]); 
  // CRUD-FETCH
  useEffect(()=>{
    fetch("http://localhost:3000/bots")
    .then((res)=>res.json())
    .then((res) =>{
     setBots(res)
    })
            
    }, []);
    console.log(bots)


  const addToBotArmy = (bot) => {
    if (!botArmy.includes(bot)) {
      setBotArmy([...botArmy, bot]);
    }
  };

  const removeFromBotArmy = (bot) => {
    const updatedArmy = botArmy.filter((b) => b.id !== bot.id);
    setBotArmy(updatedArmy);
  };

  const dischargeBot = (bot) => {
    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
      const updatedBots = bots.filter((b) => b.id !== bot.id);
      setBots(updatedBots);
  };

  return (
    <div className="enlisted-bots">
      <div id='botarmylist'>
        <h3>My Galactic Bot Army</h3>
        <YourBotArmy army={botArmy} removeFromBotArmy={removeFromBotArmy} dischargeBot={dischargeBot} />
      </div>
      <div>
        <h3>Bot BotCollection</h3>
      <BotCollection bots={bots} addToBotArmy={addToBotArmy} dischargeBot={dischargeBot}/>
      </div>
    </div>
  );
};

export default EnlistedBots;

